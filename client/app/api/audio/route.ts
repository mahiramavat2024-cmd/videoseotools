import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import ffmpegPath from "ffmpeg-static";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const videoUrl = body?.videoUrl?.trim();

    if (!videoUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Video URL is required.",
        },
        { status: 400 }
      );
    }

    let parsedUrl: URL;

    try {
      parsedUrl = new URL(videoUrl);
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid video URL.",
        },
        { status: 400 }
      );
    }

    if (
      parsedUrl.protocol !== "http:" &&
      parsedUrl.protocol !== "https:"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid video URL.",
        },
        { status: 400 }
      );
    }

    if (!ffmpegPath) {
      console.error("FFmpeg binary not found.");

      return NextResponse.json(
        {
          success: false,
          error: "Audio conversion service is not available.",
        },
        { status: 500 }
      );
    }

    /*
     * Fetch original video
     */
    const videoResponse = await fetch(videoUrl, {
      headers: {
        Accept: "video/*,*/*;q=0.8",
        Referer: "https://www.instagram.com/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/151.0 Safari/537.36",
      },
      cache: "no-store",
    });

    if (!videoResponse.ok || !videoResponse.body) {
      console.error(
        "Video fetch failed:",
        videoResponse.status
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to access the video. The download link may have expired.",
        },
        { status: 502 }
      );
    }

    /*
     * Start FFmpeg
     *
     * Input:
     * video stream
     *
     * Output:
     * MP3 audio
     */
    const ffmpeg = spawn(ffmpegPath, [
      "-hide_banner",
      "-loglevel",
      "error",

      "-i",
      "pipe:0",

      "-vn",

      "-acodec",
      "libmp3lame",

      "-b:a",
      "192k",

      "-f",
      "mp3",

      "pipe:1",
    ]);

    let errorOutput = "";

    ffmpeg.stderr.on("data", (chunk) => {
      errorOutput += chunk.toString();
    });

    /*
     * Pipe fetched video into FFmpeg
     */
    const reader = videoResponse.body.getReader();

    try {
      while (true) {
        const { done, value } =
          await reader.read();

        if (done) {
          break;
        }

        if (!ffmpeg.stdin.destroyed) {
          ffmpeg.stdin.write(value);
        }
      }

      ffmpeg.stdin.end();
    } catch (error) {
      ffmpeg.stdin.destroy();

      console.error(
        "Video stream error:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          error: "Unable to read the video stream.",
        },
        { status: 502 }
      );
    }

    /*
     * Convert Node stream → Web stream
     */
    const outputStream =
      new ReadableStream<Uint8Array>({
        start(controller) {
          ffmpeg.stdout.on(
            "data",
            (chunk: Buffer) => {
              controller.enqueue(
                new Uint8Array(chunk)
              );
            }
          );

          ffmpeg.stdout.on(
            "end",
            () => {
              controller.close();
            }
          );

          ffmpeg.stdout.on(
            "error",
            (error) => {
              console.error(
                "FFmpeg stdout error:",
                error
              );

              controller.error(error);
            }
          );

          ffmpeg.on(
            "error",
            (error) => {
              console.error(
                "FFmpeg process error:",
                error
              );

              controller.error(error);
            }
          );

          ffmpeg.on(
            "close",
            (code) => {
              if (
                code !== 0 &&
                code !== null
              ) {
                console.error(
                  "FFmpeg failed:",
                  errorOutput
                );
              }
            }
          );
        },

        cancel() {
          if (!ffmpeg.killed) {
            ffmpeg.kill("SIGKILL");
          }
        },
      });

    return new Response(outputStream, {
      status: 200,

      headers: {
        "Content-Type": "audio/mpeg",

        "Content-Disposition":
          'attachment; filename="vidnova-audio.mp3"',

        "Cache-Control":
          "no-store, no-cache, must-revalidate",

        Pragma: "no-cache",
      },
    });
  } catch (error) {
    console.error(
      "Audio API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to convert video to audio.",
      },
      { status: 500 }
    );
  }
}
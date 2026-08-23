import { NextRequest, NextResponse } from "next/server";

const EASYDOWN_API_URL =
  "https://api.easydown.org/api/v1/parse";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = body?.url?.trim();

    if (!url) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a video URL.",
        },
        { status: 400 }
      );
    }

    // Validate URL
    try {
      const parsedUrl = new URL(url);

      if (
        parsedUrl.protocol !== "http:" &&
        parsedUrl.protocol !== "https:"
      ) {
        throw new Error("Invalid protocol");
      }
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid URL.",
        },
        { status: 400 }
      );
    }

    // Get secret API key from server environment
    const apiKey = process.env.EASYDOWN_API_KEY;

    if (!apiKey) {
      console.error("EASYDOWN_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Downloader API is not configured.",
        },
        { status: 500 }
      );
    }

    // Call EasyDown
    const response = await fetch(EASYDOWN_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
      }),
      cache: "no-store",
    });

    const rawText = await response.text();

    let data;

    try {
      data = JSON.parse(rawText);
    } catch {
      console.error("EasyDown invalid response:", rawText);

      return NextResponse.json(
        {
          success: false,
          error: "Downloader service returned an invalid response.",
        },
        { status: 502 }
      );
    }

    if (!response.ok) {
      console.error("EasyDown API Error:", data);

      return NextResponse.json(
        {
          success: false,
          error:
            data?.msg ||
            data?.message ||
            "Unable to process this URL.",
        },
        {
          status: response.status,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: data?.data || null,
      message: data?.msg || "success",
    });
  } catch (error) {
    console.error("Universal Downloader Error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
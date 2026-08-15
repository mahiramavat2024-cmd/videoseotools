import { NextResponse } from "next/server";

type ChannelItem = {
  id: string;

  snippet?: {
    title?: string;
    description?: string;
    customUrl?: string;
    thumbnails?: {
      high?: {
        url?: string;
      };
    };
  };

  statistics?: {
    viewCount?: string;
    subscriberCount?: string;
    videoCount?: string;
  };

  contentDetails?: {
    relatedPlaylists?: {
      uploads?: string;
    };
  };
};

type ChannelResponse = {
  items?: ChannelItem[];

  error?: {
    message?: string;
  };
};

type PlaylistItem = {
  contentDetails?: {
    videoId?: string;
  };

  snippet?: {
    publishedAt?: string;
    title?: string;
  };
};

type PlaylistResponse = {
  items?: PlaylistItem[];

  error?: {
    message?: string;
  };
};

type VideoItem = {
  id: string;

  snippet?: {
    publishedAt?: string;
    title?: string;
  };

  statistics?: {
    viewCount?: string;
    likeCount?: string;
    commentCount?: string;
  };
};

type VideosResponse = {
  items?: VideoItem[];

  error?: {
    message?: string;
  };
};

/* =========================
   CHANNEL IDENTIFIER
========================= */

function extractChannelIdentifier(input: string) {
  const value = input.trim();

  // Direct Channel ID
  if (value.startsWith("UC") && value.length >= 20) {
    return {
      type: "id" as const,
      value,
    };
  }

  try {
    const url = new URL(value);

    const parts = url.pathname
      .split("/")
      .filter(Boolean);

    if (!parts.length) {
      return null;
    }

    // /channel/UCxxxx
    if (parts[0] === "channel" && parts[1]) {
      return {
        type: "id" as const,
        value: parts[1],
      };
    }

    // /@username
    if (parts[0].startsWith("@")) {
      return {
        type: "handle" as const,
        value: parts[0],
      };
    }

    // /user/username
    if (parts[0] === "user" && parts[1]) {
      return {
        type: "username" as const,
        value: parts[1],
      };
    }
  } catch {
    // Continue below
  }

  // @username
  if (value.startsWith("@")) {
    return {
      type: "handle" as const,
      value,
    };
  }

  // Plain username
  return {
    type: "handle" as const,
    value: `@${value.replace(/^@/, "")}`,
  };
}

/* =========================
   YOUTUBE API REQUEST
========================= */

async function youtubeRequest<T>(
  endpoint: string,
  params: URLSearchParams,
  apiKey: string
): Promise<T> {
  params.set("key", apiKey);

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/${endpoint}?${params.toString()}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = (await response.json()) as T & {
    error?: {
      message?: string;
    };
  };

  if (!response.ok) {
    throw new Error(
      data.error?.message ||
        "YouTube API request failed."
    );
  }

  return data;
}

/* =========================
   GET
========================= */

export async function GET(req: Request) {
  try {
    /* =========================
       API KEY
    ========================= */

    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "YouTube API key is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    /* =========================
       INPUT
    ========================= */

    const { searchParams } = new URL(req.url);

    const input = searchParams.get("channel");

    if (!input?.trim()) {
      return NextResponse.json(
        {
          error:
            "YouTube channel URL or handle is required.",
        },
        {
          status: 400,
        }
      );
    }

    /* =========================
       IDENTIFY CHANNEL
    ========================= */

    const identifier =
      extractChannelIdentifier(input);

    if (!identifier) {
      return NextResponse.json(
        {
          error:
            "Invalid YouTube channel URL or handle.",
        },
        {
          status: 400,
        }
      );
    }

    /* =========================
       CHANNEL API
    ========================= */

    const channelParams =
      new URLSearchParams({
        part:
          "snippet,statistics,contentDetails",
      });

    if (identifier.type === "id") {
      channelParams.set(
        "id",
        identifier.value
      );
    }

    if (identifier.type === "handle") {
      channelParams.set(
        "forHandle",
        identifier.value
      );
    }

    if (identifier.type === "username") {
      channelParams.set(
        "forUsername",
        identifier.value
      );
    }

    const channelData =
      await youtubeRequest<ChannelResponse>(
        "channels",
        channelParams,
        apiKey
      );

    /* =========================
       CHANNEL NOT FOUND
    ========================= */

    if (
      !channelData.items ||
      channelData.items.length === 0
    ) {
      return NextResponse.json(
        {
          error:
            "Channel not found. Please check the YouTube channel URL or handle.",
        },
        {
          status: 404,
        }
      );
    }

    const channel =
      channelData.items[0];

    const statistics =
      channel.statistics || {};

    const snippet =
      channel.snippet || {};

    const uploadsPlaylist =
      channel.contentDetails
        ?.relatedPlaylists
        ?.uploads;

    /* =========================
       RECENT VIDEOS
    ========================= */

    let recentVideos: Array<{
      id: string;
      title: string;
      publishedAt: string;
      views: number;
    }> = [];

    if (uploadsPlaylist) {
      const playlistParams =
        new URLSearchParams({
          part:
            "snippet,contentDetails",
          playlistId:
            uploadsPlaylist,
          maxResults: "50",
        });

      const playlistData =
        await youtubeRequest<PlaylistResponse>(
          "playlistItems",
          playlistParams,
          apiKey
        );

      const videoIds =
        playlistData.items
          ?.map(
            (item) =>
              item.contentDetails
                ?.videoId
          )
          .filter(Boolean)
          .join(",") || "";

      if (videoIds) {
        const videoParams =
          new URLSearchParams({
            part:
              "snippet,statistics",
            id: videoIds,
          });

        const videoData =
          await youtubeRequest<VideosResponse>(
            "videos",
            videoParams,
            apiKey
          );

        const thirtyDaysAgo =
          Date.now() -
          30 *
            24 *
            60 *
            60 *
            1000;

        recentVideos =
          videoData.items
            ?.filter((video) => {
              const publishedAt =
                video.snippet
                  ?.publishedAt || "";

              return (
                publishedAt &&
                new Date(
                  publishedAt
                ).getTime() >=
                  thirtyDaysAgo
              );
            })
            .map((video) => ({
              id: video.id,

              title:
                video.snippet?.title ||
                "Untitled video",

              publishedAt:
                video.snippet
                  ?.publishedAt || "",

              views: Number(
                video.statistics
                  ?.viewCount || 0
              ),
            })) || [];
      }
    }

    /* =========================
       30 DAY VIEWS
    ========================= */

    const recent30DayViews =
      recentVideos.reduce(
        (total, video) =>
          total + video.views,
        0
      );

    /* =========================
       RESPONSE
    ========================= */

    return NextResponse.json({
      channel: {
        id: channel.id,

        title:
          snippet.title ||
          "Unknown Channel",

        description:
          snippet.description ||
          "",

        customUrl:
          snippet.customUrl ||
          "",

        thumbnail:
          snippet.thumbnails?.high
            ?.url || "",

        subscribers: Number(
          statistics.subscriberCount ||
            0
        ),

        totalViews: Number(
          statistics.viewCount || 0
        ),

        videoCount: Number(
          statistics.videoCount || 0
        ),

        recent30DayViews,

        recentVideos:
          recentVideos.slice(0, 10),
      },
    });
  } catch (error) {
    console.error(
      "YouTube Channel API Error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch YouTube channel.",
      },
      {
        status: 500,
      }
    );
  }
}
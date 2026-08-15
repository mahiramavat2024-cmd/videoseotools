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
};

type PlaylistResponse = {
  items?: PlaylistItem[];
};

type VideoItem = {
  id: string;
  snippet?: {
    publishedAt?: string;
    title?: string;
  };
  statistics?: {
    viewCount?: string;
  };
};

type VideosResponse = {
  items?: VideoItem[];
};

type SearchItem = {
  id?: {
    channelId?: string;
  };
};

type SearchResponse = {
  items?: SearchItem[];
  error?: {
    message?: string;
  };
};

// =====================================================
// YOUTUBE API REQUEST
// =====================================================

async function youtubeRequest<T>(
  endpoint: string,
  params: URLSearchParams,
  apiKey: string
): Promise<T> {
  params.set("key", apiKey);

  const url =
    `https://www.googleapis.com/youtube/v3/${endpoint}` +
    `?${params.toString()}`;

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });

  const data = (await response.json()) as T & {
    error?: {
      message?: string;
    };
  };

  if (!response.ok) {
    throw new Error(
      data.error?.message ||
        `YouTube API request failed with status ${response.status}.`
    );
  }

  return data;
}

// =====================================================
// CLEAN INPUT
// =====================================================

function cleanInput(input: string) {
  return input
    .trim()
    .replace(/^["']|["']$/g, "");
}

// =====================================================
// FIND CHANNEL ID
// =====================================================

async function findChannelId(
  input: string,
  apiKey: string
): Promise<string | null> {
  const value = cleanInput(input);

  // ---------------------------------------------------
  // 1. DIRECT CHANNEL ID
  // Example:
  // UCX6OQ3DkcsbYNE6H8uQQuVA
  // ---------------------------------------------------

  if (/^UC[a-zA-Z0-9_-]{20,}$/.test(value)) {
    return value;
  }

  // ---------------------------------------------------
  // 2. URL
  // ---------------------------------------------------

  let pathname = "";

  try {
    const url = new URL(value);
    pathname = url.pathname;
  } catch {
    // Not a full URL
  }

  if (pathname) {
    const parts = pathname.split("/").filter(Boolean);

    // /channel/UC...
    if (
      parts[0]?.toLowerCase() === "channel" &&
      parts[1] &&
      /^UC[a-zA-Z0-9_-]{20,}$/.test(parts[1])
    ) {
      return parts[1];
    }

    // /user/username
    if (
      parts[0]?.toLowerCase() === "user" &&
      parts[1]
    ) {
      const username = decodeURIComponent(parts[1]);

      const usernameParams = new URLSearchParams({
        part: "id",
        forUsername: username,
      });

      const usernameData =
        await youtubeRequest<ChannelResponse>(
          "channels",
          usernameParams,
          apiKey
        );

      if (usernameData.items?.[0]?.id) {
        return usernameData.items[0].id;
      }
    }

    // /@handle
    if (parts[0]?.startsWith("@")) {
      const handle = parts[0];

      const handleParams = new URLSearchParams({
        part: "id",
        forHandle: handle,
      });

      const handleData =
        await youtubeRequest<ChannelResponse>(
          "channels",
          handleParams,
          apiKey
        );

      if (handleData.items?.[0]?.id) {
        return handleData.items[0].id;
      }
    }

    // /c/channelname
    if (
      parts[0]?.toLowerCase() === "c" &&
      parts[1]
    ) {
      return searchChannel(parts[1], apiKey);
    }
  }

  // ---------------------------------------------------
  // 3. @HANDLE
  // Example: @MrBeast
  // ---------------------------------------------------

  if (value.startsWith("@")) {
    const handleParams = new URLSearchParams({
      part: "id",
      forHandle: value,
    });

    const handleData =
      await youtubeRequest<ChannelResponse>(
        "channels",
        handleParams,
        apiKey
      );

    if (handleData.items?.[0]?.id) {
      return handleData.items[0].id;
    }
  }

  // ---------------------------------------------------
  // 4. HANDLE WITHOUT @
  // Example: MrBeast
  // ---------------------------------------------------

  const possibleHandle = value.replace(/^@/, "");

  const handleParams = new URLSearchParams({
    part: "id",
    forHandle: possibleHandle,
  });

  const handleData =
    await youtubeRequest<ChannelResponse>(
      "channels",
      handleParams,
      apiKey
    );

  if (handleData.items?.[0]?.id) {
    return handleData.items[0].id;
  }

  // ---------------------------------------------------
  // 5. FALLBACK SEARCH
  // Example: MrBeast
  // ---------------------------------------------------

  return searchChannel(value, apiKey);
}

// =====================================================
// SEARCH CHANNEL BY NAME
// =====================================================

async function searchChannel(
  query: string,
  apiKey: string
): Promise<string | null> {
  const searchParams = new URLSearchParams({
    part: "snippet",
    q: query.replace(/^@/, ""),
    type: "channel",
    maxResults: "5",
  });

  const searchData =
    await youtubeRequest<SearchResponse>(
      "search",
      searchParams,
      apiKey
    );

  const firstChannel =
    searchData.items?.find(
      (item) => item.id?.channelId
    );

  return firstChannel?.id?.channelId || null;
}

// =====================================================
// GET CHANNEL
// =====================================================

async function getChannel(
  channelId: string,
  apiKey: string
) {
  const params = new URLSearchParams({
    part: "snippet,statistics,contentDetails",
    id: channelId,
  });

  const data =
    await youtubeRequest<ChannelResponse>(
      "channels",
      params,
      apiKey
    );

  return data.items?.[0] || null;
}

// =====================================================
// GET RECENT VIDEOS
// =====================================================

async function getRecentVideos(
  uploadsPlaylist: string,
  apiKey: string
) {
  const playlistParams = new URLSearchParams({
    part: "contentDetails",
    playlistId: uploadsPlaylist,
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
      ?.map((item) => item.contentDetails?.videoId)
      .filter(Boolean)
      .join(",") || "";

  if (!videoIds) {
    return [];
  }

  const videoParams = new URLSearchParams({
    part: "snippet,statistics",
    id: videoIds,
  });

  const videoData =
    await youtubeRequest<VideosResponse>(
      "videos",
      videoParams,
      apiKey
    );

  return (
    videoData.items?.map((video) => ({
      id: video.id,
      title:
        video.snippet?.title ||
        "Untitled video",
      publishedAt:
        video.snippet?.publishedAt ||
        "",
      views: Number(
        video.statistics?.viewCount || 0
      ),
    })) || []
  );
}

// =====================================================
// GET API
// =====================================================

export async function GET(req: Request) {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "YOUTUBE_API_KEY is not configured.",
        },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(req.url);

    const input =
      searchParams.get("channel")?.trim();

    if (!input) {
      return NextResponse.json(
        {
          error:
            "Please enter a YouTube channel URL, handle or channel name.",
        },
        { status: 400 }
      );
    }

    console.log(
      "[YouTube] Searching channel:",
      input
    );

    // -------------------------------------------------
    // FIND CHANNEL ID
    // -------------------------------------------------

    const channelId =
      await findChannelId(input, apiKey);

    if (!channelId) {
      return NextResponse.json(
        {
          error:
            "Channel information was not returned. Please check the channel name, handle or URL.",
        },
        { status: 404 }
      );
    }

    console.log(
      "[YouTube] Channel ID:",
      channelId
    );

    // -------------------------------------------------
    // GET CHANNEL DATA
    // -------------------------------------------------

    const channel =
      await getChannel(channelId, apiKey);

    if (!channel) {
      return NextResponse.json(
        {
          error:
            "Channel information was not returned.",
        },
        { status: 404 }
      );
    }

    const statistics =
      channel.statistics || {};

    const snippet =
      channel.snippet || {};

    const uploadsPlaylist =
      channel.contentDetails
        ?.relatedPlaylists
        ?.uploads;

    // -------------------------------------------------
    // RECENT VIDEOS
    // -------------------------------------------------

    let recentVideos: Array<{
      id: string;
      title: string;
      publishedAt: string;
      views: number;
    }> = [];

    if (uploadsPlaylist) {
      const videos =
        await getRecentVideos(
          uploadsPlaylist,
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
        videos.filter((video) => {
          if (!video.publishedAt) {
            return false;
          }

          return (
            new Date(
              video.publishedAt
            ).getTime() >=
            thirtyDaysAgo
          );
        });
    }

    // -------------------------------------------------
    // 30 DAY VIEWS
    // -------------------------------------------------

    const recent30DayViews =
      recentVideos.reduce(
        (total, video) =>
          total + video.views,
        0
      );

    // -------------------------------------------------
    // ESTIMATED VIEW PERIODS
    //
    // IMPORTANT:
    // YouTube public API doesn't provide exact
    // historical daily/weekly/monthly analytics.
    //
    // These are estimates based on the latest
    // 30-day public video views.
    // -------------------------------------------------

    const dailyViews =
      Math.round(
        recent30DayViews / 30
      );

    const weeklyViews =
      Math.round(
        dailyViews * 7
      );

    const monthlyViews =
      recent30DayViews;

    const yearlyViews =
      Math.round(
        monthlyViews * 12
      );

    return NextResponse.json({
      success: true,

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
          statistics.viewCount ||
            0
        ),

        videoCount: Number(
          statistics.videoCount ||
            0
        ),

        // View estimates
        dailyViews,

        weeklyViews,

        monthlyViews,

        yearlyViews,

        recent30DayViews,

        recentVideos:
          recentVideos.slice(0, 10),
      },
    });
  } catch (error) {
    console.error(
      "[YouTube Channel API Error]",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch YouTube channel.",
      },
      { status: 500 }
    );
  }
}
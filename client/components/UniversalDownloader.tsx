"use client";

import { useState } from "react";

type Platform =
  | "instagram"
  | "youtube"
  | "tiktok"
  | "facebook"
  | "twitter"
  | "threads"
  | "reddit";

type Video = {
  url?: string;
  quality?: string;
  format?: string;
  mimeType?: string;
  width?: number;
  height?: number;
  hasAudio?: boolean;
};

type Image = {
  url?: string;
};

type DownloadData = {
  platform?: string;
  title?: string;
  thumbnail?: string;
  videos?: Video[];
  images?: Image[];
};

type ApiResponse = {
  success?: boolean;
  data?: DownloadData | null;
  error?: string;
  message?: string;
};

type Props = {
  platform: Platform;
  title: string;
  placeholder: string;
};

const platformRules: Record<
  Platform,
  {
    name: string;
    hosts: string[];
    pathKeywords?: string[];
  }
> = {
  instagram: {
    name: "Instagram",
    hosts: ["instagram.com", "www.instagram.com"],
    pathKeywords: ["/reel/", "/reels/", "/p/"],
  },

  youtube: {
    name: "YouTube",
    hosts: [
      "youtube.com",
      "www.youtube.com",
      "youtu.be",
      "www.youtu.be",
    ],
  },

  tiktok: {
    name: "TikTok",
    hosts: ["tiktok.com", "www.tiktok.com"],
  },

  facebook: {
    name: "Facebook",
    hosts: [
      "facebook.com",
      "www.facebook.com",
      "fb.watch",
    ],
  },

  twitter: {
    name: "Twitter/X",
    hosts: [
      "twitter.com",
      "www.twitter.com",
      "x.com",
      "www.x.com",
    ],
  },

  threads: {
    name: "Threads",
    hosts: [
      "threads.net",
      "www.threads.net",
    ],
  },

  reddit: {
    name: "Reddit",
    hosts: [
      "reddit.com",
      "www.reddit.com",
      "old.reddit.com",
      "www.old.reddit.com",
    ],
  },
};

function isValidPlatformUrl(
  value: string,
  platform: Platform
) {
  try {
    const parsed = new URL(value);
    const rule = platformRules[platform];

    const hostname =
      parsed.hostname.toLowerCase();

    if (!rule.hosts.includes(hostname)) {
      return false;
    }

    if (rule.pathKeywords?.length) {
      return rule.pathKeywords.some(
        (keyword) =>
          parsed.pathname
            .toLowerCase()
            .includes(keyword)
      );
    }

    return true;
  } catch {
    return false;
  }
}

/* =========================================================
   QUALITY HELPERS
========================================================= */

function getQualityValue(
  quality?: string,
  height?: number
): number {
  if (height) {
    return height;
  }

  const value = (quality || "").toLowerCase();

  if (
    value.includes("2160") ||
    value.includes("4k") ||
    value.includes("uhd")
  ) {
    return 2160;
  }

  if (
    value.includes("1440") ||
    value.includes("2k")
  ) {
    return 1440;
  }

  if (value.includes("1080")) {
    return 1080;
  }

  if (value.includes("720")) {
    return 720;
  }

  if (value.includes("480")) {
    return 480;
  }

  if (value.includes("360")) {
    return 360;
  }

  if (value.includes("240")) {
    return 240;
  }

  return 0;
}

function getQualityLabel(
  quality?: string,
  height?: number
): string {
  const value = getQualityValue(
    quality,
    height
  );

  if (value >= 2160) {
    return "4K";
  }

  if (value >= 1440) {
    return "1440p";
  }

  if (value >= 1080) {
    return "1080p";
  }

  if (value >= 720) {
    return "720p";
  }

  if (value >= 480) {
    return "480p";
  }

  if (value >= 360) {
    return "360p";
  }

  if (value >= 240) {
    return "240p";
  }

  return quality || "Video";
}

function getMimeLabel(
  format?: string,
  mimeType?: string
): string {
  if (format) {
    return format.toUpperCase();
  }

  if (mimeType) {
    const clean = mimeType.split(";")[0];

    if (clean.includes("/")) {
      return clean.split("/")[1].toUpperCase();
    }

    return clean.toUpperCase();
  }

  return "VIDEO";
}

/* =========================================================
   COMPONENT
========================================================= */

export default function UniversalDownloader({
  platform,
  title,
  placeholder,
}: Props) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<DownloadData | null>(null);

  const [error, setError] = useState("");

  const platformName =
    platformRules[platform].name;

  /* =======================================================
     DOWNLOAD / PROCESS URL
  ======================================================== */

  async function handleDownload() {
    const cleanUrl = url.trim();

    setError("");
    setResult(null);

    if (!cleanUrl) {
      setError(
        `Please paste a ${platformName} URL first.`
      );
      return;
    }

    if (
      !isValidPlatformUrl(
        cleanUrl,
        platform
      )
    ) {
      setError(
        `Please enter a valid ${platformName} URL.`
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "/api/download",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            url: cleanUrl,
          }),
        }
      );

      const data: ApiResponse =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.error ||
            `Unable to process this ${platformName} URL.`
        );
      }

      if (!data.data) {
        throw new Error(
          "No downloadable media was found."
        );
      }

      setResult(data.data);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  /* =======================================================
     PASTE BUTTON
  ======================================================== */

  async function handlePaste() {
    try {
      const text =
        await navigator.clipboard.readText();

      if (text) {
        setUrl(text);
        setError("");
        setResult(null);
      }
    } catch {
      setError(
        "Unable to access clipboard. Please paste the URL manually."
      );
    }
  }

  /* =======================================================
     CLEAR / NEW DOWNLOAD
  ======================================================== */

  function clearAll() {
    setUrl("");
    setResult(null);
    setError("");
  }

  /* =======================================================
     AVAILABLE VIDEOS
  ======================================================== */

  const videos =
    (result?.videos?.filter(
      (video) => video?.url
    ) || [])
      .map((video) => ({
        ...video,
        qualityValue: getQualityValue(
          video.quality,
          video.height
        ),
      }))
      .sort(
        (a, b) =>
          b.qualityValue -
          a.qualityValue
      );

  /* =======================================================
     THUMBNAIL
  ======================================================== */

  const images =
    result?.images?.filter(
      (image) => image?.url
    ) || [];

  const previewImage =
    result?.thumbnail ||
    images[0]?.url ||
    "";

  const proxyImageUrl =
    previewImage
      ? `/api/image-proxy?url=${encodeURIComponent(
          previewImage
        )}`
      : "";

  /* =======================================================
     UI
  ======================================================== */

  return (
    <div className="w-full">

      {/* ===================================================
          MAIN DOWNLOADER CARD
      ==================================================== */}

      <div className="rounded-3xl border border-zinc-800 bg-[#0d1828] p-5 shadow-2xl md:p-8">

        {/* =================================================
            URL INPUT
        ================================================== */}

        <div className="relative">

          <input
            type="url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setError("");
              setResult(null);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleDownload();
              }
            }}
            placeholder={placeholder}
            aria-label={`${title} URL`}
            className="h-16 w-full rounded-2xl border border-zinc-700 bg-[#08111f] px-5 pr-28 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 md:text-base"
          />

          <button
            type="button"
            onClick={handlePaste}
            className="absolute right-2 top-2 h-12 rounded-xl border border-zinc-700 bg-zinc-900 px-4 text-sm font-semibold text-zinc-300 transition hover:border-cyan-500/50 hover:text-cyan-400"
          >
            Paste
          </button>

        </div>

        {/* =================================================
            MAIN DOWNLOAD BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={handleDownload}
          disabled={loading}
          className="mt-4 flex h-14 w-full items-center justify-center rounded-2xl bg-cyan-500 px-6 font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <span className="flex items-center gap-3">

              <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />

              Processing{" "}
              {platformName}...

            </span>
          ) : (
            "Get Download Options"
          )}
        </button>

        {/* =================================================
            ERROR
        ================================================== */}

        {error && (
          <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* =================================================
            RESULT
        ================================================== */}

        {result && (
          <div className="mt-8">

            {/* =============================================
                PLATFORM BADGE
            ============================================== */}

            <div className="mb-5">

              <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                {platformName}
              </span>

            </div>

            {/* =============================================
                THUMBNAIL
            ============================================== */}

            {previewImage && (
              <div className="mb-6 overflow-hidden rounded-2xl border border-zinc-800 bg-black">

                <img
                  src={proxyImageUrl}
                  alt={
                    result.title ||
                    `${platformName} video thumbnail`
                  }
                  className="mx-auto block max-h-[500px] w-full object-contain"
                  loading="eager"
                  onError={(event) => {
                    event.currentTarget.style.display =
                      "none";
                  }}
                />

              </div>
            )}

            {/* =============================================
                VIDEO TITLE
            ============================================== */}

            {result.title && (
              <h3 className="mb-8 text-xl font-bold leading-8 text-white">
                {result.title}
              </h3>
            )}

            {/* =============================================
                VIDEO DOWNLOAD
            ============================================== */}

            {videos.length > 0 && (
              <div className="rounded-2xl border border-zinc-800 bg-[#08111f] p-5">

                {/* HEADER */}

                <div className="mb-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-xl">
                      🎬
                    </div>

                    <div>
                      <h4 className="font-bold text-white">
                        Video Downloads
                      </h4>

                      <p className="text-xs text-zinc-500">
                        Choose your preferred video quality
                      </p>
                    </div>

                  </div>

                  {/* YOUTUBE QUALITY INFO */}

                  {platform === "youtube" && (
                    <div className="mt-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3">

                      <p className="text-sm font-semibold text-cyan-400">
                        Available YouTube Qualities
                      </p>

                      <p className="mt-1 text-xs leading-5 text-zinc-500">
                        Available resolutions depend on
                        the original YouTube video.
                        4K may not be available for every video.
                      </p>

                    </div>
                  )}

                </div>

                {/* VIDEO OPTIONS */}

                <div className="space-y-3">

                  {videos.map(
                    (video, index) => {

                      const qualityLabel =
                        getQualityLabel(
                          video.quality,
                          video.height
                        );

                      const mimeLabel =
                        getMimeLabel(
                          video.format,
                          video.mimeType
                        );

                      const hasAudio =
                        video.hasAudio === true;

                      return (
                        <div
                          key={`${video.url}-${index}`}
                          className="flex flex-col gap-4 rounded-xl border border-zinc-700 bg-[#0d1828] px-4 py-4 transition hover:border-cyan-500/50 hover:bg-[#111f32] sm:flex-row sm:items-center sm:justify-between"
                        >

                          {/* =================================
                              VIDEO INFO
                          ================================== */}

                          <div className="min-w-0">

                            <div className="flex flex-wrap items-center gap-3">

                              <p className="text-lg font-bold text-white">
                                {qualityLabel}
                              </p>

                              {qualityLabel === "4K" && (
                                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-[11px] font-bold text-purple-400">
                                  ULTRA HD
                                </span>
                              )}

                            </div>

                            <div className="mt-2 flex flex-wrap gap-2 text-xs">

                              {/* FORMAT */}

                              <span className="rounded-md bg-zinc-800 px-2 py-1 text-zinc-400">
                                {mimeLabel}
                              </span>

                              {/* RESOLUTION */}

                              {video.width &&
                                video.height && (
                                  <span className="rounded-md bg-zinc-800 px-2 py-1 text-zinc-400">
                                    {video.width} ×{" "}
                                    {video.height}
                                  </span>
                                )}

                              {/* AUDIO */}

                              {hasAudio ? (
                                <span className="rounded-md bg-cyan-500/10 px-2 py-1 font-semibold text-cyan-400">
                                  🔊 Audio Included
                                </span>
                              ) : (
                                <span className="rounded-md bg-yellow-500/10 px-2 py-1 font-semibold text-yellow-400">
                                  🔇 Video Only
                                </span>
                              )}

                            </div>

                          </div>

                          {/* =================================
                              DOWNLOAD BUTTON
                          ================================== */}

                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="flex shrink-0 items-center justify-center rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                          >
                            Download{" "}
                            {qualityLabel}
                          </a>

                        </div>
                      );
                    }
                  )}

                </div>

              </div>
            )}

            {/* =============================================
                NO VIDEO FOUND
            ============================================== */}

            {videos.length === 0 && (
              <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-5 py-4 text-sm text-yellow-400">
                No downloadable video was returned
                for this URL.
              </div>
            )}

            {/* =============================================
                NEW DOWNLOAD
            ============================================== */}

            <button
              type="button"
              onClick={clearAll}
              className="mt-6 text-sm font-semibold text-zinc-500 transition hover:text-white"
            >
              ← Download another{" "}
              {platformName} URL
            </button>

          </div>
        )}

      </div>

      {/* ===================================================
          FOOTER TEXT
      ==================================================== */}

      <p className="mt-5 text-center text-sm text-zinc-500">
        Free {platformName} downloader • No
        software installation required
      </p>

    </div>
  );
}
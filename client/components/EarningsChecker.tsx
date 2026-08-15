"use client";

import { useCallback, useState } from "react";

type ChannelData = {
  id: string;
  title: string;
  description: string;
  customUrl: string;
  thumbnail: string;
  subscribers: number;
  totalViews: number;
  videoCount: number;
  recent30DayViews: number;

  recentVideos: Array<{
    id: string;
    title: string;
    publishedAt: string;
    views: number;
  }>;
};

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(dateString: string) {
  if (!dateString) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function EarningsChecker() {
  const [channel, setChannel] = useState(
    "https://www.youtube.com/@ShanPrasher"
  );

  const [rpm, setRpm] = useState("3");

  const [data, setData] =
    useState<ChannelData | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [lastUpdated, setLastUpdated] =
    useState("");

  /* =========================
     CHECK EARNINGS
  ========================= */

  const checkEarnings = useCallback(
    async (showLoading = true) => {
      if (!channel.trim()) {
        setError(
          "Please enter a YouTube channel URL or handle."
        );
        return;
      }

      if (showLoading) {
        setLoading(true);
      }

      setError("");

      try {
        const response = await fetch(
          `/api/youtube/channel?channel=${encodeURIComponent(
            channel.trim()
          )}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const contentType =
          response.headers.get("content-type") || "";

        const responseText =
          await response.text();

        if (
          !contentType.includes(
            "application/json"
          )
        ) {
          throw new Error(
            "YouTube API route returned an invalid response."
          );
        }

        let result;

        try {
          result = JSON.parse(responseText);
        } catch {
          throw new Error(
            "Invalid response received from YouTube API."
          );
        }

        if (!response.ok) {
          throw new Error(
            result?.error ||
              "Unable to fetch YouTube channel data."
          );
        }

        if (!result?.channel) {
          throw new Error(
            "Channel data was not returned."
          );
        }

        setData(result.channel);

        setLastUpdated(
          new Date().toLocaleTimeString()
        );
      } catch (err) {
        console.error(
          "Earnings Checker Error:",
          err
        );

        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong."
        );
      } finally {
        if (showLoading) {
          setLoading(false);
        }
      }
    },
    [channel]
  );

  /* =========================
     CALCULATIONS
  ========================= */

  const selectedRPM = Number(rpm);

  const monthlyViews =
    data?.recent30DayViews || 0;

  const dailyViews =
    monthlyViews / 30;

  const weeklyViews =
    dailyViews * 7;

  const yearlyViews =
    dailyViews * 365;

  const dailyEarnings =
    (dailyViews / 1000) * selectedRPM;

  const weeklyEarnings =
    (weeklyViews / 1000) * selectedRPM;

  const monthlyEarnings =
    (monthlyViews / 1000) * selectedRPM;

  const yearlyEarnings =
    (yearlyViews / 1000) * selectedRPM;

  return (
    <div className="mx-auto max-w-5xl">

      {/* =========================
          HERO
      ========================= */}

      <div className="text-center">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-4xl">
          💰
        </div>

        <h1 className="text-4xl font-extrabold text-white md:text-5xl">
          YouTube Channel Earnings Checker
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
          Estimate a YouTube channel&apos;s views,
          earnings and growth using public YouTube
          statistics.
        </p>

      </div>

      {/* =========================
          SEARCH FORM
      ========================= */}

      <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">

        <label className="mb-3 block text-sm font-semibold text-white">
          YouTube Channel URL or Handle
        </label>

        <input
          value={channel}
          onChange={(e) =>
            setChannel(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkEarnings();
            }
          }}
          placeholder="https://youtube.com/@channelname"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
        />

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          {/* RPM */}

          <div>

            <label className="mb-3 block text-sm font-semibold text-white">
              Estimated RPM
            </label>

            <select
              value={rpm}
              onChange={(e) =>
                setRpm(e.target.value)
              }
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-4 text-white outline-none focus:border-cyan-500"
            >
              <option value="1">
                $1 RPM — Low
              </option>

              <option value="2">
                $2 RPM — Low Average
              </option>

              <option value="3">
                $3 RPM — Average
              </option>

              <option value="5">
                $5 RPM — Good
              </option>

              <option value="8">
                $8 RPM — High
              </option>

              <option value="12">
                $12 RPM — Premium
              </option>

              <option value="20">
                $20 RPM — Very High
              </option>
            </select>

          </div>

          {/* BUTTON */}

          <div className="flex items-end">

            <button
              onClick={() =>
                checkEarnings(true)
              }
              disabled={loading}
              className="w-full rounded-xl bg-cyan-500 px-6 py-4 font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Checking Channel..."
                : "Check Earnings"}
            </button>

          </div>

        </div>

        <p className="mt-4 text-xs leading-6 text-zinc-500">
          Earnings are estimates based on the selected
          RPM. Actual YouTube revenue can vary.
        </p>

      </div>

      {/* =========================
          ERROR
      ========================= */}

      {error && (
        <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-5 text-sm leading-6 text-red-300">
          {error}
        </div>
      )}

      {/* =========================
          RESULTS
      ========================= */}

      {data && (
        <div className="mt-10 space-y-6">

          {/* =========================
              CHANNEL HEADER
          ========================= */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

              {data.thumbnail ? (
                <img
                  src={data.thumbnail}
                  alt={data.title}
                  className="h-24 w-24 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10 text-4xl">
                  ▶️
                </div>
              )}

              <div className="flex-1">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <h2 className="text-2xl font-bold text-white">
                      {data.title}
                    </h2>

                    {data.customUrl && (
                      <p className="mt-1 text-cyan-400">
                        {data.customUrl}
                      </p>
                    )}

                  </div>

                  {/* REFRESH */}

                  <button
                    onClick={() =>
                      checkEarnings(true)
                    }
                    disabled={loading}
                    className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/20 disabled:opacity-50"
                  >
                    🔄 Refresh Stats
                  </button>

                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                    ● Latest Public Data
                  </span>

                  {lastUpdated && (
                    <span className="text-xs text-zinc-500">
                      Updated {lastUpdated}
                    </span>
                  )}

                </div>

              </div>

            </div>

          </div>

          {/* =========================
              LIVE SUBSCRIBERS
          ========================= */}

          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6 md:p-8">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

                  <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                    Live Subscriber Count
                  </p>

                </div>

                <p className="mt-2 text-xs text-zinc-500">
                  Latest publicly available subscriber
                  count from YouTube.
                </p>

              </div>

              <div className="text-left sm:text-right">

                <p className="text-4xl font-extrabold text-white md:text-5xl">
                  {formatNumber(
                    data.subscribers
                  )}
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  subscribers
                </p>

              </div>

            </div>

          </div>

          {/* =========================
              CHANNEL STATS
          ========================= */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">

              <p className="text-sm text-zinc-500">
                Subscribers
              </p>

              <p className="mt-2 text-3xl font-bold text-white">
                {formatNumber(
                  data.subscribers
                )}
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">

              <p className="text-sm text-zinc-500">
                Total Views
              </p>

              <p className="mt-2 text-3xl font-bold text-white">
                {formatNumber(
                  data.totalViews
                )}
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">

              <p className="text-sm text-zinc-500">
                Total Videos
              </p>

              <p className="mt-2 text-3xl font-bold text-white">
                {formatNumber(
                  data.videoCount
                )}
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">

              <p className="text-sm text-zinc-500">
                Last 30-Day Views
              </p>

              <p className="mt-2 text-3xl font-bold text-cyan-400">
                {formatNumber(
                  data.recent30DayViews
                )}
              </p>

            </div>

          </div>

          {/* =========================
              VIEWS ANALYTICS
          ========================= */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">

            <div className="mb-6">

              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Estimated View Performance
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">
                Daily, Weekly, Monthly & Yearly Views
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Estimates are calculated from the
                channel&apos;s latest 30-day public video views.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* DAILY */}

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">

                <p className="text-sm text-zinc-500">
                  Per Day
                </p>

                <p className="mt-3 text-3xl font-bold text-white">
                  {formatNumber(dailyViews)}
                </p>

                <p className="mt-2 text-xs text-zinc-600">
                  Avg. daily views
                </p>

              </div>

              {/* WEEKLY */}

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">

                <p className="text-sm text-zinc-500">
                  Per Week
                </p>

                <p className="mt-3 text-3xl font-bold text-white">
                  {formatNumber(weeklyViews)}
                </p>

                <p className="mt-2 text-xs text-zinc-600">
                  Estimated 7-day views
                </p>

              </div>

              {/* MONTHLY */}

              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">

                <p className="text-sm text-cyan-400">
                  Per Month
                </p>

                <p className="mt-3 text-3xl font-bold text-white">
                  {formatNumber(monthlyViews)}
                </p>

                <p className="mt-2 text-xs text-zinc-500">
                  Latest 30-day views
                </p>

              </div>

              {/* YEARLY */}

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">

                <p className="text-sm text-zinc-500">
                  Per Year
                </p>

                <p className="mt-3 text-3xl font-bold text-white">
                  {formatNumber(yearlyViews)}
                </p>

                <p className="mt-2 text-xs text-zinc-600">
                  Annualized estimate
                </p>

              </div>

            </div>

          </div>

          {/* =========================
              EARNINGS
          ========================= */}

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 md:p-8">

            <div className="text-center">

              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Estimated YouTube Earnings
              </p>

              <h2 className="mt-3 text-4xl font-extrabold text-white">
                {formatCurrency(
                  monthlyEarnings
                )}

                <span className="text-lg font-normal text-zinc-500">
                  {" "}
                  / month
                </span>
              </h2>

              <p className="mt-3 text-sm text-zinc-400">
                Based on{" "}
                <strong className="text-white">
                  ${selectedRPM} RPM
                </strong>
              </p>

            </div>

            {/* EARNINGS GRID */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* DAILY */}

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 text-center">

                <p className="text-sm text-zinc-500">
                  Per Day
                </p>

                <p className="mt-3 text-2xl font-bold text-white">
                  {formatCurrency(
                    dailyEarnings
                  )}
                </p>

              </div>

              {/* WEEKLY */}

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 text-center">

                <p className="text-sm text-zinc-500">
                  Per Week
                </p>

                <p className="mt-3 text-2xl font-bold text-white">
                  {formatCurrency(
                    weeklyEarnings
                  )}
                </p>

              </div>

              {/* MONTHLY */}

              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-center">

                <p className="text-sm text-cyan-400">
                  Per Month
                </p>

                <p className="mt-3 text-2xl font-bold text-white">
                  {formatCurrency(
                    monthlyEarnings
                  )}
                </p>

              </div>

              {/* YEARLY */}

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 text-center">

                <p className="text-sm text-zinc-500">
                  Per Year
                </p>

                <p className="mt-3 text-2xl font-bold text-white">
                  {formatCurrency(
                    yearlyEarnings
                  )}
                </p>

              </div>

            </div>

            {/* CALCULATION */}

            <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950/40 p-5 text-center">

              <p className="text-sm text-zinc-500">
                Earnings Formula
              </p>

              <p className="mt-2 font-semibold text-white">
                Views ÷ 1,000 × RPM
              </p>

            </div>

          </div>

          {/* =========================
              RECENT VIDEOS
          ========================= */}

          {data.recentVideos.length > 0 && (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">

              <div className="mb-6">

                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  Recent Videos
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  Latest YouTube Video Performance
                </h2>

              </div>

              <div className="space-y-3">

                {data.recentVideos.map(
                  (video) => (
                    <div
                      key={video.id}
                      className="flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-950/50 p-4 md:flex-row md:items-center md:justify-between"
                    >

                      <div className="min-w-0">

                        <p className="font-semibold text-white">
                          {video.title}
                        </p>

                        <p className="mt-1 text-xs text-zinc-500">
                          {formatDate(
                            video.publishedAt
                          )}
                        </p>

                      </div>

                      <div className="shrink-0">

                        <p className="font-bold text-cyan-400">
                          {formatNumber(
                            video.views
                          )}{" "}
                          views
                        </p>

                      </div>

                    </div>
                  )
                )}

              </div>

            </div>
          )}

          {/* =========================
              DISCLAIMER
          ========================= */}

          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-sm leading-7 text-zinc-400">

            <strong className="text-yellow-400">
              ⚠️ Important:
            </strong>{" "}

            View and earnings figures are estimates based
            on publicly available YouTube data and the
            selected RPM. Actual views, monetized views,
            RPM and AdSense earnings can be different.

            <br />

            <span className="text-zinc-500">
              Subscriber counts shown through the public
              YouTube Data API may be rounded by YouTube.
            </span>

          </div>

        </div>
      )}

    </div>
  );
}
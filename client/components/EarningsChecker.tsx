"use client";

import { useEffect, useState } from "react";

type Video = {
  id: string;
  title: string;
  publishedAt: string;
  views: number;
};

type Channel = {
  id: string;
  title: string;
  description: string;
  customUrl: string;
  thumbnail: string;
  subscribers: number;
  totalViews: number;
  videoCount: number;
  recent30DayViews: number;
  recentVideos: Video[];
};

type ApiResponse = {
  channel?: Channel;
  error?: string;
};

function formatCompact(value: number) {
  if (!Number.isFinite(value)) return "0";

  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)}B`;
  }

  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  }

  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K`;
  }

  return Math.round(value).toLocaleString("en-US");
}

function formatNumber(value: number) {
  if (!Number.isFinite(value)) return "0";

  return Math.round(value).toLocaleString("en-US");
}

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(date: string) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getPerformanceScore(channel: Channel) {
  const subscribers = channel.subscribers;
  const monthlyViews = channel.recent30DayViews;

  if (!subscribers || !monthlyViews) return 0;

  const ratio = monthlyViews / subscribers;

  let score = 50;

  if (ratio >= 0.5) score += 10;
  if (ratio >= 1) score += 10;
  if (ratio >= 2) score += 10;
  if (ratio >= 5) score += 10;

  if (channel.videoCount >= 100) score += 5;
  if (channel.recentVideos.length >= 5) score += 5;

  return Math.min(score, 100);
}

function getScoreLabel(score: number) {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Very Good";
  if (score >= 60) return "Good";
  if (score >= 40) return "Average";

  return "Needs Improvement";
}

function getChannelReview(channel: Channel) {
  const monthlyViews = channel.recent30DayViews;
  const subscribers = channel.subscribers;

  const ratio =
    subscribers > 0 ? monthlyViews / subscribers : 0;

  const recentUploads = channel.recentVideos.length;

  if (ratio >= 3) {
    return {
      icon: "🔥",
      title: "Strong Channel Momentum",
      text: `${channel.title} is generating strong recent view activity compared with its subscriber base. The channel appears to have good audience reach and strong content momentum.`,
    };
  }

  if (ratio >= 1) {
    return {
      icon: "🚀",
      title: "Healthy Channel Performance",
      text: `${channel.title} is getting healthy recent traffic relative to its subscriber base. Consistent uploads and strong-performing videos could help increase overall reach.`,
    };
  }

  if (recentUploads >= 5) {
    return {
      icon: "📈",
      title: "Active Content Strategy",
      text: `${channel.title} has been actively publishing content recently. Maintaining consistency while improving high-performing topics could help increase monthly views.`,
    };
  }

  return {
    icon: "💡",
    title: "Growth Opportunity",
    text: `${channel.title} has an opportunity to increase recent reach by improving upload consistency, audience retention and content topics that generate higher view velocity.`,
  };
}

export default function EarningsChecker() {
  const [channelInput, setChannelInput] = useState("");

  const [rpm, setRpm] = useState("3");

  const [channel, setChannel] =
    useState<Channel | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function checkEarnings() {
    const input = channelInput.trim();

    if (!input) {
      setError(
        "Please enter a YouTube channel URL, channel handle or channel ID."
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const apiUrl =
        `/api/generate/youtube/channel?channel=${encodeURIComponent(
          input
        )}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      });

      /*
       * IMPORTANT:
       * Read text first.
       *
       * If Next.js returns a 404 HTML page,
       * response.json() would throw:
       *
       * Unexpected token '<'
       *
       * This handles that situation properly.
       */

      const responseText = await response.text();

      const contentType =
        response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        console.error(
          "YouTube API returned non-JSON:",
          responseText.slice(0, 500)
        );

        throw new Error(
          "YouTube API route was not found. Please make sure the file exists at app/api/generate/youtube/channel/route.ts and restart the Next.js server."
        );
      }

      let data: ApiResponse;

      try {
        data = JSON.parse(responseText) as ApiResponse;
      } catch {
        throw new Error(
          "Invalid response received from the YouTube API."
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to fetch YouTube channel."
        );
      }

      if (!data.channel) {
        throw new Error(
          "Channel information was not returned."
        );
      }

      setChannel(data.channel);
    } catch (err) {
      console.error(
        "YouTube Earnings Checker Error:",
        err
      );

      setChannel(null);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to fetch YouTube channel."
      );
    } finally {
      setLoading(false);
    }
  }

  /*
   * Refresh public subscriber/view data every 60 seconds
   * after a channel has been loaded.
   */
  useEffect(() => {
    if (!channel) return;

    const interval = setInterval(() => {
      checkEarnings();
    }, 60_000);

    return () => clearInterval(interval);
  }, [channel, channelInput]);

  const recent30DayViews =
    channel?.recent30DayViews || 0;

  const dailyViews =
    recent30DayViews / 30;

  const weeklyViews =
    dailyViews * 7;

  const monthlyViews =
    recent30DayViews;

  const yearlyViews =
    dailyViews * 365;

  const rpmValue = Number(rpm);

  const dailyEarnings =
    (dailyViews / 1000) * rpmValue;

  const weeklyEarnings =
    (weeklyViews / 1000) * rpmValue;

  const monthlyEarnings =
    (monthlyViews / 1000) * rpmValue;

  const yearlyEarnings =
    (yearlyViews / 1000) * rpmValue;

  const score = channel
    ? getPerformanceScore(channel)
    : 0;

  const review = channel
    ? getChannelReview(channel)
    : null;

  const averageViewsPerVideo =
    channel && channel.videoCount > 0
      ? channel.totalViews / channel.videoCount
      : 0;

  return (
    <div className="mx-auto max-w-6xl">

      {/* =========================
          SEARCH CARD
      ========================= */}

      <div className="relative overflow-hidden rounded-[30px] border border-zinc-800 bg-gradient-to-br from-[#111c2a] via-[#101820] to-[#07111d] p-6 shadow-2xl md:p-9">

        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">

          {/* Header */}

          <div className="mb-8">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-400">

              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              Public YouTube Analytics

            </div>

            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">

              Check YouTube Channel Earnings

            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">

              Enter any public YouTube channel to estimate
              views, potential earnings, subscriber count
              and overall channel performance.

            </p>

          </div>

          {/* Channel Input */}

          <div>

            <label className="mb-3 block text-sm font-bold text-zinc-200">

              YouTube Channel URL or Handle

            </label>

            <div className="relative">

              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl">

                ▶️

              </span>

              <input
                type="text"
                value={channelInput}
                onChange={(e) => {
                  setChannelInput(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    checkEarnings();
                  }
                }}
                placeholder="https://youtube.com/@channelname"
                autoComplete="off"
                className="w-full rounded-2xl border border-zinc-700 bg-black/50 py-4 pl-12 pr-5 text-white outline-none transition-all placeholder:text-zinc-600 focus:border-cyan-400 focus:bg-black/70 focus:ring-4 focus:ring-cyan-500/10"
              />

            </div>

          </div>

          {/* RPM */}

          <div className="mt-6 grid gap-5 md:grid-cols-[0.65fr_1.35fr]">

            <div>

              <label className="mb-3 block text-sm font-bold text-zinc-200">

                Estimated RPM

              </label>

              <select
                value={rpm}
                onChange={(e) =>
                  setRpm(e.target.value)
                }
                className="w-full rounded-2xl border border-zinc-700 bg-black/50 px-4 py-4 text-white outline-none transition focus:border-cyan-400"
              >

                <option value="1">
                  $1 RPM — Low
                </option>

                <option value="2">
                  $2 RPM — Below Average
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

                <option value="10">
                  $10 RPM — Very High
                </option>

                <option value="15">
                  $15 RPM — Premium
                </option>

              </select>

            </div>

            <div className="flex items-end">

              <button
                onClick={checkEarnings}
                disabled={loading}
                className="group w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-extrabold text-black shadow-lg shadow-cyan-500/10 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              >

                {loading ? (
                  <>
                    <span className="mr-2 inline-block animate-spin">
                      ◌
                    </span>

                    Checking Channel...
                  </>
                ) : (
                  <>
                    💰

                    <span className="ml-2">
                      Check YouTube Earnings
                    </span>

                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </>
                )}

              </button>

            </div>

          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-zinc-500">

            <span>🔒</span>

            Public channel data only • No login required

          </div>

        </div>

      </div>

      {/* =========================
          ERROR
      ========================= */}

      {error && (
        <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-sm leading-6 text-red-400">

          <div className="font-bold">
            ❌ Something went wrong
          </div>

          <div className="mt-1">
            {error}
          </div>

        </div>
      )}

      {/* =========================
          RESULTS
      ========================= */}

      {channel && (
        <div className="mt-8">

          {/* CHANNEL HEADER */}

          <div className="relative overflow-hidden rounded-[30px] border border-zinc-800 bg-gradient-to-br from-[#121d2a] to-[#0b141e] p-6 md:p-8">

            <div className="flex flex-col gap-6 md:flex-row md:items-center">

              {channel.thumbnail && (
                <div className="relative shrink-0">

                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl" />

                  <img
                    src={channel.thumbnail}
                    alt={channel.title}
                    className="relative h-24 w-24 rounded-full border-2 border-cyan-400/50 object-cover shadow-xl"
                  />

                </div>
              )}

              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-3">

                  <h2 className="text-3xl font-black text-white">
                    {channel.title}
                  </h2>

                  <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
                    ✓ PUBLIC
                  </span>

                </div>

                {channel.customUrl && (
                  <p className="mt-1 text-cyan-400">
                    {channel.customUrl}
                  </p>
                )}

                <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
                  {channel.description ||
                    "Public YouTube channel statistics and performance overview."}
                </p>

              </div>

              <button
                onClick={checkEarnings}
                disabled={loading}
                className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-500 hover:text-cyan-400 disabled:opacity-50"
              >
                🔄 Refresh
              </button>

            </div>

          </div>

          {/* QUICK STATS */}

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <StatCard
              icon="👥"
              title="Subscribers"
              value={formatCompact(
                channel.subscribers
              )}
              highlight
            />

            <StatCard
              icon="👁️"
              title="Total Views"
              value={formatCompact(
                channel.totalViews
              )}
            />

            <StatCard
              icon="🎬"
              title="Total Videos"
              value={formatNumber(
                channel.videoCount
              )}
            />

            <StatCard
              icon="🔥"
              title="30-Day Views"
              value={formatCompact(
                recent30DayViews
              )}
              highlight
            />

          </div>

          {/* LIVE PUBLIC SUBSCRIBER */}

          <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/5 p-5">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
                  👥
                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Public Subscriber Count
                  </p>

                  <p className="mt-1 text-2xl font-black text-white">
                    {formatNumber(
                      channel.subscribers
                    )}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-500">

                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                Latest public API count

              </div>

            </div>

          </div>

          {/* VIEW ANALYTICS */}

          <div className="mt-6 rounded-[30px] border border-zinc-800 bg-[#101820] p-6 md:p-8">

            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  📊 Channel Analytics
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Estimated View Activity
                </h3>

              </div>

              <p className="text-xs text-zinc-500">
                Based on latest 30-day public views
              </p>

            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <AnalyticsCard
                icon="☀️"
                title="Per Day"
                value={formatCompact(
                  dailyViews
                )}
                subtitle="estimated views"
              />

              <AnalyticsCard
                icon="📅"
                title="Per Week"
                value={formatCompact(
                  weeklyViews
                )}
                subtitle="estimated views"
              />

              <AnalyticsCard
                icon="🗓️"
                title="Per Month"
                value={formatCompact(
                  monthlyViews
                )}
                subtitle="last 30 days"
                highlight
              />

              <AnalyticsCard
                icon="🚀"
                title="Per Year"
                value={formatCompact(
                  yearlyViews
                )}
                subtitle="annualized estimate"
              />

            </div>

          </div>

          {/* EARNINGS */}

          <div className="relative mt-6 overflow-hidden rounded-[30px] border border-cyan-500/30 bg-gradient-to-br from-[#062235] via-[#071b2a] to-[#06131f] p-6 md:p-8">

            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">

              <div className="text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
                  💰
                </div>

                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Estimated YouTube Earnings
                </p>

                <h3 className="mt-3 text-5xl font-black text-white md:text-6xl">
                  {formatMoney(
                    monthlyEarnings
                  )}
                </h3>

                <p className="mt-2 text-zinc-400">
                  estimated monthly earnings
                </p>

              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <EarningCard
                  icon="☀️"
                  title="Per Day"
                  value={formatMoney(
                    dailyEarnings
                  )}
                />

                <EarningCard
                  icon="📅"
                  title="Per Week"
                  value={formatMoney(
                    weeklyEarnings
                  )}
                />

                <EarningCard
                  icon="🗓️"
                  title="Per Month"
                  value={formatMoney(
                    monthlyEarnings
                  )}
                  highlight
                />

                <EarningCard
                  icon="🚀"
                  title="Per Year"
                  value={formatMoney(
                    yearlyEarnings
                  )}
                />

              </div>

              <div className="mt-6 rounded-2xl border border-zinc-800 bg-black/20 p-5 text-center">

                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Estimated RPM
                </p>

                <p className="mt-1 text-2xl font-black text-white">
                  ${rpmValue.toFixed(2)}
                </p>

                <p className="mt-2 text-xs text-zinc-600">
                  Views ÷ 1,000 × RPM
                </p>

              </div>

            </div>

          </div>

          {/* CHANNEL REVIEW */}

          {review && (
            <div className="mt-6 rounded-[30px] border border-zinc-800 bg-[#101820] p-6 md:p-8">

              <div className="flex flex-col gap-7 lg:flex-row">

                {/* SCORE */}

                <div className="flex shrink-0 flex-col items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-950 p-7 lg:w-64">

                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Channel Score
                  </p>

                  <div className="mt-4 flex h-32 w-32 items-center justify-center rounded-full border-8 border-cyan-500/20">

                    <div className="text-center">

                      <p className="text-4xl font-black text-white">
                        {score}
                      </p>

                      <p className="text-xs text-zinc-500">
                        / 100
                      </p>

                    </div>

                  </div>

                  <p className="mt-4 font-bold text-cyan-400">
                    {getScoreLabel(score)}
                  </p>

                </div>

                {/* REVIEW */}

                <div className="flex-1">

                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                    Channel Review
                  </p>

                  <h3 className="mt-2 flex items-center gap-2 text-2xl font-extrabold text-white">
                    <span>{review.icon}</span>
                    {review.title}
                  </h3>

                  <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
                    {review.text}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">

                    <MiniMetric
                      title="Avg Views / Video"
                      value={formatCompact(
                        averageViewsPerVideo
                      )}
                    />

                    <MiniMetric
                      title="Recent Videos"
                      value={channel.recentVideos.length.toString()}
                    />

                    <MiniMetric
                      title="Views / Subscriber"
                      value={`${(
                        channel.subscribers > 0
                          ? (monthlyViews /
                              channel.subscribers) *
                            100
                          : 0
                      ).toFixed(1)}%`}
                    />

                  </div>

                </div>

              </div>

            </div>
          )}

          {/* RECENT VIDEOS */}

          {channel.recentVideos?.length > 0 && (
            <div className="mt-6 rounded-[30px] border border-zinc-800 bg-[#101820] p-6 md:p-8">

              <div>

                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Latest Content
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-white">
                  Recent Videos
                </h3>

              </div>

              <div className="mt-6 space-y-3">

                {channel.recentVideos.map(
                  (video, index) => (
                    <a
                      key={video.id}
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 transition-all hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-zinc-900"
                    >

                      <div className="flex gap-4">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-sm font-black text-cyan-400">
                          {index + 1}
                        </div>

                        <div className="min-w-0 flex-1">

                          <h4 className="line-clamp-2 font-bold text-white transition group-hover:text-cyan-400">
                            {video.title}
                          </h4>

                          <p className="mt-1 text-xs text-zinc-600">
                            Published{" "}
                            {formatDate(
                              video.publishedAt
                            )}
                          </p>

                        </div>

                        <div className="hidden shrink-0 text-right sm:block">

                          <p className="font-black text-cyan-400">
                            {formatCompact(
                              video.views
                            )}
                          </p>

                          <p className="text-xs text-zinc-600">
                            views
                          </p>

                        </div>

                      </div>

                    </a>
                  )
                )}

              </div>

            </div>
          )}

          {/* DISCLAIMER */}

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">

            <p className="text-xs leading-6 text-zinc-500">

              <strong className="text-zinc-400">
                Important:
              </strong>{" "}

              YouTube does not provide another channel's
              private Analytics revenue through the public API.
              Earnings shown here are estimates based on public
              views and the selected RPM.

              Subscriber count is the latest publicly available
              count and may not represent a second-by-second
              live number.

            </p>

          </div>

        </div>
      )}

    </div>
  );
}


/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  title,
  value,
  highlight = false,
}: {
  icon: string;
  title: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-[#101820] p-5 transition-all hover:-translate-y-1 hover:border-cyan-500/30">

      <div className="flex items-center justify-between">

        <span className="text-xl">
          {icon}
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 opacity-50" />

      </div>

      <p className="mt-5 text-sm text-zinc-500">
        {title}
      </p>

      <p
        className={`mt-1 text-3xl font-black ${
          highlight
            ? "text-cyan-400"
            : "text-white"
        }`}
      >
        {value}
      </p>

    </div>
  );
}


/* =========================================================
   ANALYTICS CARD
========================================================= */

function AnalyticsCard({
  icon,
  title,
  value,
  subtitle,
  highlight = false,
}: {
  icon: string;
  title: string;
  value: string;
  subtitle: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 transition hover:border-cyan-500/30">

      <div className="flex items-center gap-2">

        <span>
          {icon}
        </span>

        <p className="text-sm text-zinc-500">
          {title}
        </p>

      </div>

      <p
        className={`mt-3 text-2xl font-black ${
          highlight
            ? "text-cyan-400"
            : "text-white"
        }`}
      >
        {value}
      </p>

      <p className="mt-1 text-xs text-zinc-600">
        {subtitle}
      </p>

    </div>
  );
}


/* =========================================================
   EARNING CARD
========================================================= */

function EarningCard({
  icon,
  title,
  value,
  highlight = false,
}: {
  icon: string;
  title: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black/20 p-5 text-center">

      <div className="text-lg">
        {icon}
      </div>

      <p className="mt-2 text-xs uppercase tracking-wider text-zinc-500">
        {title}
      </p>

      <p
        className={`mt-2 text-2xl font-black ${
          highlight
            ? "text-cyan-400"
            : "text-white"
        }`}
      >
        {value}
      </p>

    </div>
  );
}


/* =========================================================
   MINI METRIC
========================================================= */

function MiniMetric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">

      <p className="text-xs text-zinc-600">
        {title}
      </p>

      <p className="mt-1 text-lg font-black text-white">
        {value}
      </p>

    </div>
  );
}
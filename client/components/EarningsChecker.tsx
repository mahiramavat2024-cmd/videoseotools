"use client";

import Link from "next/link";
import { useState } from "react";

type RecentVideo = {
  id: string;
  title: string;
  publishedAt: string;
  views: number;
};

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
  recentVideos: RecentVideo[];
};

type ApiResponse = {
  channel?: ChannelData;
  error?: string;
};

const youtubeTools = [
  {
    title: "YouTube Title Generator",
    description:
      "Generate catchy and SEO-friendly titles for your YouTube videos.",
    icon: "🎬",
    href: "/youtube/title-generator",
  },
  {
    title: "YouTube Description Generator",
    description:
      "Create structured and SEO-friendly YouTube descriptions.",
    icon: "📝",
    href: "/youtube/description-generator",
  },
  {
    title: "YouTube Tags Generator",
    description:
      "Generate relevant YouTube tags based on your video topic.",
    icon: "🏷️",
    href: "/youtube/tags-generator",
  },
  {
    title: "YouTube Hashtag Generator",
    description:
      "Find relevant hashtags to help your videos reach more viewers.",
    icon: "#️⃣",
    href: "/youtube/hashtag-generator",
  },
  {
    title: "YouTube Keyword Generator",
    description:
      "Discover powerful keywords and search terms for your videos.",
    icon: "🔑",
    href: "/youtube/keyword-generator",
  },
  {
    title: "YouTube Script Generator",
    description:
      "Create engaging scripts with hooks, storytelling and visual ideas.",
    icon: "🎥",
    href: "/youtube/script-generator",
  },
];

function formatNumber(value: number) {
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

  return value.toLocaleString();
}

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function formatDate(value: string) {
  if (!value) return "";

  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function EarningsChecker() {
  const [channelInput, setChannelInput] = useState("");
  const [rpm, setRpm] = useState("3");
  const [channel, setChannel] = useState<ChannelData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const checkEarnings = async () => {
    const input = channelInput.trim();

    if (!input) {
      setError("Please enter a YouTube channel URL or handle.");
      return;
    }

    setLoading(true);
    setError("");
    setChannel(null);

    try {
      const response = await fetch(
        `/api/generate/youtube/channel?channel=${encodeURIComponent(input)}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        throw new Error(
          "YouTube API returned an invalid response. Please try again."
        );
      }

      const data = (await response.json()) as ApiResponse;

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to fetch YouTube channel information."
        );
      }

      if (!data.channel) {
        throw new Error("Channel information was not returned.");
      }

      setChannel(data.channel);
    } catch (err) {
      console.error("Earnings Checker Error:", err);

      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  const recentViews = channel?.recent30DayViews || 0;

  const dailyViews = recentViews / 30;
  const weeklyViews = dailyViews * 7;
  const monthlyViews = recentViews;
  const yearlyViews = dailyViews * 365;

  const rpmValue = Number(rpm);

  const dailyEarnings = (dailyViews / 1000) * rpmValue;
  const weeklyEarnings = (weeklyViews / 1000) * rpmValue;
  const monthlyEarnings = (monthlyViews / 1000) * rpmValue;
  const yearlyEarnings = (yearlyViews / 1000) * rpmValue;

  return (
    <div className="min-h-screen bg-[#06101f] px-4 py-8 text-white md:px-6 md:py-12">

      <div className="mx-auto max-w-6xl">

        {/* =========================
            TOP HOME BUTTON
        ========================== */}

        <div className="mb-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/80 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-x-1 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to Home
          </Link>
        </div>

        {/* =========================
            SEARCH HEADER
        ========================== */}

        <section className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-[#111d2a] via-[#0c1723] to-[#071b25] p-6 shadow-2xl md:p-10">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Public YouTube Analytics
          </div>

          <h1 className="mt-6 text-4xl font-black md:text-5xl">
            Check YouTube Channel Earnings
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
            Enter any public YouTube channel to estimate views, potential
            earnings, subscriber count and overall channel performance.
          </p>

          {/* CHANNEL INPUT */}

          <div className="mt-9">

            <label className="mb-3 block text-sm font-bold">
              YouTube Channel URL or Handle
            </label>

            <div className="relative">

              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                ▶️
              </span>

              <input
                type="text"
                value={channelInput}
                onChange={(e) => setChannelInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    checkEarnings();
                  }
                }}
                placeholder="https://www.youtube.com/@channelname"
                className="w-full rounded-2xl border border-zinc-700 bg-black/50 px-12 py-5 text-white outline-none placeholder:text-zinc-600 transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />

            </div>

          </div>

          {/* RPM + BUTTON */}

          <div className="mt-6 grid gap-5 md:grid-cols-[340px_1fr]">

            <div>

              <label className="mb-3 block text-sm font-bold">
                Estimated RPM
              </label>

              <select
                value={rpm}
                onChange={(e) => setRpm(e.target.value)}
                className="w-full rounded-2xl border border-zinc-700 bg-black/50 px-5 py-4 text-white outline-none focus:border-cyan-500"
              >
                <option value="1">$1 RPM — Low</option>
                <option value="3">$3 RPM — Average</option>
                <option value="5">$5 RPM — Good</option>
                <option value="8">$8 RPM — High</option>
                <option value="10">$10 RPM — Very High</option>
              </select>

            </div>

            <div className="flex items-end">

              <button
                onClick={checkEarnings}
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 text-lg font-bold text-black shadow-lg shadow-cyan-500/10 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Checking Channel..."
                  : "💰 Check YouTube Earnings →"}
              </button>

            </div>

          </div>

          <p className="mt-4 text-center text-xs text-zinc-500">
            🔒 Public channel data only • No login required
          </p>

        </section>

        {/* =========================
            ERROR
        ========================== */}

        {error && (
          <div className="mt-6 rounded-2xl border border-red-500/40 bg-red-950/30 p-5 text-red-300">

            <div className="font-bold text-red-400">
              ❌ Something went wrong
            </div>

            <p className="mt-1 text-sm">
              {error}
            </p>

          </div>
        )}

        {/* =========================
            CHANNEL RESULT
        ========================== */}

        {channel && (
          <section className="mt-8">

            {/* CHANNEL PROFILE */}

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">

              <div className="flex flex-col gap-6 md:flex-row md:items-center">

                <img
                  src={channel.thumbnail}
                  alt={channel.title}
                  className="h-24 w-24 rounded-full border-2 border-cyan-500 object-cover"
                />

                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3">

                    <h2 className="text-3xl font-black">
                      {channel.title}
                    </h2>

                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400">
                      ✓ PUBLIC
                    </span>

                  </div>

                  {channel.customUrl && (
                    <p className="mt-2 text-cyan-400">
                      {channel.customUrl}
                    </p>
                  )}

                  <p className="mt-3 line-clamp-3 max-w-4xl text-sm leading-6 text-zinc-400">
                    {channel.description}
                  </p>

                </div>

                <button
                  onClick={checkEarnings}
                  disabled={loading}
                  className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold transition hover:border-cyan-500 hover:text-cyan-400 disabled:opacity-50"
                >
                  🔄 Refresh
                </button>

              </div>

            </div>

            {/* =========================
                BASIC STATS
            ========================== */}

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-cyan-500/30">

                <p className="text-sm text-zinc-500">
                  Subscribers
                </p>

                <p className="mt-2 text-3xl font-black">
                  {formatNumber(channel.subscribers)}
                </p>

                <p className="mt-2 text-xs text-emerald-400">
                  Public subscriber count
                </p>

              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-cyan-500/30">

                <p className="text-sm text-zinc-500">
                  Total Views
                </p>

                <p className="mt-2 text-3xl font-black">
                  {formatNumber(channel.totalViews)}
                </p>

              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-cyan-500/30">

                <p className="text-sm text-zinc-500">
                  Videos
                </p>

                <p className="mt-2 text-3xl font-black">
                  {formatNumber(channel.videoCount)}
                </p>

              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 transition hover:border-cyan-400">

                <p className="text-sm text-zinc-500">
                  30-Day Views
                </p>

                <p className="mt-2 text-3xl font-black text-cyan-400">
                  {formatNumber(recentViews)}
                </p>

              </div>

            </div>

            {/* =========================
                VIEW ESTIMATES
            ========================== */}

            <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">

              <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                Channel Performance
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Estimated Views
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Based on the latest 30 days of public channel views.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl border border-zinc-800 bg-black/20 p-5">

                  <p className="text-sm text-zinc-500">
                    Per Day
                  </p>

                  <p className="mt-2 text-2xl font-black">
                    {formatNumber(dailyViews)}
                  </p>

                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/20 p-5">

                  <p className="text-sm text-zinc-500">
                    Per Week
                  </p>

                  <p className="mt-2 text-2xl font-black">
                    {formatNumber(weeklyViews)}
                  </p>

                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

                  <p className="text-sm text-zinc-500">
                    Per Month
                  </p>

                  <p className="mt-2 text-2xl font-black text-cyan-400">
                    {formatNumber(monthlyViews)}
                  </p>

                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/20 p-5">

                  <p className="text-sm text-zinc-500">
                    Per Year
                  </p>

                  <p className="mt-2 text-2xl font-black">
                    {formatNumber(yearlyViews)}
                  </p>

                </div>

              </div>

            </div>

            {/* =========================
                EARNINGS
            ========================== */}

            <div className="mt-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#061b29] to-[#06101b] p-6 shadow-2xl shadow-cyan-950/20 md:p-10">

              <div className="text-center">

                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                  Estimated YouTube Earnings
                </p>

                <div className="mt-4">

                  <span className="text-5xl font-black md:text-6xl">
                    {formatCurrency(monthlyEarnings)}
                  </span>

                  <span className="ml-2 text-zinc-500">
                    / month
                  </span>

                </div>

                <p className="mt-3 text-zinc-400">
                  Estimated yearly earnings:{" "}
                  <span className="font-bold text-white">
                    {formatCurrency(yearlyEarnings)}
                  </span>
                </p>

              </div>

              {/* EARNINGS CARDS */}

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6 text-center">

                  <p className="text-sm text-zinc-500">
                    Daily
                  </p>

                  <p className="mt-3 text-2xl font-black">
                    {formatCurrency(dailyEarnings)}
                  </p>

                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6 text-center">

                  <p className="text-sm text-zinc-500">
                    Weekly
                  </p>

                  <p className="mt-3 text-2xl font-black">
                    {formatCurrency(weeklyEarnings)}
                  </p>

                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 text-center">

                  <p className="text-sm text-zinc-500">
                    Monthly
                  </p>

                  <p className="mt-3 text-2xl font-black text-cyan-400">
                    {formatCurrency(monthlyEarnings)}
                  </p>

                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/20 p-6 text-center">

                  <p className="text-sm text-zinc-500">
                    Yearly
                  </p>

                  <p className="mt-3 text-2xl font-black">
                    {formatCurrency(yearlyEarnings)}
                  </p>

                </div>

              </div>

              <p className="mt-7 text-center text-xs leading-5 text-zinc-600">
                Earnings are estimates based on public views and selected RPM.
                Actual revenue can vary depending on audience, country,
                content type, monetization and ad demand.
              </p>

            </div>

            {/* =========================
                RECENT VIDEOS
            ========================== */}

            {channel.recentVideos?.length > 0 && (
              <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">

                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                  Recent Content
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  Recent YouTube Videos
                </h2>

                <div className="mt-7 space-y-3">

                  {channel.recentVideos.map((video) => (
                    <a
                      key={video.id}
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-black/20 p-4 transition hover:border-cyan-500/40 hover:bg-cyan-500/5 md:flex-row md:items-center md:justify-between"
                    >

                      <div className="min-w-0">

                        <h3 className="truncate font-semibold transition-colors hover:text-cyan-400">
                          {video.title}
                        </h3>

                        <p className="mt-1 text-xs text-zinc-600">
                          Published {formatDate(video.publishedAt)}
                        </p>

                      </div>

                      <div className="shrink-0 md:text-right">

                        <p className="font-bold text-cyan-400">
                          {formatNumber(video.views)}
                        </p>

                        <p className="text-xs text-zinc-600">
                          views
                        </p>

                      </div>

                    </a>
                  ))}

                </div>

              </div>
            )}

          </section>
        )}

        {/* =====================================================
            MORE YOUTUBE TOOLS
        ====================================================== */}

        <section className="mt-16">

          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-[#101b28] to-[#0b131d] p-6 shadow-2xl md:p-10">

            <div className="text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-400">

                <span className="h-2 w-2 rounded-full bg-cyan-400" />

                More Free Tools

              </div>

              <h2 className="mt-5 text-3xl font-black md:text-4xl">
                More YouTube Tools
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
                Optimize your videos, improve YouTube SEO and create better
                content with our free YouTube tools.
              </p>

            </div>

            {/* TOOL CARDS */}

            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {youtubeTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/60 hover:bg-zinc-900 hover:shadow-[0_0_35px_rgba(6,182,212,0.12)]"
                >

                  <div className="flex items-start justify-between">

                    <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                      {tool.icon}
                    </div>

                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-400">
                      FREE
                    </span>

                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
                    {tool.title}
                  </h3>

                  <p className="mt-3 leading-6 text-zinc-400">
                    {tool.description}
                  </p>

                  <div className="mt-5 font-semibold text-cyan-400 transition-all group-hover:translate-x-1">
                    Try Tool →
                  </div>

                </Link>
              ))}

            </div>

            {/* ALL TOOLS BUTTON */}

            <div className="mt-10 flex justify-center">

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-7 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                View All YouTube Tools →
              </Link>

            </div>

          </div>

        </section>

        {/* =====================================================
            BOTTOM HOME BUTTON
        ====================================================== */}

        <div className="mt-10 flex justify-center">

          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-bold text-black shadow-xl shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20"
          >
            <span className="text-lg">
              🏠
            </span>

            Back to VideoSEOTools Home

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>

          </Link>

        </div>

        {/* FOOTER */}

        <div className="py-10 text-center text-xs leading-6 text-zinc-600">

          VideoSEOTools uses publicly available YouTube channel data for
          estimates. Actual YouTube revenue may vary.

        </div>

      </div>

    </div>
  );
}
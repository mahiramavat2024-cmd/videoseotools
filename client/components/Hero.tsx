"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [topic, setTopic] = useState("");

  function handleGenerate() {
    if (!topic.trim()) {
      document
        .getElementById("tools")
        ?.scrollIntoView({ behavior: "smooth" });

      return;
    }

    window.location.href = `/youtube/keyword-generator?topic=${encodeURIComponent(
      topic.trim()
    )}`;
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "Enter") {
      handleGenerate();
    }
  }

  const popularTopics = [
    "YouTube SEO",
    "Gaming",
    "Travel",
    "AI",
    "Fitness",
    "Technology",
  ];

  return (
    <section className="relative overflow-hidden bg-[#08111f] px-6 pb-20 pt-16 text-center md:pb-24 md:pt-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute left-0 top-1/2 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
          🚀 FREE YOUTUBE SEO TOOLS
        </span>

        {/* Heading */}
        <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Grow Your YouTube Channel
          <br />
          <span className="text-cyan-400">
            With Smarter SEO Tools
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg md:text-xl md:leading-8">
          Find powerful keywords, create click-worthy titles,
          generate tags, write descriptions and build better
          YouTube content with free AI-powered tools.
        </p>

        {/* =====================================================
            UNIVERSAL VIDEO DOWNLOADER
        ====================================================== */}

        <div className="mx-auto mt-10 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0d1d30] via-[#0c1829] to-[#08111f] p-6 text-left shadow-[0_0_45px_rgba(6,182,212,0.08)] md:p-8">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">

              {/* Header */}
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>
                  <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                    🌐 VidNova Downloader
                  </span>

                  <h2 className="mt-4 text-2xl font-extrabold text-white md:text-3xl">
                    Universal Video Downloader
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400 md:text-base">
                    Download public videos from Instagram,
                    YouTube, TikTok, X and Facebook in one place.
                  </p>
                </div>

                <Link
                  href="/universal-video-downloader"
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  Open Downloader →
                </Link>

              </div>

              {/* Platform Cards */}
              <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-5">

                {/* Instagram */}
                <Link
                  href="/instagram/reel-downloader"
                  className="group rounded-2xl border border-zinc-800 bg-[#08111f] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:bg-pink-500/5"
                >
                  <div className="text-2xl">📸</div>

                  <div className="mt-2 text-sm font-bold text-white group-hover:text-cyan-400">
                    Instagram
                  </div>

                  <div className="mt-1 text-xs text-zinc-500">
                    Reel Downloader
                  </div>
                </Link>

                {/* YouTube */}
                <Link
                  href="/youtube/video-downloader"
                  className="group rounded-2xl border border-zinc-800 bg-[#08111f] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-500/5"
                >
                  <div className="text-2xl">▶️</div>

                  <div className="mt-2 text-sm font-bold text-white group-hover:text-cyan-400">
                    YouTube
                  </div>

                  <div className="mt-1 text-xs text-zinc-500">
                    Video Downloader
                  </div>
                </Link>

                {/* TikTok */}
                <Link
                  href="/tiktok/video-downloader"
                  className="group rounded-2xl border border-zinc-800 bg-[#08111f] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-cyan-500/5"
                >
                  <div className="text-2xl">🎵</div>

                  <div className="mt-2 text-sm font-bold text-white group-hover:text-cyan-400">
                    TikTok
                  </div>

                  <div className="mt-1 text-xs text-zinc-500">
                    Video Downloader
                  </div>
                </Link>

                {/* X */}
                <Link
                  href="/twitter/video-downloader"
                  className="group rounded-2xl border border-zinc-800 bg-[#08111f] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400/50 hover:bg-zinc-500/5"
                >
                  <div className="text-2xl">𝕏</div>

                  <div className="mt-2 text-sm font-bold text-white group-hover:text-cyan-400">
                    X / Twitter
                  </div>

                  <div className="mt-1 text-xs text-zinc-500">
                    Video Downloader
                  </div>
                </Link>

                {/* Facebook */}
                <Link
                  href="/facebook/video-downloader"
                  className="group rounded-2xl border border-zinc-800 bg-[#08111f] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/5"
                >
                  <div className="text-2xl">📘</div>

                  <div className="mt-2 text-sm font-bold text-white group-hover:text-cyan-400">
                    Facebook
                  </div>

                  <div className="mt-1 text-xs text-zinc-500">
                    Video Downloader
                  </div>
                </Link>

              </div>

              {/* Bottom Text */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-500 md:justify-start">
                <span>✓ Multiple platforms</span>
                <span>✓ Simple interface</span>
                <span>✓ No software required</span>
              </div>

            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN YOUTUBE SEARCH TOOL
        ====================================================== */}

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-2xl border border-zinc-700 bg-[#0d1828] p-2 shadow-2xl shadow-black/20 md:p-3">

            <div className="flex flex-col gap-2 md:flex-row">

              {/* Input */}
              <div className="relative flex-1">
                <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl">
                  🔍
                </span>

                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your YouTube video topic..."
                  className="h-14 w-full rounded-xl border border-zinc-700 bg-[#08111f] pl-14 pr-5 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 md:h-16"
                />
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                className="h-14 rounded-xl bg-cyan-500 px-7 font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 md:h-16"
              >
                🔍 Generate Keywords
              </button>

            </div>
          </div>

          {/* Helper */}
          <p className="mt-3 text-sm text-zinc-500">
            Enter a topic and discover keyword ideas for your next video.
          </p>
        </div>

        {/* =====================================================
            POPULAR TOPICS
        ====================================================== */}

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">

          <span className="mr-1 text-sm text-zinc-500">
            Popular:
          </span>

          {popularTopics.map((item) => (
            <button
              key={item}
              onClick={() => setTopic(item)}
              className="rounded-full border border-zinc-800 bg-[#0d1828] px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:text-cyan-400"
            >
              {item}
            </button>
          ))}

        </div>

        {/* =====================================================
            QUICK TOOLS
        ====================================================== */}

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-5">

          {/* Titles */}
          <Link
            href="/youtube/title-generator"
            className="group rounded-xl border border-zinc-800 bg-[#0d1828] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-2xl">🎬</div>

            <div className="mt-2 text-sm font-semibold text-white group-hover:text-cyan-400">
              Titles
            </div>
          </Link>

          {/* Keywords */}
          <Link
            href="/youtube/keyword-generator"
            className="group rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50"
          >
            <div className="text-2xl">🔑</div>

            <div className="mt-2 text-sm font-semibold text-white group-hover:text-cyan-400">
              Keywords
            </div>
          </Link>

          {/* Tags */}
          <Link
            href="/youtube/tags-generator"
            className="group rounded-xl border border-zinc-800 bg-[#0d1828] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-2xl">🏷️</div>

            <div className="mt-2 text-sm font-semibold text-white group-hover:text-cyan-400">
              Tags
            </div>
          </Link>

          {/* Hashtags */}
          <Link
            href="/youtube/hashtag-generator"
            className="group rounded-xl border border-zinc-800 bg-[#0d1828] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-2xl">#️⃣</div>

            <div className="mt-2 text-sm font-semibold text-white group-hover:text-cyan-400">
              Hashtags
            </div>
          </Link>

          {/* Scripts */}
          <Link
            href="/youtube/script-generator"
            className="group rounded-xl border border-zinc-800 bg-[#0d1828] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-2xl">🎥</div>

            <div className="mt-2 text-sm font-semibold text-white group-hover:text-cyan-400">
              Scripts
            </div>
          </Link>

        </div>

        {/* Trust Line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span>✓ Free to use</span>
          <span>✓ AI-powered</span>
          <span>✓ No complicated setup</span>
          <span>✓ Built for creators</span>
        </div>

      </div>
    </section>
  );
}
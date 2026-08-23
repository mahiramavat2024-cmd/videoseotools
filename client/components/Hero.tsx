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
          Find powerful keywords, create click-worthy titles, generate tags,
          write descriptions and build better YouTube content with free
          AI-powered tools.
        </p>

        {/* MAIN SEARCH TOOL */}
        <div className="mx-auto mt-10 max-w-4xl">
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

          {/* Small helper text */}
          <p className="mt-3 text-sm text-zinc-500">
            Enter a topic and discover keyword ideas for your next video.
          </p>
        </div>

        {/* POPULAR TOPICS */}
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

        {/* QUICK TOOLS */}
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
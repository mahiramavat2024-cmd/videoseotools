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

  const youtubeTools = [
    {
      title: "Title Generator",
      description: "Create click-worthy YouTube titles",
      icon: "🎬",
      href: "/youtube/title-generator",
    },
    {
      title: "Keyword Generator",
      description: "Find powerful YouTube keywords",
      icon: "🔑",
      href: "/youtube/keyword-generator",
    },
    {
      title: "Tags Generator",
      description: "Generate relevant YouTube tags",
      icon: "🏷️",
      href: "/youtube/tags-generator",
    },
    {
      title: "Hashtag Generator",
      description: "Find trending YouTube hashtags",
      icon: "#️⃣",
      href: "/youtube/hashtag-generator",
    },
    {
      title: "Script Generator",
      description: "Create engaging video scripts",
      icon: "🎥",
      href: "/youtube/script-generator",
    },
  ];

  const instagramTools = [
    {
      title: "Keyword Generator",
      description: "Find keywords for Instagram content",
      icon: "🔑",
      href: "/instagram/keyword-generator",
    },
    {
      title: "Tags Generator",
      description: "Generate relevant Instagram tags",
      icon: "🏷️",
      href: "/instagram/tags-generator",
    },
    {
      title: "Caption Generator",
      description: "Create engaging Instagram captions",
      icon: "✍️",
      href: "/instagram/caption-generator",
    },
    {
      title: "Script Generator",
      description: "Create scripts for Reels and videos",
      icon: "🎥",
      href: "/instagram/script-generator",
    },
    {
      title: "SEO Title Generator",
      description: "Create optimized Instagram titles",
      icon: "🚀",
      href: "/instagram/seo-title-generator",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#08111f] px-6 pb-24 pt-16 text-white md:pt-24">

      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* BADGE */}

        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            🚀 FREE CREATOR SEO TOOLS
          </span>
        </div>

        {/* HERO HEADING */}

        <h1 className="mx-auto mt-7 max-w-5xl text-center text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Grow Your Content
          <br />

          <span className="text-cyan-400">
            With Smarter SEO Tools
          </span>
        </h1>

        {/* DESCRIPTION */}

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-zinc-300 sm:text-lg md:text-xl md:leading-8">
          Create better YouTube and Instagram content with powerful
          AI-powered tools for keywords, titles, tags, captions,
          hashtags and scripts.
        </p>

        {/* SEARCH */}

        <div className="mx-auto mt-10 max-w-4xl">

          <div className="rounded-2xl border border-zinc-700 bg-[#0d1828] p-2 shadow-2xl shadow-black/20 md:p-3">

            <div className="flex flex-col gap-2 md:flex-row">

              <div className="relative flex-1">

                <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl">
                  🔍
                </span>

                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your content topic..."
                  className="h-14 w-full rounded-xl border border-zinc-700 bg-[#08111f] pl-14 pr-5 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 md:h-16"
                />

              </div>

              <button
                onClick={handleGenerate}
                className="h-14 rounded-xl bg-cyan-500 px-7 font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 md:h-16"
              >
                🔍 Generate Keywords
              </button>

            </div>
          </div>

          <p className="mt-3 text-center text-sm text-zinc-500">
            Enter a topic and discover keyword ideas for your content.
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

        {/* =========================================================
            YOUTUBE TOOLS
        ========================================================= */}

        <section
          id="tools"
          className="mt-20"
        >

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-red-400">
              YouTube SEO
            </span>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              YouTube Creator Tools
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
              Everything you need to optimize your YouTube videos,
              improve discoverability and create better content.
            </p>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {youtubeTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-[#101d30] hover:shadow-xl hover:shadow-red-500/5"
              >

                <div className="text-3xl">
                  {tool.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-white transition group-hover:text-red-400">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {tool.description}
                </p>

                <div className="mt-5 text-sm font-semibold text-zinc-500 transition group-hover:text-red-400">
                  Open Tool →
                </div>

              </Link>
            ))}

          </div>

        </section>

        {/* =========================================================
            INSTAGRAM TOOLS
        ========================================================= */}

        <section className="mt-24">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-pink-400">
              Instagram SEO
            </span>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Instagram Creator Tools
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
              Create better Instagram Reels and posts with AI-powered
              keywords, tags, captions, scripts and SEO titles.
            </p>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {instagramTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-[#101d30] hover:shadow-xl hover:shadow-pink-500/5"
              >

                <div className="text-3xl">
                  {tool.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-white transition group-hover:text-pink-400">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {tool.description}
                </p>

                <div className="mt-5 text-sm font-semibold text-zinc-500 transition group-hover:text-pink-400">
                  Open Tool →
                </div>

              </Link>
            ))}

          </div>

        </section>

        {/* TRUST LINE */}

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-500">

          <span>✓ Free to use</span>
          <span>✓ AI-powered</span>
          <span>✓ No complicated setup</span>
          <span>✓ Built for creators</span>

        </div>

      </div>

    </section>
  );
}
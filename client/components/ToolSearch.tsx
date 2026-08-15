"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Tool = {
  title: string;
  description: string;
  category: string;
  href: string;
  icon: string;
};

const tools: Tool[] = [
  {
    title: "YouTube Title Generator",
    description:
      "Generate catchy and SEO-friendly YouTube title ideas for your videos.",
    category: "YOUTUBE",
    href: "/youtube/title-generator",
    icon: "🎬",
  },

  {
    title: "YouTube Description Generator",
    description:
      "Create structured, readable and SEO-friendly YouTube descriptions.",
    category: "YOUTUBE",
    href: "/youtube/description-generator",
    icon: "📝",
  },

  {
    title: "YouTube Tags Generator",
    description:
      "Generate relevant YouTube tag ideas based on your video topic.",
    category: "YOUTUBE",
    href: "/youtube/tags-generator",
    icon: "🏷️",
  },

  {
    title: "YouTube Hashtag Generator",
    description:
      "Find relevant hashtag ideas for your YouTube videos and content.",
    category: "YOUTUBE",
    href: "/youtube/hashtag-generator",
    icon: "#️⃣",
  },

  {
    title: "YouTube Keyword Generator",
    description:
      "Find powerful YouTube keywords, keyword ideas and SEO search terms for your videos.",
    category: "YOUTUBE",
    href: "/youtube/keyword-generator",
    icon: "🔑",
  },

  {
    title: "YouTube Script Generator",
    description:
      "Create engaging, structured YouTube scripts with AI-powered hooks, storytelling and visual suggestions.",
    category: "YOUTUBE",
    href: "/youtube/script-generator",
    icon: "🎥",
  },

  /* =========================
     YOUTUBE EARNINGS CHECKER
  ========================= */

  {
    title: "YouTube Channel Earnings Checker",
    description:
      "Estimate a YouTube channel's monthly and yearly earnings using public channel statistics and estimated RPM.",
    category: "YOUTUBE",
    href: "/youtube/earnings-checker",
    icon: "💰",
  },
];

export default function ToolSearch() {
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return tools;
    }

    return tools.filter((tool) => {
      return (
        tool.title.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* =========================
          HEADING
      ========================= */}

      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          Explore VideoSEOTools
        </p>

        <h2 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
          Find Any Tool
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
          Search from all available VideoSEOTools tools.
        </p>
      </div>

      {/* =========================
          SEARCH BOX
      ========================= */}

      <div className="mx-auto mt-10 max-w-3xl">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl">
            🔍
          </span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-12 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>
      </div>

      {/* =========================
          TOOL COUNT
      ========================= */}

      <div className="mt-6 text-center text-sm text-zinc-500">
        {filteredTools.length}{" "}
        {filteredTools.length === 1 ? "tool" : "tools"} available
      </div>

      {/* =========================
          TOOLS
      ========================= */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:bg-zinc-900 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]"
          >
            {/* Icon */}

            <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
              {tool.icon}
            </div>

            {/* Title */}

            <h3 className="mt-5 text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
              {tool.title}
            </h3>

            {/* Category */}

            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-cyan-400">
              {tool.category}
            </p>

            {/* Description */}

            <p className="mt-4 leading-7 text-zinc-400">
              {tool.description}
            </p>

            {/* Bottom */}

            <div className="mt-6 flex items-center justify-between">
              <span className="font-semibold text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
                Open Tool →
              </span>

              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                FREE
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* =========================
          NO RESULTS
      ========================= */}

      {filteredTools.length === 0 && (
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900/60 p-10 text-center">
          <div className="text-4xl">🔍</div>

          <h3 className="mt-4 text-xl font-bold text-white">
            No tools found
          </h3>

          <p className="mt-2 text-zinc-400">
            Try searching for title, description, tags, hashtags, keywords,
            script or earnings.
          </p>

          <button
            onClick={() => setSearch("")}
            className="mt-5 rounded-lg bg-cyan-500 px-5 py-2.5 font-semibold text-black transition hover:bg-cyan-400"
          >
            Show All Tools
          </button>
        </div>
      )}
    </section>
  );
}
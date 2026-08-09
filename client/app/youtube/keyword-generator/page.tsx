"use client";

import { useState } from "react";
import { getSeoScore, getCTR } from "@/lib/score";

export default function KeywordGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState("");

  async function generateKeywords() {
    if (!topic.trim()) {
      setError("Please enter a YouTube video topic.");
      return;
    }

    setLoading(true);
    setError("");
    setKeywords([]);
    setCopied("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "keywords",
          input: topic,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to generate keywords."
        );
      }

      if (!data.results || !Array.isArray(data.results)) {
        throw new Error("No keyword results were returned.");
      }

      setKeywords(data.results);
    } catch (err) {
      console.error("Keyword Generation Error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function copyKeyword(keyword: string) {
    try {
      await navigator.clipboard.writeText(keyword);

      setCopied(keyword);

      setTimeout(() => {
        setCopied("");
      }, 1500);
    } catch (error) {
      console.error("Copy Error:", error);
    }
  }

  async function copyAllKeywords() {
    if (keywords.length === 0) return;

    try {
      await navigator.clipboard.writeText(
        keywords.join("\n")
      );

      setCopied("ALL");

      setTimeout(() => {
        setCopied("");
      }, 1500);
    } catch (error) {
      console.error("Copy All Error:", error);
    }
  }

  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="px-6 pb-12 pt-16 md:pt-20">
        <div className="mx-auto max-w-6xl text-center">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            🔍 FREE YOUTUBE KEYWORD RESEARCH TOOL
          </span>

          {/* Heading */}
          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Free YouTube Keyword
            <br />
            <span className="text-cyan-400">
              Generator
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Find powerful YouTube keywords, discover keyword ideas
            for YouTube videos, and build a smarter content strategy
            with our free YouTube keyword research tool.
          </p>
        </div>
      </section>

      {/* =========================
          GENERATOR SECTION
      ========================= */}

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">

          <div className="rounded-2xl border border-zinc-700 bg-[#0d1828] p-6 shadow-2xl md:p-8">

            <h2 className="text-2xl font-bold text-white">
              Generate YouTube Keywords
            </h2>

            <p className="mt-2 text-zinc-400">
              Enter your video topic and let AI generate relevant
              keyword ideas.
            </p>

            {/* Input + Button */}
            <div className="mt-6 flex flex-col gap-4 md:flex-row">

              <input
                type="text"
                value={topic}
                onChange={(e) => {
                  setTopic(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    generateKeywords();
                  }
                }}
                placeholder="Example: How to grow a YouTube channel"
                className="flex-1 rounded-xl border border-zinc-700 bg-[#08111f] px-5 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />

              <button
                onClick={generateKeywords}
                disabled={loading}
                className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "Generating..."
                  : "🔍 Generate Keywords"}
              </button>

            </div>

            {/* Example */}
            <p className="mt-3 text-sm text-zinc-500">
              Examples: YouTube SEO, fitness, travel, gaming,
              cooking, technology
            </p>

            {/* Error */}
            {error && (
              <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                ⚠️ {error}
              </div>
            )}

          </div>
        </div>
      </section>

      {/* =========================
          RESULTS SECTION
      ========================= */}

      {keywords.length > 0 && (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-5xl">

            {/* Results Header */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  AI Keyword Results
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  Keyword Ideas
                </h2>

                <p className="mt-2 text-zinc-400">
                  SEO scores and CTR potential are calculated for
                  each keyword.
                </p>
              </div>

              {/* Copy All */}
              <button
                onClick={copyAllKeywords}
                className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 font-semibold text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-500/20"
              >
                {copied === "ALL"
                  ? "✓ Copied All"
                  : "📋 Copy All Keywords"}
              </button>

            </div>

            {/* Keyword Cards */}
            <div className="grid gap-4 md:grid-cols-2">

              {keywords.map((keyword, index) => {

                const seoScore = getSeoScore(keyword);
                const ctr = getCTR(seoScore);

                return (
                  <div
                    key={`${keyword}-${index}`}
                    className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5"
                  >

                    {/* Keyword Top */}
                    <div className="flex items-start justify-between gap-4">

                      <div className="flex min-w-0 items-start gap-3">

                        {/* Number */}
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-400">
                          {index + 1}
                        </span>

                        {/* Keyword */}
                        <span className="break-words pt-1 font-semibold leading-6 text-white">
                          {keyword}
                        </span>

                      </div>

                      {/* Copy Button */}
                      <button
                        onClick={() => copyKeyword(keyword)}
                        className="shrink-0 rounded-lg border border-zinc-700 px-3 py-2 text-sm font-semibold text-cyan-400 transition hover:border-cyan-500/50 hover:bg-cyan-500/10"
                      >
                        {copied === keyword
                          ? "✓ Copied"
                          : "Copy"}
                      </button>

                    </div>

                    {/* SEO + CTR */}
                    <div className="mt-5 grid grid-cols-2 gap-3">

                      {/* SEO Score */}
                      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3">

                        <div className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                          SEO Score
                        </div>

                        <div className="mt-1 text-xl font-bold text-cyan-400">
                          {seoScore}/100
                        </div>

                      </div>

                      {/* CTR */}
                      <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-3">

                        <div className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                          CTR Potential
                        </div>

                        <div className="mt-1 text-xl font-bold text-green-400">
                          {ctr}
                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </section>
      )}

      {/* =========================
          ABOUT SECTION
      ========================= */}

      <section className="border-y border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">

          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            YouTube SEO
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What Is a YouTube Keyword Generator?
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-zinc-300">

            <p>
              A YouTube Keyword Generator helps creators discover
              relevant keyword ideas based on their video topic.
            </p>

            <p>
              These keywords can help you plan your video titles,
              descriptions, tags and overall YouTube content
              strategy.
            </p>

            <p>
              Enter your topic above and use AI to generate keyword
              suggestions that are relevant to your content.
            </p>

          </div>

        </div>
      </section>

      {/* =========================
          HOW TO USE
      ========================= */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Simple Process
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            How to Use the YouTube Keyword Generator
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Generate keyword ideas in three simple steps.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Step 1 */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7 transition hover:border-cyan-500/40">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              1
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Enter Your Topic
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Enter your YouTube video topic, niche or content
              idea in the search box.
            </p>

          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7 transition hover:border-cyan-500/40">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              2
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Generate Keywords
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Click Generate Keywords and let AI create relevant
              YouTube keyword ideas.
            </p>

          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7 transition hover:border-cyan-500/40">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              3
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Optimize Your Video
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Review the keywords, check their SEO score and use
              relevant terms in your YouTube SEO strategy.
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          SEO TIPS
      ========================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-5xl rounded-2xl border border-zinc-800 bg-[#0d1828] p-7 md:p-10">

          <h2 className="text-2xl font-bold md:text-3xl">
            YouTube Keyword Research Tips
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-zinc-800 bg-[#08111f] p-5">
              <h3 className="font-bold text-white">
                🔎 Use Specific Keywords
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Specific long-tail keywords can better describe
                the exact topic of your video.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-[#08111f] p-5">
              <h3 className="font-bold text-white">
                🎯 Match Search Intent
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Choose keywords that match what viewers are
                actually looking for.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-[#08111f] p-5">
              <h3 className="font-bold text-white">
                📝 Use Keywords Naturally
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Use relevant keywords naturally in your title,
                description and content.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-[#08111f] p-5">
              <h3 className="font-bold text-white">
                🚫 Avoid Keyword Stuffing
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Focus on relevance and readability instead of
                adding unnecessary keywords.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
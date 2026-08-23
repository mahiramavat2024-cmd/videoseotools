"use client";

import { useState } from "react";
import { getSeoScore, getCTR } from "@/lib/score";

export default function InstagramSeoTitleGenerator() {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("Viral");
  const [language, setLanguage] = useState("Hinglish");
  const [count, setCount] = useState("10");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!topic.trim()) {
      alert("Please enter your Instagram topic.");
      return;
    }

    setLoading(true);
    setResults([]);

    try {
      const prompt = `
Generate ${count} SEO-friendly Instagram Reel/Post titles.

Topic:
${topic.trim()}

Language:
${language}

Title Style:
${style}

Requirements:
- Create attractive, clickable Instagram titles.
- Keep titles natural and easy to understand.
- Optimize for Instagram search and discoverability.
- Use relevant keywords naturally.
- Avoid fake claims and keyword stuffing.
- Make every title different.
- Suitable for Instagram Reels and posts.
- Return ONLY the titles.
- Put each title on a separate line.
- Do not number them.
- Do not add explanations.
`;

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "instagram_seo_title",
          input: prompt,
        }),
      });

      const data = await response.json();

      console.log("Instagram SEO Title Response:", data);

      if (!response.ok) {
        alert(
          data?.error ||
            data?.message ||
            "Unable to generate titles."
        );
        return;
      }

      let text = "";

      if (typeof data?.content === "string") {
        text = data.content;
      } else if (typeof data?.result === "string") {
        text = data.result;
      } else if (typeof data?.results === "string") {
        text = data.results;
      } else if (Array.isArray(data?.results)) {
        text = data.results.join("\n");
      } else if (Array.isArray(data?.result)) {
        text = data.result.join("\n");
      }

      if (!text.trim()) {
        alert("AI returned no titles.");
        return;
      }

      const titles = text
        .split("\n")
        .map((item: string) =>
          item
            .replace(/^[-•*]\s*/, "")
            .replace(/^\d+[\).\-\s]+/, "")
            .trim()
        )
        .filter((item: string) => item.length > 0);

      setResults(titles);
    } catch (error) {
      console.error("Instagram SEO Title Error:", error);
      alert("AI Generation Failed");
    } finally {
      setLoading(false);
    }
  }

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch (error) {
      console.error("Copy failed:", error);
      alert("Unable to copy.");
    }
  }

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(results.join("\n"));
      alert("All titles copied!");
    } catch (error) {
      console.error("Copy all failed:", error);
      alert("Unable to copy.");
    }
  }

  return (
    <main className="min-h-screen bg-[#08111f] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="text-center">

          <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-bold text-pink-400">
            Instagram SEO
          </span>

          <h1 className="mt-7 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Instagram SEO Title Generator
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Generate engaging, searchable and click-worthy Instagram
            titles for Reels and posts with AI.
          </p>

        </div>

        {/* =========================================================
            GENERATOR
        ========================================================= */}

        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 md:p-8">

          <h2 className="mb-6 text-center text-3xl font-bold">
            Create Instagram SEO Titles
          </h2>

          {/* Topic */}

          <label className="mb-2 block text-sm font-semibold text-zinc-300">
            Instagram Topic
          </label>

          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                generate();
              }
            }}
            placeholder="Example: Best Rakhi gifts for brother"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-pink-500"
          />

          {/* =========================================================
              OPTIONS
          ========================================================= */}

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            {/* Style */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                Title Style
              </label>

              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-4 text-white outline-none focus:border-pink-500"
              >
                <option>Viral</option>
                <option>Click-Worthy</option>
                <option>SEO Focused</option>
                <option>Curiosity</option>
                <option>Professional</option>
                <option>Trending</option>
              </select>
            </div>

            {/* Language */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                Language
              </label>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-4 text-white outline-none focus:border-pink-500"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Hinglish</option>
              </select>
            </div>

            {/* Count */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                Number of Titles
              </label>

              <select
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-4 text-white outline-none focus:border-pink-500"
              >
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
              </select>
            </div>

          </div>

          {/* =========================================================
              GENERATE BUTTON
          ========================================================= */}

          <button
            onClick={generate}
            disabled={loading}
            className="mt-7 w-full rounded-xl bg-pink-500 px-6 py-4 text-lg font-bold text-white transition hover:bg-pink-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Generating..."
              : "✨ Generate SEO Titles"}
          </button>

        </div>

        {/* =========================================================
            RESULTS
        ========================================================= */}

        {results.length > 0 && (
          <div className="mx-auto mt-10 max-w-5xl">

            {/* Results Header */}

            <div className="mb-5 flex items-center justify-between gap-4">

              <div>
                <h2 className="text-2xl font-bold">
                  Generated Instagram Titles
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  SEO score and estimated CTR are calculated for each title.
                </p>
              </div>

              <button
                onClick={copyAll}
                className="shrink-0 rounded-lg bg-cyan-500 px-4 py-2 font-bold text-black transition hover:bg-cyan-400"
              >
                Copy All
              </button>

            </div>

            {/* Result Cards */}

            <div className="space-y-4">

              {results.map((title, index) => {

                const seoScore = getSeoScore(title);
                const ctr = getCTR(seoScore);

                return (
                  <div
                    key={`${title}-${index}`}
                    className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:border-zinc-700"
                  >

                    <div className="flex items-start justify-between gap-5">

                      {/* Title */}

                      <div className="flex min-w-0 items-start gap-4">

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-500/10 text-sm font-bold text-pink-400">
                          {index + 1}
                        </span>

                        <div className="min-w-0">

                          <p className="text-lg font-semibold leading-7 text-white">
                            {title}
                          </p>

                          {/* =================================================
                              SEO SCORE + CTR
                          ================================================= */}

                          <div className="mt-3 flex flex-wrap items-center gap-3">

                            {/* SEO Score */}

                            <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-sm font-semibold text-cyan-400">
                              SEO Score: {seoScore}/100
                            </span>

                            {/* CTR */}

                            <span className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-sm font-semibold text-purple-400">
                              CTR: {ctr}
                            </span>

                          </div>

                        </div>

                      </div>

                      {/* Copy */}

                      <button
                        onClick={() => copy(title)}
                        className="shrink-0 rounded-lg bg-cyan-500 px-4 py-2 font-bold text-black transition hover:bg-cyan-400"
                      >
                        Copy
                      </button>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        )}

        {/* =========================================================
            SEO INFORMATION
        ========================================================= */}

        <section className="mx-auto mt-20 max-w-5xl border-t border-zinc-800 pt-12">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-pink-400">
              Instagram SEO
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              Create Better Instagram Titles
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-zinc-400">
              Create searchable and engaging titles that naturally include
              relevant keywords and help your Instagram content become easier
              to discover.
            </p>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-lg font-bold">
                🔍 Search Friendly
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Generate titles using relevant keywords related to your
                Instagram content.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-lg font-bold">
                🎯 Click-Worthy
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Create titles designed to attract attention and encourage
                people to explore your content.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-lg font-bold">
                📈 SEO Score
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Compare generated titles using the same SEO score and CTR
                system used across your other generators.
              </p>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}
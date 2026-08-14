"use client";

import { useState } from "react";

type CaptionResult = {
  caption: string;
  score: number;
  potential: string;
};

function getEngagementScore(caption: string): number {
  const text = caption.trim();
  const lower = text.toLowerCase();

  let score = 35;

  // --------------------------------------------------
  // Caption length
  // --------------------------------------------------
  const words = text.split(/\s+/).filter(Boolean).length;

  if (words >= 5 && words <= 12) {
    score += 8;
  } else if (words >= 13 && words <= 25) {
    score += 12;
  } else if (words >= 26 && words <= 40) {
    score += 8;
  } else if (words > 40) {
    score += 3;
  }

  // --------------------------------------------------
  // Strong engagement words
  // --------------------------------------------------
  const engagementWords = [
    "discover",
    "explore",
    "learn",
    "secret",
    "tips",
    "best",
    "top",
    "amazing",
    "ultimate",
    "guide",
    "mistakes",
    "ideas",
    "inspiration",
    "why",
    "how",
    "ready",
    "finally",
    "must",
    "favorite",
    "beautiful",
    "powerful",
    "simple",
    "easy",
    "important",
  ];

  const engagementMatches = engagementWords.filter((word) =>
    lower.includes(word)
  ).length;

  score += Math.min(engagementMatches * 3, 18);

  // --------------------------------------------------
  // CTA words
  // --------------------------------------------------
  const ctaWords = [
    "comment",
    "share",
    "save",
    "follow",
    "like",
    "tell us",
    "let me know",
    "tag",
    "check",
    "try",
    "watch",
    "click",
  ];

  const ctaMatches = ctaWords.filter((word) =>
    lower.includes(word)
  ).length;

  score += Math.min(ctaMatches * 4, 16);

  // --------------------------------------------------
  // Question mark
  // --------------------------------------------------
  if (text.includes("?")) {
    score += 7;
  }

  // --------------------------------------------------
  // Exclamation mark
  // --------------------------------------------------
  if (text.includes("!")) {
    score += 4;
  }

  // --------------------------------------------------
  // Emoji
  // --------------------------------------------------
  const emojiMatches = text.match(
    /[\u{1F300}-\u{1FAFF}]/gu
  );

  if (emojiMatches) {
    score += Math.min(emojiMatches.length * 2, 8);
  }

  // --------------------------------------------------
  // Numbers
  // --------------------------------------------------
  if (/\b\d+\b/.test(text)) {
    score += 5;
  }

  // --------------------------------------------------
  // Hashtags
  // --------------------------------------------------
  const hashtags = text.match(/#[a-zA-Z0-9_]+/g);

  if (hashtags) {
    if (hashtags.length >= 2 && hashtags.length <= 8) {
      score += 5;
    } else if (hashtags.length > 12) {
      score -= 5;
    }
  }

  // --------------------------------------------------
  // Personal / emotional language
  // --------------------------------------------------
  const emotionalWords = [
    "love",
    "dream",
    "journey",
    "memories",
    "feeling",
    "feel",
    "happy",
    "excited",
    "beautiful",
    "moment",
    "story",
    "adventure",
    "hope",
    "believe",
    "life",
  ];

  const emotionalMatches = emotionalWords.filter((word) =>
    lower.includes(word)
  ).length;

  score += Math.min(emotionalMatches * 3, 12);

  // --------------------------------------------------
  // Avoid overly long captions
  // --------------------------------------------------
  if (words > 60) {
    score -= 6;
  }

  // --------------------------------------------------
  // Avoid too many punctuation marks
  // --------------------------------------------------
  const punctuationCount = (
    text.match(/[!?]/g) || []
  ).length;

  if (punctuationCount > 6) {
    score -= 4;
  }

  // --------------------------------------------------
  // Add content variation based on caption structure
  // --------------------------------------------------
  if (lower.includes("from") || lower.includes("to")) {
    score += 2;
  }

  if (lower.includes("today") || lower.includes("now")) {
    score += 2;
  }

  if (lower.includes("2026")) {
    score += 2;
  }

  // --------------------------------------------------
  // Final score
  // --------------------------------------------------
  return Math.max(1, Math.min(100, score));
}

function getEngagementPotential(score: number): string {
  if (score >= 85) {
    return "Excellent 🚀";
  }

  if (score >= 70) {
    return "Very Good 🔥";
  }

  if (score >= 55) {
    return "Good 👍";
  }

  if (score >= 40) {
    return "Average";
  }

  return "Low";
}

export default function InstagramCaptionGenerator() {
  const [input, setInput] = useState("");
  const [captions, setCaptions] = useState<CaptionResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  async function generateCaptions() {
    if (!input.trim()) {
      setError("Please enter a topic or describe your Instagram post.");
      return;
    }

    setLoading(true);
    setError("");
    setCaptions([]);
    setCopiedIndex(null);
    setCopiedAll(false);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "caption",
          input: input.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Failed to generate captions."
        );
      }

      if (!Array.isArray(data?.results)) {
        throw new Error("Invalid response from AI.");
      }

      const cleanedCaptions = data.results
        .map((item: string) =>
          String(item)
            .replace(/^\d+[\).\-\s]*/, "")
            .trim()
        )
        .filter(Boolean);

      if (cleanedCaptions.length === 0) {
        throw new Error("No captions were generated.");
      }

      const results: CaptionResult[] = cleanedCaptions.map(
        (caption: string) => {
          const score = getEngagementScore(caption);

          return {
            caption,
            score,
            potential: getEngagementPotential(score),
          };
        }
      );

      setCaptions(results);
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

  async function copyCaption(
    caption: string,
    index: number
  ) {
    try {
      await navigator.clipboard.writeText(caption);

      setCopiedIndex(index);

      setTimeout(() => {
        setCopiedIndex(null);
      }, 1500);
    } catch {
      setError("Unable to copy caption.");
    }
  }

  async function copyAllCaptions() {
    if (captions.length === 0) return;

    const text = captions
      .map(
        (item, index) =>
          `${index + 1}. ${item.caption}`
      )
      .join("\n\n");

    try {
      await navigator.clipboard.writeText(text);

      setCopiedAll(true);

      setTimeout(() => {
        setCopiedAll(false);
      }, 1500);
    } catch {
      setError("Unable to copy captions.");
    }
  }

  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="px-6 pb-10 pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-bold text-pink-400">
            ✨ AI INSTAGRAM CAPTION GENERATOR
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Instagram Caption Generator
          </h1>

          <h2 className="mt-3 text-3xl font-extrabold text-pink-400 md:text-5xl">
            Create Better Captions with AI
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Generate engaging Instagram captions designed to
            improve interaction, reach and audience engagement.
          </p>
        </div>
      </section>

      {/* =========================================================
          GENERATOR
      ========================================================= */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-zinc-800 bg-[#0d1828] p-8">
          <h2 className="text-2xl font-bold text-white">
            Generate Instagram Captions
          </h2>

          <p className="mt-2 text-zinc-400">
            Enter your post topic and let AI create engaging
            caption ideas.
          </p>

          <div className="mt-6 flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading) {
                  generateCaptions();
                }
              }}
              placeholder="Example: Top 5 travel destinations"
              className="flex-1 rounded-xl border border-zinc-700 bg-[#08111f] px-5 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
            />

            <button
              onClick={generateCaptions}
              disabled={loading}
              className="rounded-xl bg-pink-500 px-8 py-4 font-bold text-white transition hover:bg-pink-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Generating..."
                : "✨ Generate Captions"}
            </button>
          </div>

          <p className="mt-3 text-sm text-zinc-500">
            Examples: travel, fitness, fashion, food, business,
            photography
          </p>

          {error && (
            <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-400">
              {error}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          RESULTS
      ========================================================= */}
      {captions.length > 0 && (
        <section className="px-6 py-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-pink-400">
                  AI CAPTION RESULTS
                </p>

                <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                  Instagram Caption Ideas
                </h2>

                <p className="mt-2 text-zinc-400">
                  Engagement scores and interaction potential
                  are calculated for each caption.
                </p>
              </div>

              <button
                onClick={copyAllCaptions}
                className="rounded-xl border border-pink-500/40 bg-pink-500/10 px-5 py-3 font-bold text-pink-400 transition hover:bg-pink-500/20"
              >
                {copiedAll
                  ? "✓ Copied All Captions"
                  : "📋 Copy All Captions"}
              </button>
            </div>

            {/* Caption Grid */}
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {captions.map((item, index) => (
                <div
                  key={`${item.caption}-${index}`}
                  className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:border-pink-500/50"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-500/10 text-sm font-bold text-pink-400">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <p className="whitespace-pre-line text-base font-bold leading-7 text-white">
                          {item.caption}
                        </p>

                        <button
                          onClick={() =>
                            copyCaption(
                              item.caption,
                              index
                            )
                          }
                          className="shrink-0 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-bold text-pink-400 transition hover:border-pink-500/50 hover:bg-pink-500/10"
                        >
                          {copiedIndex === index
                            ? "✓ Copied"
                            : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Score Cards */}
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {/* Engagement Score */}
                    <div className="rounded-xl border border-pink-500/30 bg-pink-500/5 p-4">
                      <p className="text-xs uppercase tracking-wider text-zinc-500">
                        Engagement Score
                      </p>

                      <p className="mt-2 text-2xl font-extrabold text-pink-400">
                        {item.score}/100
                      </p>
                    </div>

                    {/* Engagement Potential */}
                    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                      <p className="text-xs uppercase tracking-wider text-zinc-500">
                        Engagement Potential
                      </p>

                      <p className="mt-2 text-xl font-extrabold text-emerald-400">
                        {item.potential}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Score Explanation */}
            <div className="mt-8 rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-lg font-bold text-white">
                📊 How Engagement Score Works
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                The score considers caption length, engagement
                words, calls-to-action, questions, emojis,
                numbers, emotional language, hashtags and
                caption structure. Each caption is evaluated
                individually, so scores can differ.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg bg-emerald-500/10 px-3 py-2 text-emerald-400">
                  85+ Excellent 🚀
                </span>

                <span className="rounded-lg bg-cyan-500/10 px-3 py-2 text-cyan-400">
                  70–84 Very Good 🔥
                </span>

                <span className="rounded-lg bg-green-500/10 px-3 py-2 text-green-400">
                  55–69 Good 👍
                </span>

                <span className="rounded-lg bg-yellow-500/10 px-3 py-2 text-yellow-400">
                  40–54 Average
                </span>

                <span className="rounded-lg bg-red-500/10 px-3 py-2 text-red-400">
                  Below 40 Low
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          SEO CONTENT
      ========================================================= */}
      <section className="border-t border-zinc-800/70 bg-[#0a1424] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Free Instagram Caption Generator
          </h2>

          <div className="mt-8 space-y-6 leading-8 text-zinc-400">
            <p>
              VideoSEOTools Instagram Caption Generator helps
              creators generate engaging caption ideas for
              different types of Instagram posts.
            </p>

            <p>
              Enter your topic, post idea, travel destination,
              product, lifestyle content or any other subject
              and generate multiple caption ideas with AI.
            </p>

            <p>
              Each generated caption receives an individual
              engagement score and engagement potential based
              on its wording, structure and engagement signals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
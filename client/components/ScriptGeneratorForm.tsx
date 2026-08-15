"use client";

import { useState } from "react";

export default function ScriptGeneratorForm() {
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState("5 Minutes");
  const [language, setLanguage] = useState("English");
  const [contentType, setContentType] = useState("Documentary");
  const [tone, setTone] = useState("Cinematic");
  const [audience, setAudience] = useState("");
  const [keywords, setKeywords] = useState("");

  const [script, setScript] = useState("");
  const [visualPlan, setVisualPlan] = useState("");
  const [scriptTitles, setScriptTitles] = useState("");

  const [loading, setLoading] = useState(false);
  const [visualLoading, setVisualLoading] = useState(false);
  const [titleLoading, setTitleLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  /* =========================
     WORD COUNT
  ========================= */

  function getWordCount(text: string) {
    if (!text.trim()) return 0;

    return text
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
  }

  /* =========================
     ESTIMATED DURATION
  ========================= */

  function getEstimatedDuration(text: string) {
    const wordCount = getWordCount(text);

    if (!wordCount) return "0 min";

    const minutes = wordCount / 150;

    if (minutes < 1) {
      return `${Math.max(1, Math.round(minutes * 60))} sec`;
    }

    return `${minutes.toFixed(1)} min`;
  }

  /* =========================
     GENERATE SCRIPT
  ========================= */

  async function generate() {
    if (!topic.trim()) {
      alert("Please enter your video topic.");
      return;
    }

    setLoading(true);

    try {
      const input = `
VIDEO TOPIC:
${topic.trim()}

VIDEO DURATION:
${duration}

LANGUAGE:
${language}

CONTENT TYPE:
${contentType}

TONE / STYLE:
${tone}

TARGET AUDIENCE:
${audience.trim() || "General YouTube audience"}

KEYWORDS:
${keywords.trim() || "None provided"}
`;

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "script",
          input,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Something went wrong");
        return;
      }

      setScript(data.script || "");

      // New script means old generated results are no longer relevant.
      setVisualPlan("");
      setScriptTitles("");

      setEditing(false);
    } catch (error) {
      console.error(error);
      alert("AI Script Generation Failed");
    } finally {
      setLoading(false);
    }
  }

  /* =========================
     GENERATE VISUAL PLAN
  ========================= */

  async function generateVisualPlan() {
    if (!script.trim()) {
      alert("Please generate a script first.");
      return;
    }

    setVisualLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "visual-plan",
          input: script,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to create visual plan.");
        return;
      }

      setVisualPlan(data.visualPlan || "");
    } catch (error) {
      console.error(error);
      alert("AI Visual Plan Generation Failed");
    } finally {
      setVisualLoading(false);
    }
  }

  /* =========================
     GENERATE SEO TITLES
  ========================= */

  async function generateSeoTitles() {
    if (!script.trim()) {
      alert("Please generate a script first.");
      return;
    }

    setTitleLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "script-titles",
          input: script,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to generate SEO titles.");
        return;
      }

      setScriptTitles(data.scriptTitles || "");
    } catch (error) {
      console.error(error);
      alert("AI SEO Title Generation Failed");
    } finally {
      setTitleLoading(false);
    }
  }

  /* =========================
     COPY SCRIPT
  ========================= */

  async function copyScript() {
    if (!script) return;

    try {
      await navigator.clipboard.writeText(script);
      alert("Script copied!");
    } catch (error) {
      console.error(error);
      alert("Failed to copy script.");
    }
  }

  /* =========================
     COPY VISUAL PLAN
  ========================= */

  async function copyVisualPlan() {
    if (!visualPlan) return;

    try {
      await navigator.clipboard.writeText(visualPlan);
      alert("Visual plan copied!");
    } catch (error) {
      console.error(error);
      alert("Failed to copy visual plan.");
    }
  }

  /* =========================
     COPY SEO TITLES
  ========================= */

  async function copyAllTitles() {
    if (!scriptTitles) return;

    try {
      await navigator.clipboard.writeText(scriptTitles);
      alert("SEO titles copied!");
    } catch (error) {
      console.error(error);
      alert("Failed to copy SEO titles.");
    }
  }

  /* =========================
     COPY INDIVIDUAL TITLE
  ========================= */

  async function copyTitle(title: string) {
    try {
      await navigator.clipboard.writeText(title);
      alert("Title copied!");
    } catch (error) {
      console.error(error);
      alert("Failed to copy title.");
    }
  }

  /* =========================
     DOWNLOAD SCRIPT
  ========================= */

  function downloadScript() {
    if (!script) return;

    const fileContent = `${script}

----------------------------------------
Generated with VideoSEOTools
YouTube Script Generator
----------------------------------------
`;

    const blob = new Blob([fileContent], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "youtube-script.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  /* =========================
     DOWNLOAD VISUAL PLAN
  ========================= */

  function downloadVisualPlan() {
    if (!visualPlan) return;

    const fileContent = `${visualPlan}

----------------------------------------
Generated with VideoSEOTools
AI Visual Production Plan
----------------------------------------
`;

    const blob = new Blob([fileContent], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "youtube-visual-plan.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  /* =========================
     DOWNLOAD SEO TITLES
  ========================= */

  function downloadTitles() {
    if (!scriptTitles) return;

    const fileContent = `${scriptTitles}

----------------------------------------
Generated with VideoSEOTools
YouTube SEO Title Generator
----------------------------------------
`;

    const blob = new Blob([fileContent], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "youtube-seo-titles.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  /* =========================
     EDIT MODE
  ========================= */

  function toggleEdit() {
    setEditing((current) => !current);
  }

  const wordCount = getWordCount(script);

  const estimatedDuration = getEstimatedDuration(script);

  return (
    <div className="mx-auto max-w-5xl">
      {/* =====================================================
          GENERATOR CARD
      ===================================================== */}

      <div className="rounded-3xl border border-zinc-800 bg-[#0d1828] p-6 shadow-2xl md:p-8">
        {/* Topic */}

        <div>
          <label className="mb-3 block text-sm font-semibold text-zinc-200">
            Video Topic
          </label>

          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Example: The Ghost Towns of the American Gold Rush"
            rows={3}
            className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-500"
          />
        </div>

        {/* Options */}

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* Duration */}

          <div>
            <label className="mb-3 block text-sm font-semibold text-zinc-200">
              Video Duration
            </label>

            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-cyan-500"
            >
              <option>1 Minute</option>
              <option>3 Minutes</option>
              <option>5 Minutes</option>
              <option>10 Minutes</option>
              <option>15 Minutes</option>
              <option>20 Minutes</option>
            </select>
          </div>

          {/* Language */}

          <div>
            <label className="mb-3 block text-sm font-semibold text-zinc-200">
              Language
            </label>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-cyan-500"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Hinglish</option>
              <option>Gujarati</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>

          {/* Content Type */}

          <div>
            <label className="mb-3 block text-sm font-semibold text-zinc-200">
              Content Type
            </label>

            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-cyan-500"
            >
              <option>Documentary</option>
              <option>Storytelling</option>
              <option>Educational</option>
              <option>Explainer</option>
              <option>News</option>
              <option>Entertainment</option>
              <option>Faceless YouTube</option>
              <option>Podcast</option>
              <option>Review</option>
              <option>Top 10 / Listicle</option>
            </select>
          </div>

          {/* Tone */}

          <div>
            <label className="mb-3 block text-sm font-semibold text-zinc-200">
              Tone / Style
            </label>

            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-cyan-500"
            >
              <option>Cinematic</option>
              <option>Professional</option>
              <option>Emotional</option>
              <option>Suspenseful</option>
              <option>Viral</option>
              <option>Funny</option>
              <option>Inspirational</option>
              <option>Casual</option>
              <option>Serious</option>
            </select>
          </div>
        </div>

        {/* Audience */}

        <div className="mt-6">
          <label className="mb-3 block text-sm font-semibold text-zinc-200">
            Target Audience{" "}
            <span className="font-normal text-zinc-500">
              (Optional)
            </span>
          </label>

          <input
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            placeholder="Example: American history lovers, entrepreneurs, beginners..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none placeholder:text-zinc-500 focus:border-cyan-500"
          />
        </div>

        {/* Keywords */}

        <div className="mt-6">
          <label className="mb-3 block text-sm font-semibold text-zinc-200">
            Keywords{" "}
            <span className="font-normal text-zinc-500">
              (Optional)
            </span>
          </label>

          <input
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Example: Gold Rush, ghost towns, American history"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none placeholder:text-zinc-500 focus:border-cyan-500"
          />
        </div>

        {/* Generate */}

        <button
          onClick={generate}
          disabled={loading}
          className="mt-8 w-full rounded-xl bg-cyan-500 px-8 py-4 text-lg font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "✨ Generating Script..."
            : script
              ? "✨ Generate New Script"
              : "✨ Generate YouTube Script"}
        </button>
      </div>

      {/* =====================================================
          SCRIPT RESULT
      ===================================================== */}

      {script && (
        <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-[#0d1828]">
          {/* Header */}

          <div className="border-b border-zinc-800 p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  AI Generated
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Your YouTube Script
                </h2>
              </div>

              {/* Actions */}

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={generate}
                  disabled={loading}
                  className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400 disabled:opacity-50"
                >
                  {loading ? "Generating..." : "↻ Regenerate"}
                </button>

                <button
                  onClick={toggleEdit}
                  className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
                >
                  {editing ? "✓ Done Editing" : "✏️ Edit"}
                </button>

                <button
                  onClick={copyScript}
                  className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
                >
                  📋 Copy
                </button>

                <button
                  onClick={downloadScript}
                  className="rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
                >
                  📥 Download TXT
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 border-b border-zinc-800 sm:grid-cols-3">
            <div className="border-r border-zinc-800 p-5">
              <p className="text-sm text-zinc-500">
                Word Count
              </p>

              <p className="mt-1 text-xl font-bold text-white">
                {wordCount}
              </p>
            </div>

            <div className="p-5 sm:border-r sm:border-zinc-800">
              <p className="text-sm text-zinc-500">
                Estimated Voice-over
              </p>

              <p className="mt-1 text-xl font-bold text-white">
                {estimatedDuration}
              </p>
            </div>

            <div className="hidden p-5 sm:block">
              <p className="text-sm text-zinc-500">
                Selected Length
              </p>

              <p className="mt-1 text-xl font-bold text-cyan-400">
                {duration}
              </p>
            </div>
          </div>

          {/* Script */}

          <div className="p-6 md:p-8">
            {editing ? (
              <textarea
                value={script}
                onChange={(e) => setScript(e.target.value)}
                className="min-h-[700px] w-full resize-y rounded-2xl border border-cyan-500/40 bg-zinc-950 p-6 text-[15px] leading-8 text-zinc-200 outline-none focus:border-cyan-500 md:text-base"
                spellCheck={false}
              />
            ) : (
              <div className="whitespace-pre-wrap text-[15px] leading-8 text-zinc-200 md:text-base">
                {script}
              </div>
            )}
          </div>

          {/* =================================================
              SEO TITLES
          ================================================= */}

          <div className="border-t border-zinc-800 bg-zinc-950/30 p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  YouTube SEO
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  🎯 SEO-Friendly Title Suggestions
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Generate titles based on your complete script.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {scriptTitles && (
                  <>
                    <button
                      onClick={copyAllTitles}
                      className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
                    >
                      📋 Copy All
                    </button>

                    <button
                      onClick={downloadTitles}
                      className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
                    >
                      📥 Download
                    </button>
                  </>
                )}

                <button
                  onClick={generateSeoTitles}
                  disabled={titleLoading}
                  className="rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {titleLoading
                    ? "🎯 Generating..."
                    : scriptTitles
                      ? "↻ Generate New Titles"
                      : "🎯 Generate SEO Titles"}
                </button>
              </div>
            </div>
          </div>

          {/* =================================================
              SEO TITLE RESULT
          ================================================= */}

          {scriptTitles && (
            <div className="border-t border-zinc-800 p-6 md:p-8">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      AI Title Analysis
                    </p>

                    <h4 className="mt-1 text-lg font-bold">
                      Recommended YouTube Titles
                    </h4>
                  </div>
                </div>

                <div className="whitespace-pre-wrap text-[15px] leading-8 text-zinc-200">
                  {scriptTitles}
                </div>
              </div>

              {/* Copy individual title helper */}

              <div className="mt-5">
                <p className="text-xs leading-5 text-zinc-500">
                  Tip: Use the title with the strongest combination of
                  search relevance and curiosity. SEO scores are AI-generated
                  estimates and do not guarantee rankings or views.
                </p>
              </div>
            </div>
          )}

          {/* =================================================
              VIDEO PRODUCTION TOOLS
          ================================================= */}

          <div className="border-t border-zinc-800 bg-zinc-950/30 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-bold">
                  🎬 Video Production Tools
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Turn your script into a complete visual production plan.
                </p>
              </div>

              <button
                onClick={generateVisualPlan}
                disabled={visualLoading}
                className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {visualLoading
                  ? "🎬 Creating Visual Plan..."
                  : "🎬 Create Visual Plan"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          VISUAL PLAN
      ===================================================== */}

      {visualPlan && (
        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-[#0d1828]">
          {/* Header */}

          <div className="border-b border-zinc-800 p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  AI Production Assistant
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  🎬 Scene-by-Scene Visual Plan
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Visual, editing and sound suggestions for your video.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={copyVisualPlan}
                  className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
                >
                  📋 Copy Plan
                </button>

                <button
                  onClick={downloadVisualPlan}
                  className="rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
                >
                  📥 Download Plan
                </button>
              </div>
            </div>
          </div>

          {/* Content */}

          <div className="p-6 md:p-8">
            <div className="whitespace-pre-wrap text-[15px] leading-8 text-zinc-200 md:text-base">
              {visualPlan}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
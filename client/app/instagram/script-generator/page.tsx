"use client";

import { useState } from "react";

type ScriptResult = {
  title?: string;
  hook?: string;
  script?: string;
  cta?: string;
  caption?: string;
};

const durations = ["15 sec", "30 sec", "45 sec", "60 sec", "90 sec"];

const languages = ["English", "Hindi", "Hinglish"];

const hookStyles = [
  "Viral Hook",
  "Question Hook",
  "Problem Hook",
  "Story Hook",
  "Bold Hook",
];

const visualStyles = [
  "Auto",
  "Talking Head",
  "B-Roll",
  "Cinematic",
];

export default function InstagramScriptGenerator() {
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState("30 sec");
  const [language, setLanguage] = useState("Hinglish");
  const [hookStyle, setHookStyle] = useState("Viral Hook");
  const [visualStyle, setVisualStyle] = useState("Auto");

  const [result, setResult] = useState<ScriptResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function generateScript() {
    if (!topic.trim()) {
      alert("Please enter a topic.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const prompt = `
Create a complete Instagram Reel script.

TOPIC:
${topic.trim()}

DURATION:
${duration}

LANGUAGE:
${language}

HOOK STYLE:
${hookStyle}

VISUAL STYLE:
${visualStyle}

Requirements:
- Create a strong attention-grabbing title.
- Create a powerful first 1-3 second hook.
- Write a complete spoken voiceover script.
- Break the script into scenes according to the selected duration.
- Every scene must include:
  1. VISUAL
  2. VOICEOVER
  3. ON-SCREEN TEXT
- Keep the pacing suitable for Instagram Reels.
- Match the selected language naturally.
- Use the selected hook style.
- Suggest suitable B-roll/camera directions.
- Finish with a strong CTA.
- Also provide a short Instagram caption.
- Do NOT give a short summary.
- Generate the COMPLETE ready-to-record script.

Return the answer in this exact structure:

TITLE:
...

HOOK:
...

SCENE 1:
VISUAL:
...
VOICEOVER:
...
ON-SCREEN TEXT:
...

SCENE 2:
VISUAL:
...
VOICEOVER:
...
ON-SCREEN TEXT:
...

Continue scenes until the selected duration is properly covered.

CTA:
...

CAPTION:
...
`;

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "instagram_script",
          input: prompt,
        }),
      });

      const data = await response.json();

      console.log("Instagram Script Response:", data);

      if (!response.ok) {
        alert(
          data?.error ||
            data?.message ||
            "Script generation failed."
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
        text = data.results.join("\n\n");
      } else if (Array.isArray(data?.result)) {
        text = data.result.join("\n\n");
      }

      if (!text.trim()) {
        alert("AI returned an empty script.");
        return;
      }

      const parsed = parseScript(text);

      setResult(parsed);
    } catch (error) {
      console.error("Instagram Script Error:", error);
      alert("Script Generation Failed");
    } finally {
      setLoading(false);
    }
  }

  function parseScript(text: string): ScriptResult {
    const titleMatch = text.match(
      /TITLE:\s*([\s\S]*?)(?=\n\s*HOOK:|$)/i
    );

    const hookMatch = text.match(
      /HOOK:\s*([\s\S]*?)(?=\n\s*SCENE\s*1:|$)/i
    );

    const ctaMatch = text.match(
      /CTA:\s*([\s\S]*?)(?=\n\s*CAPTION:|$)/i
    );

    const captionMatch = text.match(
      /CAPTION:\s*([\s\S]*)$/i
    );

    const scenesMatch = text.match(
      /SCENE\s*1:[\s\S]*?(?=\n\s*CTA:|$)/i
    );

    return {
      title: titleMatch?.[1]?.trim() || "",
      hook: hookMatch?.[1]?.trim() || "",
      script: scenesMatch?.[0]?.trim() || text.trim(),
      cta: ctaMatch?.[1]?.trim() || "",
      caption: captionMatch?.[1]?.trim() || "",
    };
  }

  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch {
      alert("Unable to copy.");
    }
  }

  return (
    <main className="min-h-screen bg-[#08111f] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-bold text-pink-400">
            Instagram AI Tools
          </span>

          <h1 className="mt-7 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Instagram Script Generator
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Create complete Instagram Reel scripts with hooks,
            scenes, voiceovers, visuals, on-screen text and CTAs.
          </p>
        </div>

        {/* Generator */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 md:p-8">

          {/* Topic */}
          <label className="mb-3 block text-sm font-semibold text-zinc-300">
            What is your Reel about?
          </label>

          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Example: Best Rakhi gift ideas for brother"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none transition focus:border-pink-500"
          />

          {/* Options */}
          <div className="mt-6 grid gap-5 md:grid-cols-2">

            {/* Duration */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                ⏱️ Duration
              </label>

              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-4 text-white outline-none focus:border-pink-500"
              >
                {durations.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* Language */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                🌐 Language
              </label>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-4 text-white outline-none focus:border-pink-500"
              >
                {languages.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* Hook */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                🪝 Hook Style
              </label>

              <select
                value={hookStyle}
                onChange={(e) => setHookStyle(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-4 text-white outline-none focus:border-pink-500"
              >
                {hookStyles.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* Visual */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                🎬 Visual Style
              </label>

              <select
                value={visualStyle}
                onChange={(e) => setVisualStyle(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-4 text-white outline-none focus:border-pink-500"
              >
                {visualStyles.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Generate */}
          <button
            onClick={generateScript}
            disabled={loading}
            className="mt-7 w-full rounded-xl bg-pink-500 px-6 py-4 text-lg font-bold text-white transition hover:bg-pink-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Creating Complete Script..."
              : "🎬 Generate Full Reel Script"}
          </button>

        </div>

        {/* Results */}
        {result && (
          <div className="mx-auto mt-10 max-w-5xl space-y-5">

            {/* Title */}
            {result.title && (
              <ResultCard
                title="📝 TITLE"
                content={result.title}
                onCopy={copyText}
              />
            )}

            {/* Hook */}
            {result.hook && (
              <ResultCard
                title="🪝 HOOK"
                content={result.hook}
                onCopy={copyText}
              />
            )}

            {/* Full Script */}
            {result.script && (
              <ResultCard
                title="🎬 COMPLETE SCRIPT"
                content={result.script}
                onCopy={copyText}
                large
              />
            )}

            {/* CTA */}
            {result.cta && (
              <ResultCard
                title="📢 CTA"
                content={result.cta}
                onCopy={copyText}
              />
            )}

            {/* Caption */}
            {result.caption && (
              <ResultCard
                title="📱 CAPTION"
                content={result.caption}
                onCopy={copyText}
              />
            )}

          </div>
        )}

      </div>
    </main>
  );
}

function ResultCard({
  title,
  content,
  onCopy,
  large = false,
}: {
  title: string;
  content: string;
  onCopy: (text: string) => void;
  large?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-lg font-bold text-pink-400">
          {title}
        </h2>

        <button
          onClick={() => onCopy(content)}
          className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-cyan-400"
        >
          Copy
        </button>
      </div>

      <div
        className={`whitespace-pre-wrap leading-8 text-zinc-200 ${
          large ? "text-base" : "text-lg"
        }`}
      >
        {content}
      </div>

    </div>
  );
}
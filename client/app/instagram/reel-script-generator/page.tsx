"use client";

import { useState } from "react";

type ScriptResult = {
  title?: string;
  hook?: string;
  script?: string;
  cta?: string;
  caption?: string;
};

const durations = [
  "15 sec",
  "30 sec",
  "45 sec",
  "60 sec",
  "90 sec",
];

const languages = [
  "English",
  "Hindi",
  "Hinglish",
];

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

export default function ReelScriptGenerator() {
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState("30 sec");
  const [language, setLanguage] = useState("Hinglish");
  const [hookStyle, setHookStyle] = useState("Viral Hook");
  const [visualStyle, setVisualStyle] = useState("Auto");

  const [result, setResult] = useState<ScriptResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function generateScript() {
    if (!topic.trim()) {
      alert("Please enter a Reel topic.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const prompt = `
Create a complete ready-to-record Instagram Reel script.

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

IMPORTANT REQUIREMENTS:

1. Create a strong and clickable Reel TITLE.
2. Create a powerful first 1-3 second HOOK.
3. Write a COMPLETE spoken VOICEOVER.
4. Divide the Reel into multiple SCENES based on the selected duration.
5. Every scene MUST contain:
   - VISUAL
   - VOICEOVER
   - ON-SCREEN TEXT
6. Give practical camera/B-roll directions.
7. Keep the pacing suitable for Instagram Reels.
8. Match the selected language naturally.
9. Use the selected hook style.
10. Do not give a short summary.
11. Generate enough content to properly cover the COMPLETE selected duration.
12. End with a strong CTA.
13. Provide a short Instagram caption.
14. Make the script ready for recording and editing.

For every scene use this exact format:

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

Continue until the selected duration is properly covered.

Return the answer in exactly this structure:

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

Continue scenes...

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

      console.log("Reel Script Response:", data);

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
      console.error("Reel Script Error:", error);
      alert("Reel Script Generation Failed");
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
    } catch (error) {
      console.error("Copy failed:", error);
      alert("Unable to copy.");
    }
  }

  return (
    <main className="min-h-screen bg-[#08111f] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div className="text-center">

          <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-bold text-pink-400">
            Instagram AI Tools
          </span>

          <h1 className="mt-7 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Reel Script Generator
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Create complete Instagram Reel scripts with powerful hooks,
            scene-by-scene voiceovers, visuals, on-screen text and CTAs.
          </p>

        </div>

        {/* GENERATOR */}

        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 md:p-8">

          <h2 className="mb-6 text-center text-3xl font-bold">
            Create Your Reel Script
          </h2>

          <label className="mb-3 block text-sm font-semibold text-zinc-300">
            What is your Reel about?
          </label>

          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                generateScript();
              }
            }}
            placeholder="Example: Best Rakhi gift ideas for brother"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/20"
          />

          {/* OPTIONS */}

          <div className="mt-6 grid gap-5 md:grid-cols-2">

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

          {/* GENERATE */}

          <button
            onClick={generateScript}
            disabled={loading}
            className="mt-7 w-full rounded-xl bg-pink-500 px-6 py-4 text-lg font-bold text-white transition hover:-translate-y-0.5 hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-500/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Creating Complete Reel Script..."
              : "🎬 Generate Reel Script"}
          </button>

        </div>

        {/* RESULTS */}

        {result && (
          <div className="mx-auto mt-10 max-w-5xl space-y-5">

            {result.title && (
              <ResultCard
                title="📝 REEL TITLE"
                content={result.title}
                onCopy={copyText}
              />
            )}

            {result.hook && (
              <ResultCard
                title="🪝 HOOK"
                content={result.hook}
                onCopy={copyText}
              />
            )}

            {result.script && (
              <ResultCard
                title="🎬 COMPLETE REEL SCRIPT"
                content={result.script}
                onCopy={copyText}
                large
              />
            )}

            {result.cta && (
              <ResultCard
                title="📢 CTA"
                content={result.cta}
                onCopy={copyText}
              />
            )}

            {result.caption && (
              <ResultCard
                title="📱 INSTAGRAM CAPTION"
                content={result.caption}
                onCopy={copyText}
              />
            )}

          </div>
        )}

        {/* INFO SECTION */}

        <section className="mx-auto mt-20 max-w-5xl border-t border-zinc-800 pt-12">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-pink-400">
              Reel Creation Tool
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              Create Reels Faster With AI
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-zinc-400">
              Generate ready-to-record Reel scripts with hooks, visuals,
              voiceovers, on-screen text and calls to action.
            </p>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-6">
              <div className="text-3xl">🪝</div>

              <h3 className="mt-4 text-lg font-bold">
                Strong Hooks
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Start your Reel with attention-grabbing hooks designed
                to keep viewers watching.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-6">
              <div className="text-3xl">🎬</div>

              <h3 className="mt-4 text-lg font-bold">
                Scene-by-Scene
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Get visual directions, voiceovers and on-screen text
                for every scene.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-6">
              <div className="text-3xl">📢</div>

              <h3 className="mt-4 text-lg font-bold">
                Strong CTA
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Finish your Reel with a clear call to action that
                encourages viewers to engage.
              </p>
            </div>

          </div>

        </section>

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
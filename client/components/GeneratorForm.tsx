"use client";

import { useState } from "react";
import { getSeoScore, getCTR } from "@/lib/score";
import PremiumInsights from "@/components/PremiumInsights";

type Props = {
  title: string;
  placeholder: string;
  aiType: string;
};

export default function GeneratorForm({
  title,
  placeholder,
  aiType,
}: Props) {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!topic.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: aiType,
          input: topic,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Something went wrong");
        return;
      }

      setResults(data.results);
    } catch (error) {
      console.error(error);
      alert("AI Generation Failed");
    } finally {
      setLoading(false);
    }
  }

  async function copy(text: string) {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  }

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-8 text-center text-5xl font-bold">
        {title}
      </h1>

      <div className="flex gap-4">
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder={placeholder}
          className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none"
        />

        <button
          onClick={generate}
          disabled={loading}
          className="rounded-xl bg-cyan-500 px-8 font-bold text-black transition hover:bg-cyan-400 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {results.length > 0 && (
        <>
          <div className="mt-10 space-y-4">
            {results.map((item, index) => {
              const seoScore = getSeoScore(item);

              return (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-zinc-700 bg-zinc-900 p-5"
                >
                  <div>
                    <p className="text-lg font-semibold">
                      {item}
                    </p>

                    <p className="mt-2 text-sm text-zinc-400">
                      SEO Score: {seoScore}/100 • CTR: {getCTR(seoScore)}
                    </p>
                  </div>

                  <button
                    onClick={() => copy(item)}
                    className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black transition hover:bg-cyan-400"
                  >
                    Copy
                  </button>
                </div>
              );
            })}
          </div>

          <PremiumInsights />
        </>
      )}
    </div>
  );
}
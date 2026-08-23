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
    if (!topic.trim()) {
      alert("Please provide a topic or prompt.");
      return;
    }

    setLoading(true);
    setResults([]);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: aiType,
          input: topic.trim(),
        }),
      });

      const data = await response.json();

      console.log("AI API Response:", data);

      if (!response.ok) {
        alert(
          data?.error ||
            data?.message ||
            "Something went wrong while generating."
        );
        return;
      }

      /*
       * Make sure results is always an array.
       * This prevents:
       * Cannot read properties of undefined (reading 'length')
       */

      let generatedResults: string[] = [];

      if (Array.isArray(data?.results)) {
        generatedResults = data.results
          .map((item: unknown) => String(item))
          .filter((item: string) => item.trim().length > 0);
      } else if (typeof data?.results === "string") {
        generatedResults = data.results
          .split("\n")
          .map((item: string) => item.trim())
          .filter((item: string) => item.length > 0);
      } else if (Array.isArray(data?.result)) {
        generatedResults = data.result
          .map((item: unknown) => String(item))
          .filter((item: string) => item.trim().length > 0);
      } else if (typeof data?.result === "string") {
        generatedResults = data.result
          .split("\n")
          .map((item: string) => item.trim())
          .filter((item: string) => item.length > 0);
      } else if (typeof data?.content === "string") {
        generatedResults = data.content
          .split("\n")
          .map((item: string) => item.trim())
          .filter((item: string) => item.length > 0);
      }

      if (generatedResults.length === 0) {
        alert(
          "AI returned no results. Please check the Generate API response."
        );
        return;
      }

      setResults(generatedResults);
    } catch (error) {
      console.error("AI Generation Error:", error);
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

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-8 text-center text-5xl font-bold">
        {title}
      </h1>

      <div className="flex gap-4">
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              generate();
            }
          }}
          placeholder={placeholder}
          className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-cyan-500"
        />

        <button
          onClick={generate}
          disabled={loading}
          className="rounded-xl bg-cyan-500 px-8 font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
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
                  key={`${item}-${index}`}
                  className="flex items-center justify-between gap-6 rounded-xl border border-zinc-700 bg-zinc-900 p-5"
                >
                  <div className="min-w-0">
                    <p className="text-lg font-semibold text-white">
                      {item}
                    </p>

                    <p className="mt-2 text-sm text-zinc-400">
                      SEO Score: {seoScore}/100 • CTR:{" "}
                      {getCTR(seoScore)}
                    </p>
                  </div>

                  <button
                    onClick={() => copy(item)}
                    className="shrink-0 rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black transition hover:bg-cyan-400"
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
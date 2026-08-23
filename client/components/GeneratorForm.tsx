"use client";

import { useState } from "react";
import { getSeoScore, getCTR } from "@/lib/score";
import PremiumInsights from "@/components/PremiumInsights";

type Props = {
  title: string;
  placeholder: string;
  aiType?: string;
  type?: string;
  buttonText?: string;
};

export default function GeneratorForm({
  title,
  placeholder,
  aiType,
  type,
  buttonText = "Generate",
}: Props) {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generatorType = aiType || type || "";

  async function generate() {
    if (!topic.trim()) {
      alert("Please provide a topic or prompt.");
      return;
    }

    if (!generatorType) {
      alert("Generator type is missing.");
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
          type: generatorType,
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
        alert("AI returned no results.");
        return;
      }

      setResults(generatedResults);
    } catch (error) {
      console.error("AI Generation Error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "AI Generation Failed"
      );
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
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">
        {title}
      </h1>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              generate();
            }
          }}
          placeholder={placeholder}
          className="h-14 flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 text-white outline-none transition focus:border-cyan-500"
        />

        <button
          onClick={generate}
          disabled={loading}
          className="h-14 rounded-xl bg-cyan-500 px-8 font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Generating..." : buttonText}
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
                  className="flex flex-col gap-4 rounded-xl border border-zinc-700 bg-zinc-900 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="break-words text-lg font-semibold text-white">
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
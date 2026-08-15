import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import ScriptGeneratorForm from "@/components/ScriptGeneratorForm";

export const metadata: Metadata = {
  title: "YouTube Script Generator - Free AI Script Writer",
  description:
    "Generate engaging YouTube video scripts with AI. Create hooks, introductions, structured sections, conclusions and calls to action for your YouTube videos.",
  keywords: [
    "YouTube Script Generator",
    "AI YouTube Script Generator",
    "YouTube Script Writer",
    "AI Script Generator",
    "YouTube Video Script Generator",
    "Free YouTube Script Generator",
    "YouTube Video Script Writer",
    "YouTube Script AI",
  ],
  alternates: {
    canonical: "https://videoseotools.com/youtube/script-generator",
  },
  openGraph: {
    title: "YouTube Script Generator - Free AI Script Writer",
    description:
      "Create engaging and structured YouTube video scripts with AI.",
    url: "https://videoseotools.com/youtube/script-generator",
    siteName: "VideoSEOTools",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pb-10 pt-16 md:pb-14 md:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            ✨ Free AI YouTube Tool
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            YouTube Script Generator
            <br />

            <span className="text-cyan-400">
              Create Engaging Scripts with AI
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Turn your video idea into a structured YouTube script with an
            engaging hook, introduction, main sections, conclusion and call to
            action.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="px-6 pb-20">
        <ScriptGeneratorForm />
      </section>

      {/* About */}
      <section className="border-y border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            What Is a YouTube Script Generator?
          </h2>

          <div className="mt-7 space-y-6 text-base leading-8 text-zinc-300">
            <p>
              A YouTube Script Generator is an AI-powered writing tool that
              helps creators turn a video topic or idea into a structured
              script.
            </p>

            <p>
              Instead of starting from a blank page, you can choose your video
              duration, language, content type and tone to generate a script
              designed around your content.
            </p>

            <p>
              The generated script can be used as a starting point for
              voice-overs, faceless videos, documentaries, educational
              content, storytelling videos and other YouTube formats.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Simple Process
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            How to Generate a YouTube Script
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-zinc-400">
            Create your next video script in three simple steps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              1
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Enter Your Video Topic
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Tell the AI what your YouTube video will be about and optionally
              add your target audience and important keywords.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              2
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Choose Your Script Style
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Select the video duration, language, content type and tone you
              want for your script.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              3
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Generate Your Script
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Generate your script, review the result and copy it for your
              video production workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            Create Better YouTube Scripts Faster
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              [
                "Powerful Video Hooks",
                "Generate an opening designed to quickly introduce the idea and capture viewer attention.",
              ],
              [
                "Structured Scripts",
                "Organize your video into a hook, introduction, main sections, conclusion and call to action.",
              ],
              [
                "Multiple Content Styles",
                "Create scripts for documentaries, educational videos, storytelling, reviews, explainers and more.",
              ],
              [
                "Custom Tone & Language",
                "Choose the language and writing style that better fits your video and intended audience.",
              ],
            ].map(([heading, description]) => (
              <div
                key={heading}
                className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6"
              >
                <h3 className="text-xl font-bold">{heading}</h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            YouTube Script Generator FAQs
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
            <summary className="cursor-pointer text-lg font-semibold">
              Is the YouTube Script Generator free?
            </summary>

            <p className="mt-4 leading-7 text-zinc-400">
              The YouTube Script Generator on VideoSEOTools is currently
              available as a free AI tool.
            </p>
          </details>

          <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
            <summary className="cursor-pointer text-lg font-semibold">
              What types of YouTube scripts can I generate?
            </summary>

            <p className="mt-4 leading-7 text-zinc-400">
              You can create scripts for documentaries, storytelling videos,
              educational content, explainers, entertainment, faceless videos,
              reviews and other common YouTube formats.
            </p>
          </details>

          <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
            <summary className="cursor-pointer text-lg font-semibold">
              Can I choose the length of my YouTube script?
            </summary>

            <p className="mt-4 leading-7 text-zinc-400">
              Yes. You can select a target video duration before generating
              your script. The generated length is an estimate and can vary
              depending on the topic and writing style.
            </p>
          </details>

          <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
            <summary className="cursor-pointer text-lg font-semibold">
              Should I edit an AI-generated script?
            </summary>

            <p className="mt-4 leading-7 text-zinc-400">
              Yes. Review generated scripts for accuracy, tone and relevance,
              and customize them to match your own voice, research and video.
            </p>
          </details>
        </div>
      </section>

      {/* Related Tools */}
      <section className="border-t border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              More YouTube Tools
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
              Continue creating and optimizing your YouTube content.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Link
              href="/youtube/title-generator"
              className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:border-cyan-500/50"
            >
              <h3 className="font-bold">YouTube Title Generator</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Generate engaging YouTube title ideas.
              </p>
            </Link>

            <Link
              href="/youtube/description-generator"
              className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:border-cyan-500/50"
            >
              <h3 className="font-bold">
                YouTube Description Generator
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Create descriptions for your YouTube videos.
              </p>
            </Link>

            <Link
              href="/youtube/keyword-generator"
              className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:border-cyan-500/50"
            >
              <h3 className="font-bold">YouTube Keyword Generator</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Discover relevant keyword ideas for your videos.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
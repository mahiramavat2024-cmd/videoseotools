import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import GeneratorForm from "@/components/GeneratorForm";

export const metadata: Metadata = {
  title: "YouTube Title Generator - Free AI Title Generator",
  description:
    "Generate catchy and SEO-friendly YouTube titles with our free AI YouTube Title Generator. Create engaging title ideas for videos, Shorts, tutorials, reviews and more.",
  keywords: [
    "YouTube Title Generator",
    "YouTube Title Generator Free",
    "AI YouTube Title Generator",
    "YouTube Title Maker",
    "YouTube SEO Title Generator",
    "YouTube Title Ideas",
  ],
  alternates: {
    canonical: "https://videoseotools.com/youtube/title-generator",
  },
  openGraph: {
    title: "YouTube Title Generator - Free AI Title Generator",
    description:
      "Generate catchy and SEO-friendly YouTube titles with our free AI YouTube Title Generator.",
    url: "https://videoseotools.com/youtube/title-generator",
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
            🎬 Free AI YouTube SEO Tool
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            YouTube Title Generator
            <br />
            <span className="text-cyan-400">
              Create Better Titles with AI
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Generate catchy, relevant, and SEO-friendly YouTube titles with
            our free AI YouTube Title Generator. Enter your video topic and
            get title ideas designed to help you present your content clearly
            and attract the right viewers.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <GeneratorForm
            aiType="title"
            title="YouTube Title Generator"
            placeholder="Example: iPhone 18 Review"
          />
        </div>
      </section>

      {/* About the tool */}
      <section className="border-y border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            What Is a YouTube Title Generator?
          </h2>

          <div className="mt-7 space-y-6 text-base leading-8 text-zinc-300">
            <p>
              A YouTube Title Generator helps creators come up with title
              ideas for their videos. Instead of starting with a blank page,
              you can enter your topic and use AI-generated suggestions as a
              starting point for your next video title.
            </p>

            <p>
              Your title should clearly communicate what your video is about
              and give viewers a reason to learn more. The best title depends
              on your actual content, audience, and the search intent behind
              the topic.
            </p>

            <p>
              VideoSEOTools helps you generate multiple YouTube title ideas
              quickly so you can compare different approaches and choose the
              one that best represents your video.
            </p>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Simple Process
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            How to Use the YouTube Title Generator
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-zinc-400">
            Generate YouTube title ideas in a few simple steps.
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
              Enter the main topic, subject, or idea of your YouTube video.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              2
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Generate Title Ideas
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Let the AI generate multiple title ideas based on your topic.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              3
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Choose and Improve
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Review the suggestions and adapt your favorite title to match
              your video and audience.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            Why Use an AI YouTube Title Generator?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-xl font-bold">
                Generate Multiple Ideas
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Get several title concepts from one video topic instead of
                spending time brainstorming from scratch.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-xl font-bold">
                Save Time
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Quickly create a starting list of titles that you can review,
                edit, and customize for your audience.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-xl font-bold">
                Focus on Your Topic
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Generate suggestions around the specific subject of your
                video rather than using generic title ideas.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-xl font-bold">
                Useful for Different Content
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Use title ideas for tutorials, reviews, educational videos,
                entertainment, gaming, podcasts, and other YouTube content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Title tips */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">
          YouTube Title Tips
        </h2>

        <div className="mt-8 space-y-4">
          <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5">
            <h3 className="font-bold">
              Keep the title relevant to your video
            </h3>

            <p className="mt-2 leading-7 text-zinc-400">
              Your title should accurately describe the content viewers will
              find in the video.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5">
            <h3 className="font-bold">
              Put important information early
            </h3>

            <p className="mt-2 leading-7 text-zinc-400">
              Place the main topic or important phrase where it remains easy
              for viewers to understand.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5">
            <h3 className="font-bold">
              Write for people first
            </h3>

            <p className="mt-2 leading-7 text-zinc-400">
              Avoid stuffing unrelated keywords into your title. Make the
              wording natural and useful to your intended audience.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5">
            <h3 className="font-bold">
              Test different approaches
            </h3>

            <p className="mt-2 leading-7 text-zinc-400">
              Generate several ideas and compare different ways of presenting
              the same topic before choosing your final title.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              YouTube Title Generator FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                What is a YouTube Title Generator?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                A YouTube Title Generator creates title ideas based on the
                topic or subject of your video. It can help creators
                brainstorm different ways to present their content.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Is this YouTube Title Generator free?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                Yes. The YouTube Title Generator on VideoSEOTools is currently
                available as a free tool.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Can AI-generated titles improve my YouTube SEO?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                AI can help you brainstorm relevant and descriptive title
                ideas, but no title generator can guarantee higher rankings or
                views. Your final title should accurately represent the video
                and match your audience.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                How should I choose the best generated title?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                Choose a title that accurately describes your video, clearly
                communicates the main topic, is easy to understand, and gives
                your intended audience a useful reason to watch.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                What other YouTube SEO tools can I use?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                After creating your title, you can use the{" "}
                <Link
                  href="/youtube/description-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  YouTube Description Generator
                </Link>
                ,{" "}
                <Link
                  href="/youtube/tags-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  YouTube Tags Generator
                </Link>
                , and{" "}
                <Link
                  href="/youtube/hashtag-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  YouTube Hashtag Generator
                </Link>
                .
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            More Free YouTube SEO Tools
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
            Continue optimizing your YouTube content with these free tools.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Link
            href="/youtube/description-generator"
            className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:border-cyan-500/50"
          >
            <h3 className="font-bold">
              YouTube Description Generator
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Generate SEO-friendly video descriptions.
            </p>
          </Link>

          <Link
            href="/youtube/tags-generator"
            className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:border-cyan-500/50"
          >
            <h3 className="font-bold">
              YouTube Tags Generator
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Generate relevant tags for your videos.
            </p>
          </Link>

          <Link
            href="/youtube/hashtag-generator"
            className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:border-cyan-500/50"
          >
            <h3 className="font-bold">
              YouTube Hashtag Generator
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Generate relevant hashtags for YouTube content.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
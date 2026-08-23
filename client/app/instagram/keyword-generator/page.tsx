import type { Metadata } from "next";
import GeneratorForm from "@/components/GeneratorForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instagram Keyword Generator – Free Instagram SEO Keywords | VidNova",
  description:
    "Generate relevant Instagram keywords and search terms with AI. Find keyword ideas for Instagram Reels, posts and content with VidNova.",
  keywords: [
    "instagram keyword generator",
    "instagram keywords",
    "instagram seo keywords",
    "instagram keyword research",
    "instagram reel keywords",
    "instagram seo tool",
    "free instagram keyword generator",
  ],
  alternates: {
    canonical: "https://vidnova.com/instagram/keyword-generator",
  },
  openGraph: {
    title: "Instagram Keyword Generator – Free Instagram SEO Keywords | VidNova",
    description:
      "Generate relevant Instagram keywords and SEO search terms for your Instagram content with VidNova.",
    url: "https://vidnova.com/instagram/keyword-generator",
    siteName: "VidNova",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InstagramKeywordGeneratorPage() {
  return (
    <main className="min-h-screen bg-[#08111f] text-white">

      {/* HERO */}
      <section className="px-6 pb-12 pt-16 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-5xl text-center">

          <span className="inline-flex items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-400">
            📸 Instagram SEO Tool
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Instagram Keyword Generator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Generate relevant Instagram keywords and search terms with AI.
            Find keyword ideas for Reels, posts, niches and content topics.
          </p>

        </div>
      </section>

      {/* GENERATOR */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-[#0a1424] p-6 shadow-2xl md:p-10">

          <GeneratorForm
            title="Find Instagram Keywords"
            placeholder="Enter your Instagram topic or niche..."
            aiType="instagram-keyword"
          />

        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-zinc-800/70 bg-[#0a1424] px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-pink-400">
              Instagram SEO
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Find Better Instagram Keywords
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
              Use relevant keyword ideas to plan Instagram Reels,
              posts and content around topics your audience cares about.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
              <div className="text-3xl">🔎</div>
              <h3 className="mt-5 text-xl font-bold">
                Keyword Ideas
              </h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Generate topic-specific keyword ideas for your Instagram
                content.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
              <div className="text-3xl">📱</div>
              <h3 className="mt-5 text-xl font-bold">
                Reels & Posts
              </h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Find keywords that can help you plan Reels, posts and
                content ideas.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
              <div className="text-3xl">⚡</div>
              <h3 className="mt-5 text-xl font-bold">
                AI Powered
              </h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Generate multiple keyword suggestions quickly using
                VidNova AI tools.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW TO */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">

          <h2 className="text-center text-3xl font-bold md:text-4xl">
            How to Use the Instagram Keyword Generator
          </h2>

          <div className="mt-10 space-y-5">

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-lg font-bold">
                1. Enter Your Instagram Topic
              </h3>
              <p className="mt-2 leading-7 text-zinc-400">
                Enter your Instagram niche, Reel topic or content idea
                into the generator.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-lg font-bold">
                2. Generate Keywords
              </h3>
              <p className="mt-2 leading-7 text-zinc-400">
                Click Generate and let VidNova create relevant keyword
                suggestions.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-lg font-bold">
                3. Use Relevant Keywords
              </h3>
              <p className="mt-2 leading-7 text-zinc-400">
                Review the suggestions and use the most relevant ideas
                when planning your Instagram content.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="border-t border-zinc-800/70 bg-[#0a1424] px-6 py-20">
        <div className="mx-auto max-w-4xl">

          <h2 className="text-3xl font-bold md:text-4xl">
            Free Instagram Keyword Generator
          </h2>

          <div className="mt-7 space-y-6 leading-8 text-zinc-400">

            <p>
              VidNova Instagram Keyword Generator helps creators discover
              relevant keywords for Instagram Reels, posts and content
              planning. Enter a topic or niche to generate keyword ideas
              that are related to your content.
            </p>

            <p>
              Relevant keywords can help creators understand how to
              describe their content more clearly and organize their
              content strategy around specific topics.
            </p>

            <p>
              Use the generated suggestions as ideas rather than relying
              on keyword stuffing. Your keywords should accurately match
              the content you publish.
            </p>

          </div>
        </div>
      </section>

      {/* RELATED TOOLS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-pink-400">
              More Instagram Tools
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Grow Your Instagram Content
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Link
              href="/instagram/caption-generator"
              className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:-translate-y-1 hover:border-pink-500/50"
            >
              <div className="text-2xl">✍️</div>
              <h3 className="mt-3 font-bold">
                Caption Generator
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Create Instagram captions with AI.
              </p>
            </Link>

            <Link
              href="/instagram/tags-generator"
              className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:-translate-y-1 hover:border-pink-500/50"
            >
              <div className="text-2xl">🏷️</div>
              <h3 className="mt-3 font-bold">
                Tags Generator
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Generate relevant Instagram tags.
              </p>
            </Link>

            <Link
              href="/instagram/script-generator"
              className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:-translate-y-1 hover:border-pink-500/50"
            >
              <div className="text-2xl">🎬</div>
              <h3 className="mt-3 font-bold">
                Script Generator
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Create scripts for Instagram Reels.
              </p>
            </Link>

            <Link
              href="/instagram/seo-title-generator"
              className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:-translate-y-1 hover:border-pink-500/50"
            >
              <div className="text-2xl">🚀</div>
              <h3 className="mt-3 font-bold">
                SEO Title Generator
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Generate engaging Instagram titles.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-800/70 bg-[#0a1424] px-6 py-20">
        <div className="mx-auto max-w-4xl">

          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-4">

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer font-bold">
                What is an Instagram Keyword Generator?
              </summary>
              <p className="mt-4 leading-7 text-zinc-400">
                An Instagram Keyword Generator helps creators discover
                relevant keyword ideas based on an Instagram topic,
                niche or content idea.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer font-bold">
                Is the Instagram Keyword Generator free?
              </summary>
              <p className="mt-4 leading-7 text-zinc-400">
                VidNova provides this tool as part of its creator tools.
                Availability may depend on the site's usage limits.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer font-bold">
                Can keywords guarantee Instagram growth?
              </summary>
              <p className="mt-4 leading-7 text-zinc-400">
                No. Keywords are only one part of a content strategy.
                Content quality, audience interest, consistency and
                viewer engagement also matter.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer font-bold">
                Can I use these keywords for Instagram Reels?
              </summary>
              <p className="mt-4 leading-7 text-zinc-400">
                Yes. You can use relevant keyword ideas when planning
                Instagram Reels and other types of Instagram content.
              </p>
            </details>

          </div>
        </div>
      </section>

      {/* BACK HOME */}
      <section className="border-t border-zinc-800/70 bg-[#0a1424] px-6 py-14">
        <div className="text-center">

          <h2 className="text-2xl font-bold">
            Ready to Create Better Instagram Content?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-zinc-400">
            Explore more VidNova tools for Instagram creators.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-xl bg-cyan-500 px-7 py-3 font-bold text-black transition hover:bg-cyan-400"
          >
            ← Back to Home
          </Link>

        </div>
      </section>

    </main>
  );
}
import type { Metadata } from "next";
import GeneratorForm from "@/components/GeneratorForm";

export const metadata: Metadata = {
  title: "Instagram Tags Generator – Generate Instagram Tags | VidNova",
  description:
    "Generate relevant Instagram tags and hashtags with VidNova. Find broad, niche and targeted tags for Instagram Reels and posts.",
  keywords: [
    "instagram tags generator",
    "instagram hashtag generator",
    "instagram tags",
    "instagram hashtags",
    "instagram reel tags",
    "instagram hashtag generator free",
    "instagram seo tags",
  ],
  alternates: {
    canonical: "https://www.videoseotools.com/instagram/tags-generator",
  },
  openGraph: {
    title: "Instagram Tags Generator | VidNova",
    description:
      "Generate relevant Instagram tags and hashtags for Reels and posts with VidNova.",
    url: "https://www.videoseotools.com/instagram/tags-generator",
    siteName: "VidNova",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InstagramTagsGeneratorPage() {
  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      {/* HERO */}
      <section className="px-6 pb-16 pt-16 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-400">
            Instagram SEO Tool
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Instagram Tags Generator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Generate relevant Instagram tags and hashtags with AI.
            Find broad, niche and targeted tags to improve the
            discoverability of your Instagram Reels and posts.
          </p>
        </div>
      </section>

      {/* GENERATOR */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <GeneratorForm
            type="instagram-tags"
            title="Generate Instagram Tags"
            placeholder="Enter your Instagram topic..."
            buttonText="Generate Tags"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-zinc-800/70 bg-[#0a1424] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-pink-400">
              Instagram SEO
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Find Better Instagram Tags
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
              Discover relevant tags for your Instagram content
              without manually searching for hashtags.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
              <div className="text-3xl">🏷️</div>

              <h3 className="mt-5 text-xl font-bold">
                Relevant Tags
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Generate tags directly related to your content
                topic and audience.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
              <div className="text-3xl">🎯</div>

              <h3 className="mt-5 text-xl font-bold">
                Niche Discovery
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Find broad, niche and specific tags to create a
                more targeted hashtag strategy.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
              <div className="text-3xl">⚡</div>

              <h3 className="mt-5 text-xl font-bold">
                AI Powered
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Get tag suggestions instantly using VidNova's
                AI content generation system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            How to Generate Instagram Tags
          </h2>

          <div className="mt-10 space-y-5">
            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-lg font-bold">
                1. Enter Your Topic
              </h3>

              <p className="mt-2 leading-7 text-zinc-400">
                Enter the topic, niche, product or content idea
                for which you want Instagram tags.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-lg font-bold">
                2. Generate Tags
              </h3>

              <p className="mt-2 leading-7 text-zinc-400">
                Click the Generate Tags button and let VidNova
                create relevant Instagram tags.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-lg font-bold">
                3. Use the Best Tags
              </h3>

              <p className="mt-2 leading-7 text-zinc-400">
                Review the generated suggestions and select the
                tags that best match your content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="border-t border-zinc-800/70 bg-[#0a1424] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Free Instagram Tags Generator
          </h2>

          <div className="mt-7 space-y-6 leading-8 text-zinc-400">
            <p>
              VidNova Instagram Tags Generator helps creators
              discover relevant tags for Instagram Reels, posts,
              products and other types of content.
            </p>

            <p>
              Instead of manually searching through hashtags,
              enter your topic and generate a list of relevant
              Instagram tags. The tool can suggest broad, niche
              and specific tags based on your content.
            </p>

            <p>
              For better results, enter a specific topic such as
              Indian street food, travel photography, fitness
              workouts, fashion, technology or a product niche.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-4">
            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer font-bold">
                What does the Instagram Tags Generator do?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                It generates relevant Instagram tags and
                hashtags based on the topic you enter.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer font-bold">
                Is the Instagram Tags Generator free?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                VidNova provides the tool as a free AI-powered
                generator, subject to service availability and
                usage limits.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer font-bold">
                Can I use the tags for Instagram Reels?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                Yes. The generated tags can be used when planning
                Instagram Reels and other Instagram content.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer font-bold">
                What topics can I enter?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                You can enter topics from different niches such
                as travel, food, fitness, fashion, technology,
                business, entertainment and more.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-zinc-800/70 bg-[#0a1424] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Create Better Instagram Content
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
            Generate relevant Instagram tags and discover more
            tools to improve your social media content.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex rounded-xl bg-cyan-500 px-7 py-3 font-bold text-black transition hover:bg-cyan-400"
          >
            ← Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "YouTube Growth & SEO Guides | VideoSEOTools",
  description:
    "Learn how to grow a YouTube channel, get more views and subscribers, find keywords, improve titles, thumbnails and YouTube SEO with practical free guides.",
  keywords: [
    "YouTube growth",
    "YouTube growth tips",
    "how to grow a YouTube channel",
    "YouTube SEO",
    "YouTube SEO tips",
    "how to get more YouTube views",
    "how to get more YouTube subscribers",
    "YouTube keyword research",
    "YouTube content strategy",
    "free YouTube SEO tools",
  ],
  alternates: {
    canonical: "https://videoseotools.com/blog/youtube",
  },
  openGraph: {
    title: "YouTube Growth & SEO Guides | VideoSEOTools",
    description:
      "Practical YouTube growth, SEO, keyword research and content strategy guides for creators.",
    url: "https://videoseotools.com/blog/youtube",
    type: "website",
  },
};

const guideTopics = [
  {
    icon: "🔎",
    title: "YouTube SEO",
    description:
      "Learn how keywords, titles, descriptions and content optimization can help people discover your videos.",
  },
  {
    icon: "📈",
    title: "Channel Growth",
    description:
      "Practical strategies for getting more views, subscribers and returning viewers.",
  },
  {
    icon: "💡",
    title: "Content Ideas",
    description:
      "Find better video topics and build a consistent content strategy around your audience.",
  },
];

const freeTools = [
  {
    icon: "🎬",
    title: "YouTube Title Generator",
    description: "Create engaging and SEO-friendly YouTube title ideas.",
    href: "/youtube/title-generator",
  },
  {
    icon: "📝",
    title: "YouTube Description Generator",
    description: "Generate optimized descriptions for your videos.",
    href: "/youtube/description-generator",
  },
  {
    icon: "🏷️",
    title: "YouTube Tags Generator",
    description: "Generate relevant tags for your YouTube videos.",
    href: "/youtube/tags-generator",
  },
  {
    icon: "#️⃣",
    title: "YouTube Hashtag Generator",
    description: "Find relevant hashtag ideas for your content.",
    href: "/youtube/hashtag-generator",
  },
];

export default function YouTubeBlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pb-20 pt-20">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="mb-8">
              <Link
                href="/blog"
                className="text-sm font-semibold text-zinc-500 transition hover:text-cyan-400"
              >
                ← Creator Growth Hub
              </Link>
            </div>

            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-bold text-red-400">
                ▶ YOUTUBE GROWTH & SEO
              </span>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
                YouTube Growth
                <br />
                <span className="text-cyan-400">& SEO Guides</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                Learn how to grow a YouTube channel, get more views and
                subscribers, find better keywords and create content that
                people want to watch.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/blog/how-to-grow-a-youtube-channel"
                className="rounded-xl bg-cyan-500 px-7 py-4 font-bold text-black transition hover:bg-cyan-400"
              >
                Read Growth Guide →
              </Link>

              <Link
                href="/youtube/title-generator"
                className="rounded-xl border border-zinc-700 px-7 py-4 font-bold transition hover:border-cyan-500/50 hover:bg-zinc-900"
              >
                Try Free YouTube Tools
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        <section className="px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                Featured YouTube Guide
              </p>

              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Start Here If You&apos;re Building a Channel
              </h2>
            </div>

            <Link
              href="/blog/how-to-grow-a-youtube-channel"
              className="group block overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <div className="grid md:grid-cols-2">
                {/* VISUAL */}
                <div className="relative min-h-[350px] overflow-hidden bg-gradient-to-br from-red-600/20 via-zinc-950 to-cyan-500/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_55%)]" />

                  <div className="relative flex h-full min-h-[350px] items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl border border-red-400/30 bg-red-500/10 text-6xl shadow-2xl transition duration-300 group-hover:scale-110">
                        ▶
                      </div>

                      <div className="mt-7 text-sm font-bold tracking-[0.25em] text-red-400">
                        YOUTUBE GROWTH
                      </div>

                      <div className="mt-2 text-sm text-zinc-500">
                        SEO · CONTENT · ANALYTICS
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <span className="text-sm font-bold text-cyan-400">
                    COMPLETE BEGINNER&apos;S GUIDE
                  </span>

                  <h3 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                    How to Grow a YouTube Channel in 2026
                  </h3>

                  <p className="mt-5 leading-8 text-zinc-400">
                    Learn YouTube SEO, keyword research, video ideas, titles,
                    thumbnails, audience retention, analytics and practical
                    channel growth strategies.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                      YouTube SEO
                    </span>

                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                      Keywords
                    </span>

                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                      Views
                    </span>

                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                      Subscribers
                    </span>
                  </div>

                  <span className="mt-8 font-bold text-cyan-400">
                    Read Complete Guide →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* TOPICS */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                What You&apos;ll Learn
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Everything You Need to Grow on YouTube
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
                Explore practical topics covering YouTube SEO, content
                strategy and channel growth.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {guideTopics.map((topic) => (
                <div
                  key={topic.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 transition hover:border-cyan-500/30"
                >
                  <div className="text-4xl">{topic.icon}</div>

                  <h3 className="mt-6 text-xl font-bold">
                    {topic.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <section className="border-y border-zinc-800/70 bg-zinc-950/30 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                  Latest Guide
                </p>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  YouTube Growth Articles
                </h2>
              </div>

              <span className="text-sm text-zinc-500">
                1 complete guide available
              </span>
            </div>

            <div className="mt-10">
              <Link
                href="/blog/how-to-grow-a-youtube-channel"
                className="group block rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 transition hover:border-cyan-500/40"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-3xl">
                    <span className="text-sm font-bold text-cyan-400">
                      YOUTUBE GROWTH
                    </span>

                    <h3 className="mt-3 text-2xl font-bold transition group-hover:text-cyan-400">
                      How to Grow a YouTube Channel in 2026: Complete
                      Beginner&apos;s Guide
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-400">
                      A practical guide covering YouTube SEO, keyword
                      research, titles, thumbnails, audience retention,
                      analytics and a 30-day growth plan.
                    </p>
                  </div>

                  <div className="shrink-0 text-lg font-bold text-cyan-400">
                    Read →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FREE TOOLS */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-400">
                🆓 100% FREE TOOLS
              </span>

              <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                Create Better YouTube Content
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
                Put the strategies from our guides into action with free
                YouTube SEO and content tools.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {freeTools.map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
                      {tool.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold group-hover:text-cyan-400">
                        {tool.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {tool.description}
                      </p>

                      <p className="mt-4 text-sm font-bold text-cyan-400">
                        Use Free Tool →
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* KEYWORD CTA */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/5 p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                  YouTube SEO
                </p>

                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                  Find Better Keywords for Your Videos
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                  Discover relevant keyword ideas and use them to plan better
                  YouTube content.
                </p>
              </div>

              <Link
                href="/youtube/keyword-generator"
                className="rounded-xl bg-cyan-500 px-7 py-4 text-center font-bold text-black transition hover:bg-cyan-400"
              >
                Try Free Keyword Tool →
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 text-center md:p-14">
            <div className="text-4xl">🚀</div>

            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
              Ready to Grow Your YouTube Channel?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
              Read our guides, use the free tools and build a smarter YouTube
              content strategy.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/blog/how-to-grow-a-youtube-channel"
                className="rounded-xl bg-cyan-500 px-7 py-4 font-bold text-black transition hover:bg-cyan-400"
              >
                Read Growth Guide
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-zinc-700 px-7 py-4 font-bold transition hover:bg-zinc-800"
              >
                Explore All Free Tools
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
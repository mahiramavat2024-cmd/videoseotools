import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Instagram Growth & SEO Guides | VideoSEOTools",
  description:
    "Learn how to grow on Instagram with Reels, Instagram SEO, keywords, hashtags, content strategy, followers and engagement tips.",
  keywords: [
    "Instagram growth",
    "Instagram growth tips",
    "how to grow on Instagram",
    "Instagram SEO",
    "Instagram Reels growth",
    "how to get more Instagram followers",
    "how to get more Instagram views",
    "Instagram hashtags",
    "Instagram content strategy",
    "free Instagram tools",
  ],
  alternates: {
    canonical: "https://videoseotools.com/blog/instagram",
  },
  openGraph: {
    title: "Instagram Growth & SEO Guides | VideoSEOTools",
    description:
      "Practical Instagram growth, Reels, SEO and content strategy guides for creators.",
    url: "https://videoseotools.com/blog/instagram",
    type: "website",
  },
};

const topics = [
  {
    icon: "📈",
    title: "Instagram Growth",
    description:
      "Learn practical strategies to grow your Instagram audience, reach and engagement.",
  },
  {
    icon: "🎬",
    title: "Instagram Reels",
    description:
      "Learn how to create better Reels, improve retention and reach more viewers.",
  },
  {
    icon: "🔎",
    title: "Instagram SEO",
    description:
      "Understand keywords, captions, hashtags and discoverability on Instagram.",
  },
];

const tools = [
  {
    icon: "💡",
    title: "Instagram Content Ideas",
    description:
      "Generate ideas for engaging Instagram content and Reels.",
    href: "/",
  },
  {
    icon: "#️⃣",
    title: "Instagram Hashtag Ideas",
    description:
      "Find relevant hashtag ideas for your Instagram content.",
    href: "/",
  },
];

export default function InstagramBlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pb-20 pt-20">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <Link
              href="/blog"
              className="text-sm font-semibold text-zinc-500 transition hover:text-cyan-400"
            >
              ← Creator Growth Hub
            </Link>

            <div className="mt-8 max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-bold text-pink-400">
                ◎ INSTAGRAM GROWTH & SEO
              </span>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
                Instagram Growth
                <br />
                <span className="text-cyan-400">& SEO Guides</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                Learn how to grow on Instagram, get more followers and views,
                create better Reels and improve your Instagram SEO.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/blog/instagram/how-to-grow-on-instagram"
                className="rounded-xl bg-cyan-500 px-7 py-4 font-bold text-black transition hover:bg-cyan-400"
              >
                Read Growth Guide →
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-zinc-700 px-7 py-4 font-bold transition hover:border-cyan-500/50 hover:bg-zinc-900"
              >
                Explore Free Tools
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section className="px-6">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              Featured Instagram Guide
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Learn How to Grow on Instagram
            </h2>

            <Link
              href="/blog/instagram/how-to-grow-on-instagram"
              className="group mt-8 block overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70 transition hover:border-cyan-500/40"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[350px] bg-gradient-to-br from-pink-500/20 via-purple-950/40 to-cyan-500/10">
                  <div className="flex h-full min-h-[350px] items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl border border-pink-400/30 bg-pink-500/10 text-6xl transition group-hover:scale-110">
                        ◎
                      </div>

                      <div className="mt-7 text-sm font-bold tracking-[0.25em] text-pink-400">
                        INSTAGRAM GROWTH
                      </div>

                      <div className="mt-2 text-sm text-zinc-500">
                        REELS · SEO · FOLLOWERS
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12">
                  <span className="text-sm font-bold text-cyan-400">
                    COMPLETE BEGINNER&apos;S GUIDE
                  </span>

                  <h3 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                    How to Grow on Instagram in 2026
                  </h3>

                  <p className="mt-5 leading-8 text-zinc-400">
                    Learn Instagram SEO, Reels strategy, content ideas,
                    hashtags, engagement and practical methods to grow your
                    audience.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                      Instagram SEO
                    </span>

                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                      Reels
                    </span>

                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                      Followers
                    </span>

                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                      Growth
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
                Everything You Need to Grow on Instagram
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
                Practical guides covering Instagram growth, Reels and search
                optimization.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {topics.map((topic) => (
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

        {/* ARTICLES */}
        <section className="border-y border-zinc-800/70 bg-zinc-950/30 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              Instagram Growth Articles
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Latest Instagram Guides
            </h2>

            <div className="mt-10">
              <Link
                href="/blog/instagram/how-to-grow-on-instagram"
                className="group block rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 transition hover:border-cyan-500/40"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-3xl">
                    <span className="text-sm font-bold text-cyan-400">
                      INSTAGRAM GROWTH
                    </span>

                    <h3 className="mt-3 text-2xl font-bold group-hover:text-cyan-400">
                      How to Grow on Instagram in 2026: Complete Beginner&apos;s
                      Guide
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-400">
                      Learn how to grow Instagram followers, increase Reels
                      views, improve engagement and use Instagram SEO.
                    </p>
                  </div>

                  <span className="shrink-0 font-bold text-cyan-400">
                    Read →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-400">
                🆓 FREE CREATOR TOOLS
              </span>

              <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                Create Better Instagram Content
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                Use free creator tools to turn your Instagram strategy into
                content.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {tools.map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
                      {tool.icon}
                    </div>

                    <div>
                      <h3 className="font-bold group-hover:text-cyan-400">
                        {tool.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {tool.description}
                      </p>

                      <p className="mt-4 text-sm font-bold text-cyan-400">
                        Explore Free Tool →
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 text-center md:p-14">
            <div className="text-4xl">📱</div>

            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
              Ready to Grow Your Instagram?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
              Read our Instagram growth guides and use free creator tools to
              improve your content strategy.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/blog/instagram/how-to-grow-on-instagram"
                className="rounded-xl bg-cyan-500 px-7 py-4 font-bold text-black transition hover:bg-cyan-400"
              >
                Read Growth Guide
              </Link>

              <Link
                href="/blog"
                className="rounded-xl border border-zinc-700 px-7 py-4 font-bold transition hover:bg-zinc-800"
              >
                All Growth Guides
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
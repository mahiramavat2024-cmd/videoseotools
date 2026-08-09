import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Creator Growth Hub | YouTube, Instagram, TikTok & More",
  description:
    "Learn how to grow on YouTube, Instagram, TikTok, Facebook, Vimeo and Pinterest with free SEO, content and social media growth guides.",
  keywords: [
    "creator growth",
    "YouTube growth",
    "Instagram growth",
    "TikTok growth",
    "Facebook growth",
    "Vimeo SEO",
    "Pinterest SEO",
    "social media SEO",
    "free creator tools",
  ],
  alternates: {
    canonical: "https://videoseotools.com/blog",
  },
  openGraph: {
    title: "Creator Growth Hub | VideoSEOTools",
    description:
      "Free guides for growing your audience on YouTube, Instagram, TikTok, Facebook, Vimeo and Pinterest.",
    url: "https://videoseotools.com/blog",
    type: "website",
  },
};

const categories = [
  {
    name: "YouTube",
    icon: "▶",
    description:
      "Grow your YouTube channel with SEO, keywords, titles, thumbnails and retention strategies.",
    href: "/blog/youtube",
    gradient: "from-red-500/20 to-zinc-900",
  },
  {
    name: "Instagram",
    icon: "◎",
    description:
      "Learn Instagram SEO, Reels growth, followers, engagement and content strategies.",
    href: "/blog/instagram",
    gradient: "from-pink-500/20 to-zinc-900",
  },
  {
    name: "TikTok",
    icon: "♪",
    description:
      "Discover TikTok growth strategies, SEO, hooks, hashtags and content ideas.",
    href: "/blog/tiktok",
    gradient: "from-cyan-500/20 to-zinc-900",
  },
  {
    name: "Facebook",
    icon: "f",
    description:
      "Learn how to grow Facebook Pages, Reels, followers and organic reach.",
    href: "/blog/facebook",
    gradient: "from-blue-500/20 to-zinc-900",
  },
  {
    name: "Vimeo",
    icon: "V",
    description:
      "Improve Vimeo discoverability with video SEO, titles, descriptions and tags.",
    href: "/blog/vimeo",
    gradient: "from-sky-500/20 to-zinc-900",
  },
  {
    name: "Pinterest",
    icon: "P",
    description:
      "Learn Pinterest SEO, keyword research, Pins and strategies for driving traffic.",
    href: "/blog/pinterest",
    gradient: "from-rose-500/20 to-zinc-900",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pb-20 pt-20">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl text-center">
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
              ✨ FREE CREATOR GROWTH GUIDES
            </span>

            <h1 className="mt-7 text-5xl font-extrabold tracking-tight md:text-7xl">
              Creator
              <span className="text-cyan-400"> Growth Hub</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
              Learn how to get more views, followers and engagement across
              YouTube, Instagram, TikTok, Facebook, Vimeo and Pinterest.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/blog/youtube"
                className="rounded-xl bg-cyan-500 px-7 py-3.5 font-bold text-black transition hover:bg-cyan-400"
              >
                Explore YouTube Guides
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-zinc-700 px-7 py-3.5 font-semibold text-white transition hover:bg-zinc-900"
              >
                Explore Free Tools
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        <section className="px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                Featured Guide
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Start Growing Your YouTube Channel
              </h2>
            </div>

            <Link
              href="/blog/youtube"
              className="group block overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-cyan-500/10 via-zinc-900 to-blue-500/10 transition hover:border-cyan-500/40"
            >
              <div className="grid md:grid-cols-2">
                <div className="flex min-h-[330px] items-center justify-center bg-gradient-to-br from-red-500/10 via-zinc-900 to-cyan-500/10">
                  <div className="text-center">
                    <div className="text-8xl transition duration-300 group-hover:scale-110">
                      ▶️
                    </div>

                    <p className="mt-5 font-semibold text-cyan-400">
                      YOUTUBE GROWTH
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12">
                  <span className="text-sm font-semibold text-cyan-400">
                    YouTube Growth Guide
                  </span>

                  <h3 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                    How to Grow a YouTube Channel in 2026
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-400">
                    Learn YouTube SEO, keyword research, video ideas, titles,
                    thumbnails, audience retention, analytics and practical
                    growth strategies for beginners.
                  </p>

                  <span className="mt-7 font-bold text-cyan-400">
                    Read Complete Guide →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                Explore Categories
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Growth Guides for Every Platform
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                Choose your platform and discover practical strategies,
                tutorials and SEO guides.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className={`group overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br ${category.gradient} p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-950/50 text-2xl font-black">
                      {category.icon}
                    </div>

                    <span className="text-zinc-600 transition group-hover:text-cyan-400">
                      →
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {category.name}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {category.description}
                  </p>

                  <div className="mt-6 text-sm font-bold text-cyan-400">
                    Explore {category.name} Guides →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="border-y border-zinc-800/70 bg-zinc-950/30 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <div className="text-3xl">🔎</div>

                <h3 className="mt-5 text-xl font-bold">
                  Search-Focused Guides
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  Learn how to find keywords, understand search intent and
                  optimize your content for discovery.
                </p>
              </div>

              <div>
                <div className="text-3xl">📈</div>

                <h3 className="mt-5 text-xl font-bold">
                  Practical Growth Tips
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  Simple strategies you can actually use to improve views,
                  followers, engagement and content performance.
                </p>
              </div>

              <div>
                <div className="text-3xl">🆓</div>

                <h3 className="mt-5 text-xl font-bold">
                  Free Creator Tools
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  Turn what you learn into action with free SEO and content
                  creation tools from VideoSEOTools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10 text-center md:p-14">
            <span className="text-4xl">🚀</span>

            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
              Learn It. Create It. Grow It.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
              Read the guides, use the free tools and start improving your
              content today.
            </p>

            <Link
              href="/"
              className="mt-8 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
            >
              Explore Free SEO Tools →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
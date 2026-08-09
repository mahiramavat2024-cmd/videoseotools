import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TikTok Growth & SEO Guides | Free TikTok Growth Tips",
  description:
    "Learn how to grow on TikTok with TikTok SEO, video ideas, hashtags, content strategy, views and follower growth tips.",
  keywords: [
    "how to grow on TikTok",
    "TikTok growth tips",
    "TikTok SEO",
    "how to get more TikTok views",
    "how to get more TikTok followers",
    "TikTok hashtags",
    "TikTok video ideas",
    "TikTok content strategy",
  ],
  alternates: {
    canonical: "https://videoseotools.com/blog/tiktok",
  },
};

export default function TikTokBlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pb-20 pt-16">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-400">
              ♪ TIKTOK GROWTH & SEO
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
              TikTok Growth
              <br />
              <span className="text-cyan-400">
                & SEO Guides
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
              Learn how to grow on TikTok, get more views and followers,
              create better videos, improve TikTok SEO and build a consistent
              content strategy.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/blog/tiktok/how-to-grow-on-tiktok"
                className="rounded-xl bg-cyan-500 px-7 py-4 font-bold text-black transition hover:bg-cyan-400"
              >
                Read Growth Guide →
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-zinc-700 px-7 py-4 font-bold transition hover:bg-zinc-900"
              >
                Explore Free Tools
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              FEATURED TIKTOK GUIDE
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Learn How to Grow on TikTok
            </h2>

            <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60">
              <div className="grid md:grid-cols-2">
                <div className="flex min-h-[360px] items-center justify-center bg-gradient-to-br from-cyan-500/20 via-zinc-900 to-black">
                  <div className="text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-5xl">
                      ♪
                    </div>

                    <p className="mt-5 font-bold text-cyan-400">
                      TIKTOK GROWTH
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-sm font-bold text-cyan-400">
                    COMPLETE BEGINNER&apos;S GUIDE
                  </p>

                  <h3 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
                    How to Grow on TikTok in 2026
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-400">
                    Learn TikTok SEO, content ideas, hooks, hashtags, video
                    strategy, audience retention and practical ways to improve
                    your TikTok growth.
                  </p>

                  <Link
                    href="/blog/tiktok/how-to-grow-on-tiktok"
                    className="mt-8 inline-block font-bold text-cyan-400 transition hover:text-cyan-300"
                  >
                    Read Complete Guide →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOPICS */}
        <section className="border-t border-zinc-800/70 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["🔎", "TikTok SEO", "Learn how to make your TikTok content easier to discover."],
                ["🎬", "TikTok Videos", "Improve your video ideas, hooks and content strategy."],
                ["📈", "TikTok Growth", "Learn practical strategies for views and audience growth."],
              ].map(([icon, title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7"
                >
                  <div className="text-3xl">{icon}</div>

                  <h3 className="mt-5 text-xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
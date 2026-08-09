import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Facebook Growth & SEO Guides | Free Facebook Growth Tips",
  description:
    "Learn how to grow on Facebook with Facebook SEO, Reels, content ideas, page growth, followers, engagement and practical Facebook marketing tips.",
  keywords: [
    "how to grow on Facebook",
    "Facebook growth tips",
    "Facebook SEO",
    "how to grow a Facebook page",
    "how to get more Facebook followers",
    "Facebook Reels growth",
    "Facebook content ideas",
    "Facebook marketing tips",
  ],
  alternates: {
    canonical: "https://videoseotools.com/blog/facebook",
  },
};

export default function FacebookBlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] text-white">
        <section className="relative overflow-hidden px-6 pb-20 pt-16">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-bold text-blue-400">
              f FACEBOOK GROWTH & SEO
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
              Facebook Growth
              <br />
              <span className="text-cyan-400">& SEO Guides</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
              Learn how to grow your Facebook page, get more followers,
              increase engagement, create better Reels and improve your
              Facebook content strategy.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/blog/facebook/how-to-grow-on-facebook"
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

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              FEATURED FACEBOOK GUIDE
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Learn How to Grow on Facebook
            </h2>

            <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60">
              <div className="grid md:grid-cols-2">
                <div className="flex min-h-[360px] items-center justify-center bg-gradient-to-br from-blue-500/20 via-zinc-900 to-black">
                  <div className="text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-5xl font-bold">
                      f
                    </div>

                    <p className="mt-5 font-bold text-blue-400">
                      FACEBOOK GROWTH
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-sm font-bold text-cyan-400">
                    COMPLETE BEGINNER&apos;S GUIDE
                  </p>

                  <h3 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
                    How to Grow on Facebook in 2026
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-400">
                    Learn Facebook SEO, Reels strategy, content ideas,
                    audience growth, engagement and practical Facebook page
                    growth strategies.
                  </p>

                  <Link
                    href="/blog/facebook/how-to-grow-on-facebook"
                    className="mt-8 inline-block font-bold text-cyan-400 hover:text-cyan-300"
                  >
                    Read Complete Guide →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800/70 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                [
                  "🔎",
                  "Facebook SEO",
                  "Learn how to make your Facebook content easier to discover.",
                ],
                [
                  "🎬",
                  "Facebook Reels",
                  "Improve your Reels ideas, hooks and short-form content.",
                ],
                [
                  "📈",
                  "Facebook Growth",
                  "Learn practical strategies for followers and engagement.",
                ],
              ].map(([icon, title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7"
                >
                  <div className="text-3xl">{icon}</div>

                  <h3 className="mt-5 text-xl font-bold">{title}</h3>

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
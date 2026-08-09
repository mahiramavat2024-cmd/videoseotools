import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vimeo Growth & SEO Guides | Free Vimeo Tips",
  description:
    "Learn how to grow on Vimeo with Vimeo SEO, video optimization, audience growth, keywords, descriptions and video marketing strategies.",
  keywords: [
    "how to grow on Vimeo",
    "Vimeo SEO",
    "Vimeo video SEO",
    "how to get more Vimeo views",
    "Vimeo marketing",
    "Vimeo video optimization",
    "Vimeo audience growth",
    "Vimeo keywords",
    "Vimeo description",
  ],
  alternates: {
    canonical: "https://videoseotools.com/blog/vimeo",
  },
};

export default function VimeoBlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] text-white">
        <section className="relative overflow-hidden px-6 pb-20 pt-16">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-400">
              ▶ VIMEO GROWTH & SEO
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
              Vimeo Growth
              <br />
              <span className="text-cyan-400">& SEO Guides</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
              Learn how to optimize Vimeo videos, improve discoverability,
              attract viewers and build a stronger video marketing strategy.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/blog/vimeo/how-to-grow-on-vimeo"
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
              FEATURED VIMEO GUIDE
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Learn How to Grow on Vimeo
            </h2>

            <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60">
              <div className="grid md:grid-cols-2">
                <div className="flex min-h-[360px] items-center justify-center bg-gradient-to-br from-cyan-500/20 via-zinc-900 to-black">
                  <div className="text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-5xl font-bold">
                      V
                    </div>

                    <p className="mt-5 font-bold text-cyan-400">
                      VIMEO GROWTH
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-sm font-bold text-cyan-400">
                    COMPLETE BEGINNER&apos;S GUIDE
                  </p>

                  <h3 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
                    How to Grow on Vimeo in 2026
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-400">
                    Learn Vimeo SEO, video optimization, keywords,
                    descriptions, audience growth and practical video
                    marketing strategies.
                  </p>

                  <Link
                    href="/blog/vimeo/how-to-grow-on-vimeo"
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
                  "Vimeo SEO",
                  "Learn how to optimize your Vimeo videos for better discoverability.",
                ],
                [
                  "🎬",
                  "Video Optimization",
                  "Improve titles, descriptions, thumbnails and video presentation.",
                ],
                [
                  "📈",
                  "Audience Growth",
                  "Learn practical ways to attract and retain more viewers.",
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
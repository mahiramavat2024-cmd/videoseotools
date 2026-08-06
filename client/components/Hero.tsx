import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
          🚀 Free AI SEO Tools for Video Creators
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          AI Video SEO Tools
          <br />
          <span className="text-cyan-400">
            Grow Your YouTube Channel Faster
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
          Generate SEO-optimized YouTube titles, descriptions, tags,
          hashtags and more with AI. Free tools built to help creators
          increase rankings, improve click-through rate, and grow faster.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/youtube/title-generator"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            Generate Titles Free →
          </Link>

          <a
            href="#tools"
            className="rounded-xl border border-zinc-700 px-8 py-4 text-white transition hover:bg-zinc-900"
          >
            Browse AI Tools
          </a>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-zinc-400">

          <span>✅ 100% Free Tools</span>

          <span>⚡ AI Powered</span>

          <span>📈 SEO Optimized</span>

          <span>🌍 Trusted by Video Creators</span>

        </div>

      </div>
    </section>
  );
}
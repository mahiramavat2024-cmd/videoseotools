import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] px-6 py-24">

      <div className="mx-auto max-w-7xl text-center">

        <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
          🚀 Free AI SEO Tools for YouTube Creators
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Rank Higher on YouTube
          <br />
          <span className="text-cyan-400">
            with Free AI Video SEO Tools
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
          Generate high-performing YouTube titles, descriptions, tags,
          hashtags, hooks and scripts in seconds using AI.
          Improve your click-through rate, boost search rankings,
          and grow your channel faster with professional SEO tools.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/youtube/title-generator"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            🚀 Generate Free Title
          </Link>

          <a
            href="#tools"
            className="rounded-xl border border-zinc-700 px-8 py-4 text-white transition hover:bg-zinc-900"
          >
            Browse All Tools
          </a>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 text-center md:grid-cols-4">

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <h3 className="text-3xl font-bold text-cyan-400">
              100%
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Free AI Tools
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <h3 className="text-3xl font-bold text-cyan-400">
              AI
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              SEO Powered
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <h3 className="text-3xl font-bold text-cyan-400">
              24/7
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Available Online
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <h3 className="text-3xl font-bold text-cyan-400">
              SEO
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Creator Focused
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
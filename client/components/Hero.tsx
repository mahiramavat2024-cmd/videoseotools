import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] px-6 py-20 text-center">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* SEO Badge */}
        <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
          🚀 Free AI YouTube SEO Tools
        </span>

        {/* Main SEO Heading */}
        <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
          Free YouTube SEO Tools
          <br />
          <span className="text-cyan-400">
            Powered by AI
          </span>
        </h1>

        {/* Introduction */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
          Create better YouTube titles, descriptions, tags, hashtags, and
          content ideas with free AI-powered YouTube SEO tools. Optimize your
          videos, discover content ideas, and build a better YouTube content
          strategy with VideoSEOTools.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">

          {/* 100% Creator Growth */}
          <Link
            href="/blog"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            🚀 100% Creator Growth →
          </Link>

          {/* Free SEO Tools */}
          <Link
            href="#tools"
            className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:bg-zinc-900"
          >
            Explore Free SEO Tools
          </Link>

        </div>

        {/* Tool Highlights */}
        <div className="mt-16 grid grid-cols-2 gap-5 text-center md:grid-cols-4">

          {/* YouTube Titles */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <div className="text-3xl">🎬</div>

            <h2 className="mt-3 text-lg font-bold text-white">
              YouTube Titles
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Generate engaging title ideas for your videos.
            </p>
          </div>

          {/* Descriptions */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <div className="text-3xl">📝</div>

            <h2 className="mt-3 text-lg font-bold text-white">
              Descriptions
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Create structured and SEO-friendly descriptions.
            </p>
          </div>

          {/* YouTube Tags */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <div className="text-3xl">🏷️</div>

            <h2 className="mt-3 text-lg font-bold text-white">
              YouTube Tags
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Generate relevant tags based on your video topic.
            </p>
          </div>

          {/* Hashtags */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <div className="text-3xl">#️⃣</div>

            <h2 className="mt-3 text-lg font-bold text-white">
              Hashtags
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Find relevant hashtag ideas for your content.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
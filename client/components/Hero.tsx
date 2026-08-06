import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
          🚀 AI-Powered SEO Tools for Video Creators
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Grow Your
          <span className="text-cyan-400"> YouTube</span>,
          <span className="text-pink-400"> Instagram</span>,
          <span className="text-blue-400"> TikTok</span>
          <br />
          Faster with AI
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
          Generate SEO-friendly Titles, Descriptions, Hashtags, Tags,
          Captions and more in seconds using AI.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/youtube/title-generator"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Start Free →
          </Link>

          <a
            href="#tools"
            className="rounded-xl border border-zinc-700 px-8 py-4 text-white hover:bg-zinc-900"
          >
            Explore Tools
          </a>
        </div>
      </div>
    </section>
  );
}
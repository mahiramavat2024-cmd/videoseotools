import Link from "next/link";

export default function PremiumLock() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 text-center">

      <div className="text-6xl">🚀</div>

      <h2 className="mt-6 text-4xl font-extrabold text-white">
        More AI Tools Coming Soon
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        We're building more powerful AI tools for YouTube creators.
        Stay tuned for upcoming features including Script Generator,
        Thumbnail Generator, Keyword Research, Channel Audit and much more.
      </p>

      <div className="mt-10 grid gap-4 text-left md:grid-cols-2">

        <div className="rounded-xl bg-[#08111f] p-4">
          🚀 AI Script Generator
        </div>

        <div className="rounded-xl bg-[#08111f] p-4">
          🎨 Thumbnail Generator
        </div>

        <div className="rounded-xl bg-[#08111f] p-4">
          🔍 Keyword Research Tool
        </div>

        <div className="rounded-xl bg-[#08111f] p-4">
          📈 Channel SEO Audit
        </div>

        <div className="rounded-xl bg-[#08111f] p-4">
          🎬 Shorts Idea Generator
        </div>

        <div className="rounded-xl bg-[#08111f] p-4">
          🤖 AI Content Planner
        </div>

      </div>

      <Link
        href="/contact"
        className="mt-10 inline-block rounded-xl bg-cyan-500 px-10 py-4 text-lg font-bold text-black transition hover:bg-cyan-400"
      >
        Contact Us
      </Link>

    </section>
  );
}
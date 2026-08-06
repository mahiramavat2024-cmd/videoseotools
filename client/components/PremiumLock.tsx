import Link from "next/link";

export default function PremiumLock() {
  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-cyan-500 bg-gradient-to-br from-[#111827] to-[#0f172a] p-10 text-center text-white">

      <div className="text-6xl">🔒</div>

      <h2 className="mt-6 text-4xl font-extrabold">
        Unlock VidNova PRO
      </h2>

      <p className="mt-4 text-lg text-zinc-400">
        This feature is available only for PRO members.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2 text-left">

        <div className="rounded-xl bg-zinc-900 p-4">
          ✅ Unlimited AI Generations
        </div>

        <div className="rounded-xl bg-zinc-900 p-4">
          ✅ Advanced SEO Analysis
        </div>

        <div className="rounded-xl bg-zinc-900 p-4">
          ✅ CTR Prediction
        </div>

        <div className="rounded-xl bg-zinc-900 p-4">
          ✅ AI Script Generator
        </div>

        <div className="rounded-xl bg-zinc-900 p-4">
          ✅ Save History
        </div>

        <div className="rounded-xl bg-zinc-900 p-4">
          ✅ Export PDF / TXT
        </div>

      </div>

      <div className="mt-10 flex flex-col items-center gap-3">

        <div className="text-5xl font-extrabold">
          $5<span className="text-xl text-zinc-400">/month</span>
        </div>

        <div className="text-lg text-green-400">
          or $50/year (Save $10)
        </div>

      </div>

      <Link
        href="/pricing"
        className="mt-10 inline-block rounded-xl bg-cyan-500 px-10 py-4 text-lg font-bold text-black transition hover:bg-cyan-400"
      >
        Upgrade to PRO
      </Link>

    </div>
  );
}
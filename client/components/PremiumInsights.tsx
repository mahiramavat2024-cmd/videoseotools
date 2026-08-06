import Link from "next/link";

export default function PremiumInsights() {
  return (
    <section className="mt-12">

      <div className="rounded-3xl border border-cyan-500 bg-[#111827] p-8">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-white">
              ✨ AI Premium Insights
            </h2>

            <p className="mt-2 text-zinc-400">
              Unlock advanced AI analysis to improve your content performance.
            </p>

          </div>

          <div className="rounded-full bg-yellow-500 px-4 py-2 font-bold text-black">
            PRO
          </div>

        </div>

        <div className="relative mt-8">

          {/* Blur Overlay */}

          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-black/40 backdrop-blur-sm">

            <Link
              href="/pricing"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400"
            >
              🔓 Unlock PRO
            </Link>

          </div>

          {/* Premium Data */}

          <div className="space-y-5 blur-sm select-none">

            <Insight
              title="SEO Score"
              value="97 / 100"
            />

            <Insight
              title="CTR Prediction"
              value="94%"
            />

            <Insight
              title="Viral Probability"
              value="91%"
            />

            <Insight
              title="Keyword Strength"
              value="Excellent"
            />

            <Insight
              title="Competition"
              value="Low"
            />

            <Insight
              title="Best Upload Time"
              value="Saturday • 7:30 PM"
            />

            <Insight
              title="Best Thumbnail Text"
              value="Make Money FAST!"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

type InsightProps = {
  title: string;
  value: string;
};

function Insight({
  title,
  value,
}: InsightProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-zinc-900 p-5">

      <span className="text-lg text-white">
        {title}
      </span>

      <span className="font-bold text-cyan-400">
        {value}
      </span>

    </div>
  );
}
import Link from "next/link";

export default function PremiumInsights() {
  return (
    <section className="bg-[#08111f] py-24">

      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-3xl border border-cyan-500/20 bg-[#111827] p-10">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <h2 className="text-4xl font-bold text-white">
                🚀 More AI Tools Coming Soon
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-zinc-400">
                We are building powerful AI tools to help YouTube creators
                grow faster. New tools will be released soon.
              </p>

            </div>

            <div className="rounded-full bg-cyan-500 px-5 py-2 font-bold text-black">
              Coming Soon
            </div>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <Feature
              title="AI Script Generator"
              description="Generate complete YouTube scripts in seconds."
            />

            <Feature
              title="Thumbnail Generator"
              description="Create high CTR thumbnail ideas instantly."
            />

            <Feature
              title="Keyword Research"
              description="Find low competition keywords for YouTube."
            />

            <Feature
              title="Channel SEO Audit"
              description="Analyze your YouTube channel like a pro."
            />

            <Feature
              title="Content Planner"
              description="Generate viral content ideas for your niche."
            />

            <Feature
              title="Video Analyzer"
              description="Improve your videos with AI suggestions."
            />

          </div>

          <div className="mt-10 text-center">

            <Link
              href="/contact"
              className="inline-block rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

type FeatureProps = {
  title: string;
  description: string;
};

function Feature({
  title,
  description,
}: FeatureProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">

      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-zinc-400">
        {description}
      </p>

    </div>
  );
}
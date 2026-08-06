import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-cyan-500 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-extrabold text-black">
          Ready to Grow Your Content?
        </h2>

        <p className="mt-6 text-xl text-black/80">
          Create SEO-optimized titles, descriptions, hashtags and captions
          with AI in seconds.
        </p>

        <Link
          href="/youtube/title-generator"
          className="mt-10 inline-block rounded-xl bg-black px-10 py-4 text-lg font-bold text-white hover:bg-zinc-900"
        >
          Get Started Free →
        </Link>

      </div>
    </section>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About VideoSEOTools | Free YouTube SEO Tools",
  description:
    "Learn about VideoSEOTools, a free AI-powered platform built to help YouTube creators generate titles, descriptions, tags, hashtags and content ideas.",
  alternates: {
    canonical: "https://videoseotools.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      <Navbar />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
              ABOUT VIDEOSEOTOOLS
            </span>

            <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
              Helping Creators Create{" "}
              <span className="text-cyan-400">Better Content</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              VideoSEOTools is a free AI-powered platform designed to
              help YouTube creators save time and improve their content
              workflow.
            </p>
          </div>

          <div className="mt-16 space-y-10">

            <section className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-8">
              <h2 className="text-2xl font-bold">
                What Is VideoSEOTools?
              </h2>

              <p className="mt-4 leading-8 text-zinc-400">
                VideoSEOTools is a collection of AI-powered tools for
                YouTube creators, marketers and content creators.
                The platform helps users generate ideas for titles,
                descriptions, tags, hashtags and other content-related
                tasks.
              </p>

              <p className="mt-4 leading-8 text-zinc-400">
                Our goal is to make common content creation and
                optimization tasks faster, simpler and easier to
                understand.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold">
                Our Mission
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">
                Creating content takes time. Coming up with the right
                title, description, keywords and content ideas can take
                even longer.
              </p>

              <p className="mt-5 leading-8 text-zinc-400">
                VideoSEOTools aims to provide simple AI-powered tools
                that give creators useful starting points so they can
                spend more time creating and less time starting from
                a blank page.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold">
                What We Provide
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
                  <h3 className="text-xl font-bold">
                    🎯 YouTube Title Generator
                  </h3>
                  <p className="mt-3 leading-7 text-zinc-400">
                    Generate title ideas based on your video topic.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
                  <h3 className="text-xl font-bold">
                    📝 Description Generator
                  </h3>
                  <p className="mt-3 leading-7 text-zinc-400">
                    Create structured starting points for YouTube
                    descriptions.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
                  <h3 className="text-xl font-bold">
                    🏷️ Tags Generator
                  </h3>
                  <p className="mt-3 leading-7 text-zinc-400">
                    Generate relevant tag ideas for your content.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
                  <h3 className="text-xl font-bold">
                    #️⃣ Hashtag Generator
                  </h3>
                  <p className="mt-3 leading-7 text-zinc-400">
                    Find hashtag ideas related to your YouTube
                    content.
                  </p>
                </div>

              </div>
            </section>

            <section className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8">
              <h2 className="text-2xl font-bold">
                AI Is a Starting Point
              </h2>

              <p className="mt-4 leading-8 text-zinc-300">
                AI-generated suggestions should always be reviewed
                and customized before publishing. Your final content
                should accurately represent your video, audience and
                content strategy.
              </p>
            </section>

          </div>

          <div className="mt-14 text-center">
            <Link
              href="/"
              className="inline-flex rounded-xl bg-cyan-500 px-7 py-3 font-bold text-black transition hover:bg-cyan-400"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-[#06101f]">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} VideoSEOTools. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
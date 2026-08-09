import Link from "next/link";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolSearch from "@/components/ToolSearch";
import PopularTools from "@/components/PopularTools";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section>
        <Hero />
      </section>

      {/* Tool Search */}
      <section
        id="tools"
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <ToolSearch />
      </section>

      {/* Popular Tools */}
      <section
        className="mx-auto max-w-7xl px-6 py-20"
        aria-labelledby="popular-tools-heading"
      >
        <PopularTools />
      </section>

      {/* SEO Introduction */}
      <section className="border-y border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              YouTube SEO Tools
            </p>

            <h2
              id="popular-tools-heading"
              className="mt-3 text-3xl font-bold md:text-4xl"
            >
              Free AI Tools for YouTube Creators
            </h2>
          </div>

          <div className="mt-10 space-y-6 text-base leading-8 text-zinc-300">
            <p>
              VideoSEOTools provides free AI-powered tools designed to help
              YouTube creators plan, optimize, and improve their video
              content. You can generate YouTube titles, descriptions, tags,
              and hashtags based on your video topic.
            </p>

            <p>
              Creating a YouTube video is only one part of growing a channel.
              Your title, description, keywords, and overall content strategy
              also help viewers understand what your video is about. Our tools
              are built to make that optimization process faster and easier.
            </p>

            <p>
              Whether you are starting a new YouTube channel, publishing
              Shorts, creating educational videos, making tutorials, or
              producing entertainment content, VideoSEOTools gives you
              practical tools to generate ideas and SEO-focused content.
            </p>
          </div>
        </div>
      </section>

      {/* Main Tool Links */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Explore Our Tools
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            YouTube SEO Tools You Can Use for Free
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-zinc-400">
            Choose a tool based on what you need for your next YouTube video.
            Generate titles, descriptions, tags, or hashtags and optimize
            your content workflow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/youtube/title-generator"
            className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-3xl">🎬</div>

            <h3 className="mt-4 text-xl font-bold">
              YouTube Title Generator
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Generate engaging and SEO-friendly YouTube title ideas based on
              your video topic.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-400">
              Try Title Generator →
            </span>
          </Link>

          <Link
            href="/youtube/description-generator"
            className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-3xl">📝</div>

            <h3 className="mt-4 text-xl font-bold">
              YouTube Description Generator
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Create structured, readable YouTube descriptions around your
              video topic and keywords.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-400">
              Try Description Generator →
            </span>
          </Link>

          <Link
            href="/youtube/tags-generator"
            className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-3xl">🏷️</div>

            <h3 className="mt-4 text-xl font-bold">
              YouTube Tags Generator
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Generate relevant YouTube tag ideas to help organize and
              describe your video content.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-400">
              Try Tags Generator →
            </span>
          </Link>

          <Link
            href="/youtube/hashtag-generator"
            className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-3xl">#️⃣</div>

            <h3 className="mt-4 text-xl font-bold">
              YouTube Hashtag Generator
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Find relevant hashtag ideas for your YouTube videos and
              content topics.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-400">
              Try Hashtag Generator →
            </span>
          </Link>
        </div>
      </section>

      {/* What Is YouTube SEO */}
      <section className="border-y border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            What Is YouTube SEO?
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300">
            <p>
              YouTube SEO is the process of improving the information and
              content around a video so that viewers and search engines can
              better understand its topic. This can include creating a clear
              title, writing a useful description, selecting relevant terms,
              and making content that matches what viewers are looking for.
            </p>

            <p>
              Good YouTube optimization is not only about adding keywords.
              Your video should provide useful content for the audience, while
              your title and description should accurately communicate what
              viewers can expect.
            </p>

            <p>
              VideoSEOTools helps simplify some of these tasks with AI-powered
              generators that can give you starting points for your YouTube
              content.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Simple Workflow
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            How to Use VideoSEOTools
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              1
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Enter Your Topic
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Enter your video topic, idea, or subject into the generator you
              want to use.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              2
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Generate Ideas
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Use the AI tool to generate title, description, tag, or hashtag
              ideas for your content.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              3
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Improve Your Video
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Review the generated suggestions and adapt them to your audience,
              video, and content style.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Features />
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              YouTube SEO Tools FAQ
            </h2>
          </div>

          <div className="mt-12 space-y-5">
            <details className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                What is VideoSEOTools?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                VideoSEOTools is a platform of AI-powered tools for YouTube
                creators. The tools can help generate titles, descriptions,
                tags, hashtags, and other content ideas.
              </p>
            </details>

            <details className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Is VideoSEOTools free?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                The YouTube SEO tools currently available on VideoSEOTools are
                offered as free tools for creators.
              </p>
            </details>

            <details className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Can these tools help with YouTube SEO?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                The tools can help you create and organize SEO-focused content
                such as titles, descriptions, tags, and hashtags. Generated
                suggestions should always be reviewed and adapted to your
                actual video and audience.
              </p>
            </details>

            <details className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Which YouTube SEO tool should I use first?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                Start with the{" "}
                <Link
                  href="/youtube/title-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  YouTube Title Generator
                </Link>
                , then use the{" "}
                <Link
                  href="/youtube/description-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  Description Generator
                </Link>
                ,{" "}
                <Link
                  href="/youtube/tags-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  Tags Generator
                </Link>
                , and{" "}
                <Link
                  href="/youtube/hashtag-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  Hashtag Generator
                </Link>
                .
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <CTA />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
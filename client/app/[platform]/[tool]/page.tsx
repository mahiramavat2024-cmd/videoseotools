import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import GeneratorForm from "@/components/GeneratorForm";
import PremiumLock from "@/components/PremiumLock";
import { tools } from "@/data";

type Props = {
  params: Promise<{
    platform: string;
    tool: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { platform, tool } = await params;

  const currentTool = tools.find(
    (item) =>
      item.platform === platform &&
      item.slug === tool
  );

  if (!currentTool) {
    return {
      title: "Tool Not Found | VideoSEOTools",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `https://videoseotools.com/${platform}/${tool}`;

  return {
    title: `${currentTool.title} | VideoSEOTools`,

    description: currentTool.description,

    keywords: currentTool.keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `${currentTool.title} | VideoSEOTools`,
      description: currentTool.description,
      url: canonicalUrl,
      siteName: "VideoSEOTools",
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${currentTool.title} | VideoSEOTools`,
      description: currentTool.description,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { platform, tool } = await params;

  const currentTool = tools.find(
    (item) =>
      item.platform === platform &&
      item.slug === tool
  );

  if (!currentTool) {
    notFound();
  }

  const toolTitle = currentTool.title;

  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      <Navbar />

      {/* Tool Hero */}
      <section className="px-6 pb-10 pt-16 md:pb-14 md:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            🚀 Free AI YouTube SEO Tool
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            {toolTitle}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            {currentTool.description}
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          {currentTool.premium ? (
            <PremiumLock />
          ) : (
            <GeneratorForm
              title={currentTool.title}
              placeholder={currentTool.placeholder}
              aiType={currentTool.aiType}
            />
          )}
        </div>
      </section>

      {/* About This Tool */}
      <section className="border-y border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            About {toolTitle}
          </h2>

          <div className="mt-7 space-y-6 text-base leading-8 text-zinc-300">
            <p>
              {toolTitle} is an AI-powered tool designed to help YouTube
              creators create content faster and simplify their SEO workflow.
              Enter your video topic or idea and use the generated suggestions
              as a starting point for your content.
            </p>

            <p>
              AI-generated suggestions should be reviewed and customized
              according to your actual video, audience, and content strategy.
              The goal is to help you save time while creating relevant,
              useful, and audience-focused content.
            </p>

            <p>
              VideoSEOTools provides a collection of free AI tools for
              YouTube creators, making it easier to work on different parts of
              your video optimization process from one place.
            </p>
          </div>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Simple Process
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            How to Use {toolTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-zinc-400">
            Generate AI-powered content suggestions in a few simple steps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              1
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Enter Your Topic
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Enter your YouTube video topic, idea, or subject into the
              generator.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              2
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Generate With AI
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Let the AI generate suggestions based on the topic you provide.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              3
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Review & Customize
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Review the generated suggestions and customize them to match
              your video and target audience.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            Why Use VideoSEOTools?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-xl font-bold">
                Save Time
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Quickly generate starting ideas instead of creating everything
                from scratch.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-xl font-bold">
                AI-Powered Suggestions
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Use AI to generate content ideas based on the topic you
                provide.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-xl font-bold">
                YouTube Creator Focused
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                The tools are designed around common YouTube content and SEO
                tasks.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <h3 className="text-xl font-bold">
                Simple to Use
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Enter your topic, generate suggestions, and customize the
                result for your content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Tips */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">
          YouTube SEO Tips
        </h2>

        <div className="mt-8 space-y-4">
          <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5">
            <h3 className="font-bold">
              Keep Your Content Relevant
            </h3>

            <p className="mt-2 leading-7 text-zinc-400">
              Make sure your generated content accurately represents what
              viewers will find in your video.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5">
            <h3 className="font-bold">
              Understand Your Audience
            </h3>

            <p className="mt-2 leading-7 text-zinc-400">
              Create content that matches the interests, questions, and needs
              of the people you want to reach.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5">
            <h3 className="font-bold">
              Avoid Keyword Stuffing
            </h3>

            <p className="mt-2 leading-7 text-zinc-400">
              Use relevant terms naturally and avoid adding unrelated keywords
              simply for search visibility.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5">
            <h3 className="font-bold">
              Review AI Suggestions
            </h3>

            <p className="mt-2 leading-7 text-zinc-400">
              Always review and edit AI-generated content so it accurately
              represents your video and your own content style.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                What is {toolTitle}?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                {toolTitle} is an AI-powered tool that helps YouTube creators
                generate content suggestions based on their video topic.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Is this tool free?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                This tool is available through VideoSEOTools. Availability may
                depend on whether the specific tool is marked as premium.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Can AI-generated content guarantee YouTube rankings?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                No. AI-generated suggestions cannot guarantee rankings, views,
                or channel growth. Your final content should be relevant,
                accurate, useful, and appropriate for your audience.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                What other YouTube SEO tools are available?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                You can explore other VideoSEOTools such as the{" "}
                <Link
                  href="/youtube/title-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  YouTube Title Generator
                </Link>
                ,{" "}
                <Link
                  href="/youtube/description-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  YouTube Description Generator
                </Link>
                ,{" "}
                <Link
                  href="/youtube/tags-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  YouTube Tags Generator
                </Link>
                , and{" "}
                <Link
                  href="/youtube/hashtag-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  YouTube Hashtag Generator
                </Link>
                .
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            More Free YouTube SEO Tools
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
            Explore other tools to improve your YouTube content workflow.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Link
            href="/youtube/title-generator"
            className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:border-cyan-500/50"
          >
            <h3 className="font-bold">
              YouTube Title Generator
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Generate title ideas for your YouTube videos.
            </p>
          </Link>

          <Link
            href="/youtube/tags-generator"
            className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:border-cyan-500/50"
          >
            <h3 className="font-bold">
              YouTube Tags Generator
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Generate relevant tag ideas for your content.
            </p>
          </Link>

          <Link
            href="/youtube/hashtag-generator"
            className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5 transition hover:border-cyan-500/50"
          >
            <h3 className="font-bold">
              YouTube Hashtag Generator
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Generate relevant hashtag ideas for your videos.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
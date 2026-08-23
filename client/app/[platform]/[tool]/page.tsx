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

  /*
   * =========================================================
   * RELATED TOOLS
   * =========================================================
   *
   * Related tools are now automatically loaded from youtube.ts.
   * This means changing relatedTools in the data file will
   * automatically update the page.
   */

  const relatedTools = (currentTool.relatedTools || [])
    .map((slug) =>
      tools.find(
        (item) =>
          item.platform === platform &&
          item.slug === slug
      )
    )
    .filter(Boolean);

  /*
   * =========================================================
   * FAQ STRUCTURED DATA
   * =========================================================
   *
   * Uses the FAQs from youtube.ts.
   * This gives search engines structured information about
   * the questions and answers displayed on the page.
   */

  const faqItems = currentTool.faqs || [];

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      <Navbar />

      {/* =========================================================
          STRUCTURED DATA
      ========================================================= */}

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* =========================================================
          HERO
      ========================================================= */}

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

      {/* =========================================================
          GENERATOR
      ========================================================= */}

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

      {/* =========================================================
          ABOUT THIS TOOL
      ========================================================= */}

      <section className="border-y border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">

          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            About This Tool
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What Is {toolTitle}?
          </h2>

          <div className="mt-7 space-y-6 text-base leading-8 text-zinc-300">

            <p>
              {toolTitle} is an AI-powered tool designed to help
              YouTube creators create content faster and simplify
              their content optimization workflow.
            </p>

            <p>
              Enter your video topic or idea and use the generated
              suggestions as a starting point for your YouTube
              content. You can review, edit and customize the
              suggestions before using them.
            </p>

            <p>
              AI-generated suggestions should always be reviewed
              according to your actual video, audience and content
              strategy. The goal is to help creators save time while
              creating relevant and useful content.
            </p>

            <p>
              VideoSEOTools provides a collection of free tools for
              YouTube creators so that different parts of the video
              optimization workflow can be handled from one place.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          HOW TO USE
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Simple Process
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            How to Use {toolTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-zinc-400">
            Use the tool in a few simple steps to create useful
            starting ideas for your YouTube content.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* STEP 1 */}

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              1
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Enter Your Topic
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Enter your YouTube video topic, subject or idea
              into the generator.
            </p>

          </div>

          {/* STEP 2 */}

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              2
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Generate With AI
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Let the AI create relevant suggestions based on
              the topic you provide.
            </p>

          </div>

          {/* STEP 3 */}

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              3
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Review & Customize
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Review the suggestions and customize them to match
              your actual video and target audience.
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}

      <section className="border-y border-zinc-800/70 bg-[#0a1424]">

        <div className="mx-auto max-w-5xl px-6 py-20">

          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Creator Benefits
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Why Use {toolTitle}?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {/* BENEFIT 1 */}

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <h3 className="text-xl font-bold">
                Save Time
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Generate useful starting ideas quickly instead of
                creating everything from scratch.
              </p>

            </div>

            {/* BENEFIT 2 */}

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <h3 className="text-xl font-bold">
                AI-Powered Ideas
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Get suggestions based on the topic and information
                you provide to the tool.
              </p>

            </div>

            {/* BENEFIT 3 */}

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <h3 className="text-xl font-bold">
                YouTube Creator Focused
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                The tool is designed around common YouTube content
                and optimization tasks.
              </p>

            </div>

            {/* BENEFIT 4 */}

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <h3 className="text-xl font-bold">
                Easy to Use
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Enter your topic, generate suggestions and adapt
                the result to your own content.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          SEO TIPS
      ========================================================= */}

      <section className="mx-auto max-w-5xl px-6 py-20">

        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          Optimization Tips
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          YouTube SEO Tips
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
          Use these practical tips when working on your YouTube
          content and optimization strategy.
        </p>

        <div className="mt-10 space-y-4">

          {currentTool.tips?.map((tip, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-xl border border-zinc-800 bg-[#0d1828] p-5"
            >

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
                ✓
              </div>

              <p className="leading-7 text-zinc-300">
                {tip}
              </p>

            </div>
          ))}

          {(!currentTool.tips ||
            currentTool.tips.length === 0) && (
            <>
              <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5">
                <h3 className="font-bold">
                  Keep Your Content Relevant
                </h3>

                <p className="mt-2 leading-7 text-zinc-400">
                  Make sure your generated content accurately
                  represents what viewers will find in your video.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5">
                <h3 className="font-bold">
                  Understand Your Audience
                </h3>

                <p className="mt-2 leading-7 text-zinc-400">
                  Create content that matches the interests,
                  questions and needs of your intended viewers.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-[#0d1828] p-5">
                <h3 className="font-bold">
                  Avoid Keyword Stuffing
                </h3>

                <p className="mt-2 leading-7 text-zinc-400">
                  Use relevant terms naturally and avoid adding
                  unrelated keywords simply for search visibility.
                </p>
              </div>
            </>
          )}

        </div>

      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="border-t border-zinc-800/70 bg-[#0a1424]">

        <div className="mx-auto max-w-4xl px-6 py-20">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {toolTitle} FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
              Find answers to common questions about using this
              YouTube tool.
            </p>

          </div>

          <div className="mt-10 space-y-4">

            {faqItems.length > 0 ? (
              faqItems.map((faq, index) => (
                <details
                  key={index}
                  className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6"
                >

                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    {faq.question}
                  </summary>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {faq.answer}
                  </p>

                </details>
              ))
            ) : (
              <>
                <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    What is {toolTitle}?
                  </summary>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {toolTitle} is a tool designed to help YouTube
                    creators generate useful content suggestions
                    based on their video topic.
                  </p>

                </details>

                <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    Can AI-generated content guarantee YouTube rankings?
                  </summary>

                  <p className="mt-4 leading-7 text-zinc-400">
                    No. AI-generated suggestions cannot guarantee
                    rankings, views or channel growth. Always review
                    and customize the generated content for your
                    actual audience and video.
                  </p>

                </details>
              </>
            )}

          </div>

        </div>

      </section>

      {/* =========================================================
          RELATED TOOLS
      ========================================================= */}

      {relatedTools.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Keep Creating
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              More YouTube SEO Tools
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
              Continue your YouTube content workflow with these
              related free tools.
            </p>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {relatedTools.map((relatedTool) => {
              if (!relatedTool) return null;

              return (
                <Link
                  key={relatedTool.slug}
                  href={`/${relatedTool.platform}/${relatedTool.slug}`}
                  className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-[#101d30]"
                >

                  <div className="text-3xl">
                    {relatedTool.icon}
                  </div>

                  <h3 className="mt-4 text-lg font-bold">
                    {relatedTool.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {relatedTool.description}
                  </p>

                  <span className="mt-5 inline-block font-semibold text-cyan-400 transition group-hover:translate-x-1">
                    Open Tool →
                  </span>

                </Link>
              );
            })}

          </div>

        </section>
      )}

      {/* =========================================================
          HOME / ALL TOOLS CTA
      ========================================================= */}

      <section className="border-t border-zinc-800/70 bg-[#0a1424]">

        <div className="mx-auto max-w-5xl px-6 py-16 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Grow Your YouTube Channel?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
            Explore VideoSEOTools and use the right tools for
            titles, descriptions, keywords, tags and hashtags.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/"
              className="rounded-xl bg-cyan-500 px-7 py-3 font-bold text-black transition hover:bg-cyan-400"
            >
              ← Return to Home
            </Link>

            <Link
              href="/youtube/title-generator"
              className="rounded-xl border border-zinc-700 px-7 py-3 font-bold text-white transition hover:border-cyan-500 hover:text-cyan-400"
            >
              Explore YouTube Tools →
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-zinc-800 bg-[#06101f]">

        <div className="mx-auto max-w-6xl px-6 py-10">

          <div className="flex flex-col items-center justify-between gap-5 text-sm text-zinc-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} VideoSEOTools. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-5">

              <Link
                href="/"
                className="transition hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="transition hover:text-cyan-400"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-cyan-400"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="transition hover:text-cyan-400"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-cyan-400"
              >
                Terms
              </Link>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}
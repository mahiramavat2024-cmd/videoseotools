import type { Metadata } from "next";
import Link from "next/link";
import UniversalDownloader from "@/components/UniversalDownloader";

export const metadata: Metadata = {
  title: "YouTube Video Downloader – Download YouTube Videos in HD | VidNova",

  description:
    "Download public YouTube videos in HD quality with VidNova. Paste a YouTube video URL and get available download options quickly.",

  keywords: [
    "youtube video downloader",
    "youtube downloader",
    "youtube hd video downloader",
    "youtube video download",
    "download youtube videos",
    "youtube downloader hd",
    "youtube video downloader online",
    "free youtube video downloader",
  ],

  alternates: {
    canonical:
      "https://www.videoseotools.com/youtube/video-downloader",
  },

  openGraph: {
    title:
      "YouTube Video Downloader – Download YouTube Videos in HD | VidNova",

    description:
      "Download public YouTube videos in HD quality with VidNova.",

    url:
      "https://www.videoseotools.com/youtube/video-downloader",

    siteName: "VidNova",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function YouTubeVideoDownloaderPage() {
  return (
    <main className="min-h-screen bg-[#08111f] text-white">

      {/* HERO */}

      <section className="px-6 pb-10 pt-10 md:pb-14 md:pt-14">

        <div className="mx-auto max-w-5xl">

          {/* BACK TO HOME */}

          <div className="mb-8">

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-[#0d1828] px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-cyan-500/50 hover:bg-[#111f32] hover:text-cyan-400"
            >
              <span className="text-base">
                ←
              </span>

              Back to Home
            </Link>

          </div>

          {/* HERO CONTENT */}

          <div className="text-center">

            <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-400">
              YouTube Video Downloader
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              YouTube HD Video Downloader
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Download public YouTube videos in HD quality
              with VidNova. Paste a YouTube video URL below
              to get your available download options.
            </p>

          </div>

        </div>

      </section>

      {/* DOWNLOADER */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-4xl">

          <UniversalDownloader
            platform="youtube"
            title="YouTube Video Downloader"
            placeholder="Paste YouTube video URL here..."
          />

        </div>

      </section>

      {/* FEATURES */}

      <section className="border-y border-zinc-800/70 bg-[#0a1424] px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Why VidNova
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Simple YouTube Video Downloads
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              VidNova provides a simple interface for
              processing public YouTube video URLs.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* FEATURE 1 */}

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">

              <div className="text-3xl">
                ⚡
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Fast Processing
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Paste your public YouTube URL and let
                VidNova process the video.
              </p>

            </div>

            {/* FEATURE 2 */}

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">

              <div className="text-3xl">
                🎬
              </div>

              <h3 className="mt-5 text-xl font-bold">
                HD Video Downloads
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                View the available video download options
                returned for the YouTube URL.
              </p>

            </div>

            {/* FEATURE 3 */}

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">

              <div className="text-3xl">
                📱
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Mobile Friendly
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Use the YouTube downloader comfortably on
                mobile, tablet, or desktop.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* HOW TO */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-center text-3xl font-bold md:text-4xl">
            How to Download a YouTube Video
          </h2>

          <div className="mt-10 space-y-5">

            {/* STEP 1 */}

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <h3 className="text-lg font-bold">
                1. Copy the YouTube Video URL
              </h3>

              <p className="mt-2 leading-7 text-zinc-400">
                Open the public YouTube video you want to
                download and copy its URL.
              </p>

            </div>

            {/* STEP 2 */}

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <h3 className="text-lg font-bold">
                2. Paste the URL
              </h3>

              <p className="mt-2 leading-7 text-zinc-400">
                Paste the YouTube URL into the VidNova
                YouTube Video Downloader above.
              </p>

            </div>

            {/* STEP 3 */}

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <h3 className="text-lg font-bold">
                3. Download the Video
              </h3>

              <p className="mt-2 leading-7 text-zinc-400">
                After processing, choose an available
                download option to save the video.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SEO CONTENT */}

      <section className="border-t border-zinc-800/70 bg-[#0a1424] px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-3xl font-bold md:text-4xl">
            Free YouTube Video Downloader
          </h2>

          <div className="mt-7 space-y-6 leading-8 text-zinc-400">

            <p>
              VidNova YouTube Video Downloader provides a
              simple way to process publicly accessible
              YouTube video URLs. Paste a video link into
              the downloader and check the available
              download options.
            </p>

            <p>
              To use the tool, copy the URL of a public
              YouTube video, paste it into VidNova, and
              start the download process.
            </p>

            <p>
              VidNova is designed to provide a clean and
              easy-to-use experience across desktop,
              tablet, and mobile devices.
            </p>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-4">

            {/* FAQ 1 */}

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <summary className="cursor-pointer font-bold">
                Can I download any YouTube video?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                VidNova is designed for publicly accessible
                YouTube video URLs. Private, restricted, or
                unavailable videos may not be accessible.
              </p>

            </details>

            {/* FAQ 2 */}

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <summary className="cursor-pointer font-bold">
                Is the YouTube Video Downloader free?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                VidNova provides this downloader as a free
                tool, subject to service availability and
                usage limits.
              </p>

            </details>

            {/* FAQ 3 */}

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <summary className="cursor-pointer font-bold">
                Do I need to install software?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                No. The downloader works directly in your
                web browser.
              </p>

            </details>

            {/* FAQ 4 */}

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <summary className="cursor-pointer font-bold">
                Can I use the downloader on my phone?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                Yes. The page is designed for mobile,
                tablet, and desktop devices.
              </p>

            </details>

          </div>

        </div>

      </section>

    </main>
  );
}
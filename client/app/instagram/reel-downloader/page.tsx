import type { Metadata } from "next";
import Link from "next/link";
import UniversalDownloader from "@/components/UniversalDownloader";

export const metadata: Metadata = {
  title: "Instagram Reel Downloader – Download Reels in HD | VidNova",
  description:
    "Download Instagram Reels in HD with VidNova. Paste a public Instagram Reel URL and download the video quickly and easily.",
  keywords: [
    "instagram reel downloader",
    "instagram reels downloader",
    "download instagram reels",
    "instagram video downloader",
    "instagram reel downloader hd",
    "instagram reel download",
  ],
  alternates: {
    canonical:
      "https://vidnova.com/instagram/reel-downloader",
  },
  openGraph: {
    title:
      "Instagram Reel Downloader – Download Reels in HD | VidNova",
    description:
      "Download Instagram Reels in HD with VidNova. Fast and simple Instagram Reel downloader.",
    url:
      "https://vidnova.com/instagram/reel-downloader",
    siteName: "VidNova",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InstagramReelDownloaderPage() {
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

            <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
              Instagram Video Downloader
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Instagram HD Reel Downloader
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Download public Instagram Reels in HD quality
              with VidNova. Paste an Instagram Reel URL below
              to get your downloadable video.
            </p>

          </div>
        </div>
      </section>

      {/* DOWNLOADER */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">

          <UniversalDownloader
            platform="instagram"
            title="Instagram Reel Downloader"
            placeholder="Paste Instagram Reel URL here..."
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
              Simple Instagram Reel Downloads
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              VidNova makes it easy to process public
              Instagram Reel URLs from one simple interface.
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
                Paste your public Instagram Reel URL and let
                VidNova process the media.
              </p>

            </div>

            {/* FEATURE 2 */}
            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">

              <div className="text-3xl">
                🎬
              </div>

              <h3 className="mt-5 text-xl font-bold">
                HD Reel Downloads
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Choose from the downloadable video options
                returned for the Reel.
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
                Use the downloader comfortably on desktop,
                tablet, or mobile devices.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* HOW TO */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">

          <h2 className="text-center text-3xl font-bold md:text-4xl">
            How to Download an Instagram Reel
          </h2>

          <div className="mt-10 space-y-5">

            {/* STEP 1 */}
            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <h3 className="text-lg font-bold">
                1. Copy the Instagram Reel URL
              </h3>

              <p className="mt-2 leading-7 text-zinc-400">
                Open the public Instagram Reel you want to
                download and copy its URL.
              </p>

            </div>

            {/* STEP 2 */}
            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <h3 className="text-lg font-bold">
                2. Paste the URL
              </h3>

              <p className="mt-2 leading-7 text-zinc-400">
                Paste the Reel URL into the VidNova Instagram
                Reel Downloader above.
              </p>

            </div>

            {/* STEP 3 */}
            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <h3 className="text-lg font-bold">
                3. Download the Reel
              </h3>

              <p className="mt-2 leading-7 text-zinc-400">
                After the Reel is processed, select the
                available download option to save the video.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="border-t border-zinc-800/70 bg-[#0a1424] px-6 py-20">
        <div className="mx-auto max-w-4xl">

          <h2 className="text-3xl font-bold md:text-4xl">
            Free Instagram Reel Downloader
          </h2>

          <div className="mt-7 space-y-6 leading-8 text-zinc-400">

            <p>
              VidNova Instagram Reel Downloader is designed to
              provide a simple way to process public Instagram
              Reel URLs. Instead of dealing with complicated
              tools, you can paste the Reel link directly into
              the downloader and check the available video.
            </p>

            <p>
              The downloader works with public Instagram Reel
              links. Copy the URL of the Reel you want to
              process, paste it into the tool, and start the
              download process.
            </p>

            <p>
              VidNova focuses on keeping the experience simple,
              fast, and easy to use across desktop and mobile
              devices.
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
                Can I download any Instagram Reel?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                VidNova is designed for publicly accessible
                Instagram Reel URLs. Private or restricted
                content may not be available.
              </p>

            </details>

            {/* FAQ 2 */}
            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <summary className="cursor-pointer font-bold">
                Is the Instagram Reel downloader free?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                VidNova provides this downloader as a free tool,
                subject to the service availability and usage
                limits of the underlying processing service.
              </p>

            </details>

            {/* FAQ 3 */}
            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <summary className="cursor-pointer font-bold">
                Do I need to install an app?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                No. The downloader works directly through your
                web browser.
              </p>

            </details>

            {/* FAQ 4 */}
            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">

              <summary className="cursor-pointer font-bold">
                Can I use VidNova on my phone?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                Yes. The page is designed to work on mobile,
                tablet, and desktop screens.
              </p>

            </details>

          </div>
        </div>
      </section>

    </main>
  );
}
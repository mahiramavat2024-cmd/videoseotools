import type { Metadata } from "next";
import Link from "next/link";

const platforms = [
  {
    name: "Instagram",
    icon: "📸",
    title: "Instagram HD Reel Downloader",
    description:
      "Download public Instagram Reels and videos in HD.",
    href: "/instagram/reel-downloader",
  },
  {
    name: "YouTube",
    icon: "▶️",
    title: "YouTube HD Video Downloader",
    description:
      "Download YouTube videos from public video URLs.",
    href: "/youtube/video-downloader",
  },
  {
    name: "TikTok",
    icon: "🎵",
    title: "TikTok Video Downloader",
    description:
      "Download public TikTok videos quickly and easily.",
    href: "/tiktok/video-downloader",
  },
  {
    name: "X / Twitter",
    icon: "𝕏",
    title: "Twitter/X Video Downloader",
    description:
      "Download videos from public X and Twitter posts.",
    href: "/twitter/video-downloader",
  },
  {
    name: "Facebook",
    icon: "📘",
    title: "Facebook Video Downloader",
    description:
      "Download publicly accessible Facebook videos.",
    href: "/facebook/video-downloader",
  },
];

export const metadata: Metadata = {
  title:
    "Universal Video Downloader – Instagram, YouTube, TikTok, X & Facebook | VidNova",

  description:
    "VidNova Universal Video Downloader lets you download public videos from Instagram, YouTube, TikTok, X/Twitter and Facebook.",

  keywords: [
    "universal video downloader",
    "video downloader",
    "instagram video downloader",
    "youtube video downloader",
    "tiktok video downloader",
    "twitter video downloader",
    "x video downloader",
    "facebook video downloader",
  ],

  alternates: {
    canonical:
      "https://vidnova.com/universal-video-downloader",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function UniversalVideoDownloaderPage() {
  return (
    <main className="min-h-screen bg-[#08111f] text-white">

      {/* HERO */}

      <section className="px-6 pb-14 pt-12 md:pt-16">

        <div className="mx-auto max-w-6xl">

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-[#0d1828] px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-cyan-500/50 hover:text-cyan-400"
          >
            ← Back to Home
          </Link>

          <div className="mx-auto mt-12 max-w-4xl text-center">

            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-400">
              🌐 Universal Downloader
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Universal Video Downloader
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Download public videos from Instagram,
              YouTube, TikTok, X and Facebook with
              VidNova.
            </p>

          </div>

        </div>

      </section>

      {/* PLATFORM SELECTION */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <h2 className="text-3xl font-bold md:text-4xl">
              Select a Platform
            </h2>

            <p className="mt-4 text-zinc-400">
              Choose the platform you want to download
              a video from.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {platforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.href}
                className="group rounded-3xl border border-zinc-800 bg-[#0d1828] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-[#101d30] hover:shadow-[0_0_35px_rgba(6,182,212,0.10)]"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
                    {platform.icon}
                  </div>

                  <span className="text-xl text-zinc-600 transition group-hover:text-cyan-400">
                    →
                  </span>

                </div>

                <h3 className="mt-6 text-xl font-bold group-hover:text-cyan-400">
                  {platform.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {platform.description}
                </p>

                <div className="mt-6 font-semibold text-cyan-400">
                  Open Downloader →
                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* INFO */}

      <section className="border-y border-zinc-800/70 bg-[#0a1424] px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            One Place for Multiple Video Downloaders
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            VidNova brings multiple platform-specific
            video downloaders together in one simple
            interface. Select Instagram, YouTube, TikTok,
            X or Facebook and use the dedicated downloader
            for that platform.
          </p>

        </div>

      </section>

    </main>
  );
}
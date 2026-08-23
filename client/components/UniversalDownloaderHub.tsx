import Link from "next/link";

const platforms = [
  {
    name: "Instagram",
    icon: "📸",
    description: "Download Instagram Reels and videos in HD.",
    href: "/instagram/reel-downloader",
    color:
      "hover:border-pink-500/60 hover:bg-pink-500/5",
  },
  {
    name: "YouTube",
    icon: "▶️",
    description: "Download YouTube videos quickly and easily.",
    href: "/youtube/video-downloader",
    color:
      "hover:border-red-500/60 hover:bg-red-500/5",
  },
  {
    name: "TikTok",
    icon: "🎵",
    description: "Download TikTok videos from public links.",
    href: "/tiktok/video-downloader",
    color:
      "hover:border-cyan-500/60 hover:bg-cyan-500/5",
  },
  {
    name: "X / Twitter",
    icon: "𝕏",
    description: "Download videos from X and Twitter posts.",
    href: "/twitter/video-downloader",
    color:
      "hover:border-zinc-400/60 hover:bg-zinc-500/5",
  },
  {
    name: "Facebook",
    icon: "📘",
    description: "Download public Facebook videos.",
    href: "/facebook/video-downloader",
    color:
      "hover:border-blue-500/60 hover:bg-blue-500/5",
  },
];

export default function UniversalDownloaderHub() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* MAIN FEATURE CARD */}

        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0d1d30] via-[#0b1728] to-[#08111f] p-6 shadow-[0_0_50px_rgba(6,182,212,0.08)] md:p-10">

          {/* Background Glow */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">

            {/* HEADER */}

            <div className="text-center">

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold text-cyan-400">
                🌐 VidNova Downloader
              </span>

              <h2 className="mt-5 text-3xl font-extrabold text-white md:text-5xl">
                Universal Video Downloader
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
                Download videos from Instagram, YouTube,
                TikTok, X and Facebook using one simple
                downloader.
              </p>

            </div>

            {/* PLATFORM GRID */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

              {platforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.href}
                  className={`group rounded-2xl border border-zinc-800 bg-[#0d1828] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] ${platform.color}`}
                >

                  <div className="flex items-center justify-between">

                    <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                      {platform.icon}
                    </div>

                    <span className="text-zinc-600 transition group-hover:text-cyan-400">
                      →
                    </span>

                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-cyan-400">
                    {platform.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {platform.description}
                  </p>

                  <div className="mt-4 text-sm font-semibold text-cyan-400">
                    Download →
                  </div>

                </Link>
              ))}

            </div>

            {/* BOTTOM CTA */}

            <div className="mt-8 text-center">

              <Link
                href="/universal-video-downloader"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-3.5 font-bold text-black transition hover:bg-cyan-400"
              >
                Open Universal Downloader →
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
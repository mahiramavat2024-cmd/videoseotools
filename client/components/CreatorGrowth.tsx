import Link from "next/link";

const platforms = [
  {
    name: "YouTube",
    icon: "▶️",
    color: "border-red-500/20 hover:border-red-500/50",
    bg: "bg-red-500/10",
    text: "text-red-400",
    description:
      "Learn YouTube SEO, keywords, titles, thumbnails, Shorts and channel growth strategies.",
    href: "/blog/youtube",
  },
  {
    name: "Instagram",
    icon: "📸",
    color: "border-pink-500/20 hover:border-pink-500/50",
    bg: "bg-pink-500/10",
    text: "text-pink-400",
    description:
      "Grow your Instagram with Reels strategies, Instagram SEO, content ideas and engagement tips.",
    href: "/blog/instagram",
  },
  {
    name: "TikTok",
    icon: "🎵",
    color: "border-purple-500/20 hover:border-purple-500/50",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    description:
      "Discover TikTok SEO, hooks, hashtags, video ideas, captions and audience growth strategies.",
    href: "/blog/tiktok",
  },
  {
    name: "Facebook",
    icon: "📘",
    color: "border-blue-500/20 hover:border-blue-500/50",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    description:
      "Learn Facebook content strategy, Reels, page growth, engagement and video marketing tips.",
    href: "/blog/facebook",
  },
  {
    name: "Vimeo",
    icon: "🎬",
    color: "border-cyan-500/20 hover:border-cyan-500/50",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    description:
      "Improve Vimeo SEO, video optimization, keywords, descriptions and audience growth.",
    href: "/blog/vimeo",
  },
  {
    name: "Pinterest",
    icon: "📌",
    color: "border-rose-500/20 hover:border-rose-500/50",
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    description:
      "Learn Pinterest SEO, keywords, Pins, boards, content strategy and traffic growth.",
    href: "/blog/pinterest",
  },
];

export default function CreatorGrowth() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] px-6 py-24 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold tracking-wide text-cyan-400">
            🚀 100% CREATOR GROWTH
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Grow on Every
            <span className="text-cyan-400"> Platform</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Free growth guides, SEO strategies and practical tips for
            YouTube, Instagram, TikTok, Facebook, Vimeo and Pinterest.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.href}
              className={`group rounded-2xl border bg-[#0d1522] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-[#101b2b] ${platform.color}`}
            >
              {/* Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${platform.bg}`}
              >
                {platform.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-extrabold">
                {platform.name} Growth
              </h3>

              {/* Description */}
              <p className="mt-3 min-h-[84px] text-sm leading-7 text-zinc-400">
                {platform.description}
              </p>

              {/* Link */}
              <div
                className={`mt-6 font-bold transition-transform duration-300 group-hover:translate-x-1 ${platform.text}`}
              >
                Read Growth Guide →
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-xl border border-zinc-700 px-7 py-4 font-bold text-white transition hover:border-cyan-500 hover:bg-cyan-500/10"
          >
            Explore All Creator Guides →
          </Link>
        </div>
      </div>
    </section>
  );
}
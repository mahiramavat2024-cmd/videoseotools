import Link from "next/link";

const instagramTools = [
  {
    icon: "🔑",
    title: "Keyword Generator",
    description:
      "Find relevant Instagram keywords for Reels, posts and content ideas.",
    href: "/instagram/keyword-generator",
    active: true,
  },
  {
    icon: "🏷️",
    title: "Tags Generator",
    description:
      "Generate relevant Instagram tags and hashtags for better discovery.",
    href: "/instagram/tags-generator",
    active: true,
  },
  {
    icon: "✍️",
    title: "Caption Generator",
    description:
      "Create engaging captions for Instagram Reels, posts and photos.",
    href: "/instagram/caption-generator",
    active: false,
  },
  {
    icon: "🎬",
    title: "Script Generator",
    description:
      "Create short-form Instagram Reel scripts with hooks and CTAs.",
    href: "/instagram/script-generator",
    active: false,
  },
  {
    icon: "🚀",
    title: "SEO Title Generator",
    description:
      "Generate clickable and SEO-friendly titles for Instagram content.",
    href: "/instagram/seo-title-generator",
    active: false,
  },
];

export default function InstagramToolsSection() {
  return (
    <section className="border-t border-zinc-800/70 bg-[#0a1424] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-400">
            📸 INSTAGRAM TOOLS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-white md:text-5xl">
            Grow Your Instagram
            <br />
            <span className="text-pink-400">
              With Smarter SEO Tools
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Generate keywords, tags, captions, scripts and SEO-friendly
            content for Instagram with VidNova's AI-powered tools.
          </p>
        </div>

        {/* TOOLS GRID */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {instagramTools.map((tool) => {
            if (!tool.active) {
              return (
                <div
                  key={tool.title}
                  className="relative rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 opacity-75"
                >
                  {/* Coming Soon */}
                  <span className="absolute right-4 top-4 rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
                    Soon
                  </span>

                  <div className="text-3xl">{tool.icon}</div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {tool.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {tool.description}
                  </p>

                  <div className="mt-5 text-sm font-semibold text-zinc-600">
                    Coming Soon →
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:bg-[#101d30] hover:shadow-xl hover:shadow-pink-500/5"
              >
                <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                  {tool.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-white group-hover:text-pink-400">
                  {tool.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {tool.description}
                </p>

                <div className="mt-5 text-sm font-semibold text-pink-400">
                  Open Tool →
                </div>
              </Link>
            );
          })}
        </div>

        {/* TRUST LINE */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span>✓ AI-powered</span>
          <span>✓ Free tools</span>
          <span>✓ Built for creators</span>
          <span>✓ Instagram focused</span>
        </div>
      </div>
    </section>
  );
}
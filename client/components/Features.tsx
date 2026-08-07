export default function Features() {
  const features = [
    {
      title: "AI Powered",
      desc: "Generate SEO optimized content with AI.",
      icon: "🤖",
    },
    {
      title: "Fast Results",
      desc: "Create titles, tags and descriptions in seconds.",
      icon: "⚡",
    },
    {
      title: "SEO Optimized",
      desc: "Designed to improve discoverability.",
      icon: "📈",
    },
    {
      title: "Multi Platform",
      desc: "Support for YouTube, Instagram, TikTok, Facebook & Vimeo.",
      icon: "🌍",
    },
  ];

  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Why Choose videoseotools?
          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            Everything creators need to grow faster with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#111827] border border-gray-800 p-8 hover:border-cyan-500 transition"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
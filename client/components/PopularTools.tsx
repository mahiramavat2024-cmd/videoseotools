import ToolCard from "./ToolCard";

export default function PopularTools() {
  return (
    <section
      id="tools"
      className="bg-[#08111f] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Popular AI Tools
          </h2>

          <p className="mt-4 text-gray-400 text-lg">
            Everything you need to grow on YouTube,
            Instagram, TikTok, Facebook and Vimeo.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <ToolCard
            emoji="🎬"
            title="YouTube Title"
            description="Generate high CTR YouTube titles."
            href="/youtube/title-generator"
          />

          <ToolCard
            emoji="📝"
            title="Description"
            description="SEO optimized video descriptions."
            href="#"
          />

          <ToolCard
            emoji="#️⃣"
            title="Hashtags"
            description="Trending hashtags instantly."
            href="#"
          />

          <ToolCard
            emoji="📸"
            title="Instagram Caption"
            description="Generate viral Instagram captions."
            href="/instagram-caption-generator"
          />

          <ToolCard
            emoji="🎵"
            title="TikTok Caption"
            description="AI captions for TikTok videos."
            href="#"
          />

          <ToolCard
            emoji="📘"
            title="Facebook Post"
            description="Create engaging Facebook posts."
            href="#"
          />

          <ToolCard
            emoji="🎥"
            title="Vimeo SEO"
            description="Optimize your Vimeo videos."
            href="#"
          />

          <ToolCard
            emoji="🏷️"
            title="Tags Generator"
            description="Generate powerful SEO tags."
            href="#"
          />

        </div>

      </div>
    </section>
  );
}
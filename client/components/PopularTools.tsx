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
            Popular AI SEO Tools
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Free AI-powered SEO tools to help video creators generate
            better titles, descriptions, tags and hashtags.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <ToolCard
            emoji="🎬"
            title="Title Generator"
            description="Generate high CTR YouTube titles."
            href="/youtube/title-generator"
          />

          <ToolCard
            emoji="📝"
            title="Description Generator"
            description="Generate SEO-friendly descriptions."
            href="/youtube/description-generator"
          />

          <ToolCard
            emoji="🏷️"
            title="Tags Generator"
            description="Generate powerful YouTube tags."
            href="/youtube/tags-generator"
          />

          <ToolCard
            emoji="#️⃣"
            title="Hashtag Generator"
            description="Generate trending hashtags instantly."
            href="/youtube/hashtag-generator"
          />

        </div>

      </div>
    </section>
  );
}
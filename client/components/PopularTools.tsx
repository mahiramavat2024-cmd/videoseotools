import ToolCard from "./ToolCard";

export default function PopularTools() {
  return (
    <section>
      <div className="text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
          Most Popular AI Tools
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Free AI YouTube SEO Tools
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Create high-performing YouTube titles, descriptions,
          tags, hashtags and keywords using powerful AI.
          Designed for creators, marketers and businesses who
          want more views, better rankings and faster channel growth.
        </p>

      </div>

      {/* =========================
          POPULAR AI TOOLS
      ========================= */}

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

        {/* Title Generator */}
        <ToolCard
          emoji="🎬"
          title="AI Title Generator"
          description="Generate click-worthy YouTube titles that improve CTR and attract more viewers."
          href="/youtube/title-generator"
        />

        {/* Description Generator */}
        <ToolCard
          emoji="📝"
          title="AI Description Generator"
          description="Create SEO-optimized YouTube descriptions to improve search visibility."
          href="/youtube/description-generator"
        />

        {/* Tags Generator */}
        <ToolCard
          emoji="🏷️"
          title="AI Tags Generator"
          description="Generate relevant YouTube tags to help your videos rank higher."
          href="/youtube/tags-generator"
        />

        {/* Hashtag Generator */}
        <ToolCard
          emoji="#️⃣"
          title="AI Hashtag Generator"
          description="Find relevant hashtags to increase reach and discoverability."
          href="/youtube/hashtag-generator"
        />

        {/* Keyword Generator */}
        <ToolCard
          emoji="🔑"
          title="AI Keyword Generator"
          description="Discover powerful YouTube keywords and search terms to optimize your videos for search."
          href="/youtube/keyword-generator"
        />

      </div>

      {/* =========================
          BOTTOM CTA
      ========================= */}

      <div className="mt-16 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center">

        <h3 className="text-3xl font-bold text-white">
          Everything You Need to Grow on YouTube
        </h3>

        <p className="mx-auto mt-4 max-w-3xl leading-8 text-zinc-400">
          VideoSEOTools helps creators generate SEO-friendly content
          in seconds. Whether you're a beginner or a professional,
          our free AI tools make it easier to optimize every upload
          for better rankings and more views.
        </p>

      </div>

    </section>
  );
}
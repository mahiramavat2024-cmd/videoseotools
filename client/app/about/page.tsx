import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About videoseotools",
  description:
    "Learn about videoseotools, an AI-powered platform helping creators generate SEO-friendly YouTube titles, descriptions, tags, and hashtags.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] text-white py-20">
        <div className="mx-auto max-w-5xl px-6">

          <h1 className="text-5xl font-bold mb-8">
            About videoseotools
          </h1>

          <div className="space-y-6 text-lg text-zinc-300 leading-8">

            <p>
              videoseotools is an AI-powered platform built for YouTube creators,
              marketers, businesses, and content creators who want to grow
              faster with better SEO.
            </p>

            <p>
              Our tools help generate high-quality YouTube titles,
              descriptions, tags, and hashtags using advanced AI models.
            </p>

            <p>
              Whether you are a beginner or an experienced creator,
              videoseotools helps you save time while improving your video's
              visibility and click-through rate.
            </p>

            <p>
              We continuously improve our AI tools to provide accurate,
              SEO-friendly, and creator-focused content generation.
            </p>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
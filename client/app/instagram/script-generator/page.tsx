import type { Metadata } from "next";
import GeneratorForm from "@/components/GeneratorForm";

export const metadata: Metadata = {
  title: "Instagram Script Generator – AI Reel Script Generator | VidNova",
  description:
    "Generate engaging Instagram Reel scripts with VidNova AI. Create hooks, content ideas, CTAs and short-form video scripts.",
  keywords: [
    "instagram script generator",
    "instagram reel script generator",
    "reel script generator",
    "instagram ai script generator",
    "reels script generator",
  ],
};

export default function InstagramScriptGeneratorPage() {
  return (
    <main className="min-h-screen bg-[#08111f] px-6 pb-20 pt-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-400">
          Instagram AI Tools
        </span>

        <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
          Instagram Script Generator
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
          Create engaging Instagram Reel scripts with AI. Generate hooks,
          talking points, calls-to-action and short-form content ideas.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-5xl">
        <GeneratorForm
          title="Create Your Instagram Reel Script"
          placeholder="Enter your Reel topic..."
          aiType="instagram-script"
        />
      </div>

      <section className="mx-auto mt-20 max-w-4xl border-t border-zinc-800 pt-16">
        <h2 className="text-3xl font-bold">
          AI Instagram Reel Script Generator
        </h2>

        <div className="mt-6 space-y-5 leading-8 text-zinc-400">
          <p>
            VidNova Instagram Script Generator helps creators develop
            short-form video scripts for Instagram Reels. Enter a topic,
            niche or content idea and generate script ideas with AI.
          </p>

          <p>
            Use the generated scripts to plan your opening hook, main
            content, value points and call-to-action before recording
            your Reel.
          </p>

          <p>
            The tool is designed for creators, businesses and social media
            marketers who want to create engaging Instagram content faster.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl">
        <h2 className="text-3xl font-bold">
          How to Generate an Instagram Reel Script
        </h2>

        <div className="mt-7 space-y-4">
          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
            <h3 className="font-bold">1. Enter your topic</h3>
            <p className="mt-2 text-zinc-400">
              Enter the topic or idea you want to create a Reel about.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
            <h3 className="font-bold">2. Generate your script</h3>
            <p className="mt-2 text-zinc-400">
              Click Generate and let VidNova create script ideas.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
            <h3 className="font-bold">3. Copy and create</h3>
            <p className="mt-2 text-zinc-400">
              Copy your preferred script and use it while creating your
              Instagram Reel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
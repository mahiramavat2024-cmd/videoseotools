import Link from "next/link";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolSearch from "@/components/ToolSearch";
import PopularTools from "@/components/PopularTools";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      {/* Navigation */}
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section>
        <Hero />
      </section>

      {/* =========================================================
          CREATOR REVIEWS
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-zinc-800/70 bg-[#0a1424] px-6 py-20">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold tracking-wide text-cyan-400">
              ⭐ CREATOR REVIEWS
            </span>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Built for YouTube Creators
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              See why creators use simple AI-powered tools to speed up their
              YouTube content workflow.
            </p>
          </div>

          {/* Reviews */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* REVIEW 1 */}
            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]">
              <div className="text-lg tracking-wide text-yellow-400">
                ★★★★★
              </div>

              <p className="mt-5 text-base leading-7 text-zinc-300">
                “A simple workflow for getting title, keyword and description
                ideas before publishing a video.”
              </p>

              <div className="mt-6 border-t border-zinc-800 pt-5">
                <p className="font-bold text-white">YouTube Creator</p>

                <p className="mt-1 text-sm text-zinc-500">
                  Content & SEO Workflow
                </p>
              </div>
            </div>

            {/* REVIEW 2 */}
            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]">
              <div className="text-lg tracking-wide text-yellow-400">
                ★★★★★
              </div>

              <p className="mt-5 text-base leading-7 text-zinc-300">
                “The tools make it much faster to turn a video topic into
                useful SEO ideas and a clear content plan.”
              </p>

              <div className="mt-6 border-t border-zinc-800 pt-5">
                <p className="font-bold text-white">YouTube Creator</p>

                <p className="mt-1 text-sm text-zinc-500">
                  Video Content Creator
                </p>
              </div>
            </div>

            {/* REVIEW 3 */}
            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]">
              <div className="text-lg tracking-wide text-yellow-400">
                ★★★★★
              </div>

              <p className="mt-5 text-base leading-7 text-zinc-300">
                “Useful when I need quick keyword, title and content ideas
                without spending a lot of time researching manually.”
              </p>

              <div className="mt-6 border-t border-zinc-800 pt-5">
                <p className="font-bold text-white">YouTube Creator</p>

                <p className="mt-1 text-sm text-zinc-500">
                  Creator Tools User
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-zinc-600">
            Sample creator feedback shown for layout purposes. Replace these
            with verified user testimonials as your creator community grows.
          </p>
        </div>
      </section>

      {/* =========================================================
          YOUTUBE CREATOR TOOLS
      ========================================================= */}
      <section
        id="youtube-tools"
        className="relative overflow-hidden border-y border-zinc-800/70 bg-[#08111f] px-6 py-20"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold tracking-wide text-cyan-400">
              🚀 YOUTUBE CREATOR TOOLS
            </span>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Everything You Need to{" "}
              <span className="text-cyan-400">
                Grow on YouTube
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              Create better videos, optimize your content, discover keywords,
              generate scripts and estimate your YouTube channel earnings.
            </p>
          </div>

          {/* 7 Tools */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. TITLE */}
            <Link
              href="/youtube/title-generator"
              className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/60 hover:bg-[#101d30] hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                🎬
              </div>

              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-400">
                YouTube Title Generator
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Generate catchy and SEO-friendly YouTube titles that attract
                more clicks.
              </p>

              <div className="mt-5 font-semibold text-cyan-400">
                Open Tool →
              </div>
            </Link>

            {/* 2. DESCRIPTION */}
            <Link
              href="/youtube/description-generator"
              className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/60 hover:bg-[#101d30] hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                📝
              </div>

              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-400">
                YouTube Description Generator
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Create structured, readable and SEO-friendly YouTube
                descriptions.
              </p>

              <div className="mt-5 font-semibold text-cyan-400">
                Open Tool →
              </div>
            </Link>

            {/* 3. TAGS */}
            <Link
              href="/youtube/tags-generator"
              className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/60 hover:bg-[#101d30] hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                🏷️
              </div>

              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-400">
                YouTube Tags Generator
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Generate relevant YouTube tags based on your video topic.
              </p>

              <div className="mt-5 font-semibold text-cyan-400">
                Open Tool →
              </div>
            </Link>

            {/* 4. HASHTAGS */}
            <Link
              href="/youtube/hashtag-generator"
              className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/60 hover:bg-[#101d30] hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                #️⃣
              </div>

              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-400">
                YouTube Hashtag Generator
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Find relevant hashtag ideas to improve your YouTube content
                strategy.
              </p>

              <div className="mt-5 font-semibold text-cyan-400">
                Open Tool →
              </div>
            </Link>

            {/* 5. KEYWORDS */}
            <Link
              href="/youtube/keyword-generator"
              className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/60 hover:bg-[#101d30] hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                🔑
              </div>

              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-400">
                YouTube Keyword Generator
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Find powerful keywords and SEO search terms for your videos.
              </p>

              <div className="mt-5 font-semibold text-cyan-400">
                Open Tool →
              </div>
            </Link>

            {/* 6. SCRIPT */}
            <Link
              href="/youtube/script-generator"
              className="group rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/60 hover:bg-[#101d30] hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                🎥
              </div>

              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-400">
                YouTube Script Generator
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Create engaging scripts with hooks, storytelling and visual
                suggestions.
              </p>

              <div className="mt-5 font-semibold text-cyan-400">
                Open Tool →
              </div>
            </Link>

            {/* 7. EARNINGS */}
            <Link
              href="/youtube/earnings-checker"
              className="group rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]"
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                💰
              </div>

              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-400">
                YouTube Earnings Checker
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Check estimated views, daily earnings, monthly earnings and
                yearly YouTube income.
              </p>

              <div className="mt-5 font-semibold text-cyan-400">
                Check Earnings →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          100% CREATOR GROWTH
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-zinc-800/70 bg-[#08111f] px-6 py-24">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold tracking-wide text-cyan-400">
              🚀 100% CREATOR GROWTH
            </span>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              Grow on Every{" "}
              <span className="text-cyan-400">Platform</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Free creator growth guides, SEO strategies and practical tips
              for YouTube, Instagram, TikTok, Facebook, Vimeo and Pinterest.
            </p>
          </div>

          {/* Platform Articles */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* YouTube */}
            <Link
              href="/blog/youtube/how-to-grow-a-youtube-channel"
              className="group overflow-hidden rounded-2xl border border-red-500/20 bg-[#0d1522] transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-2xl"
            >
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-red-500/20 to-red-900/10">
                <div className="text-6xl transition-transform duration-300 group-hover:scale-110">
                  ▶️
                </div>
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                  YouTube Growth
                </span>

                <h3 className="mt-3 text-2xl font-extrabold">
                  How to Grow a YouTube Channel in 2026
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  Learn YouTube SEO, keyword research, video ideas, titles,
                  thumbnails, Shorts and audience growth strategies.
                </p>

                <div className="mt-6 font-bold text-red-400 transition-transform group-hover:translate-x-1">
                  Read Article →
                </div>
              </div>
            </Link>

            {/* Instagram */}
            <Link
              href="/blog/instagram/how-to-grow-on-instagram"
              className="group overflow-hidden rounded-2xl border border-pink-500/20 bg-[#0d1522] transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-2xl"
            >
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-pink-500/20 to-purple-900/10">
                <div className="text-6xl transition-transform duration-300 group-hover:scale-110">
                  📸
                </div>
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
                  Instagram Growth
                </span>

                <h3 className="mt-3 text-2xl font-extrabold">
                  How to Grow on Instagram in 2026
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  Learn Instagram SEO, Reels strategies, content ideas,
                  hashtags, engagement and follower growth techniques.
                </p>

                <div className="mt-6 font-bold text-pink-400 transition-transform group-hover:translate-x-1">
                  Read Article →
                </div>
              </div>
            </Link>

            {/* TikTok */}
            <Link
              href="/blog/tiktok/how-to-grow-on-tiktok"
              className="group overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0d1522] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-2xl"
            >
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-900/10">
                <div className="text-6xl transition-transform duration-300 group-hover:scale-110">
                  🎵
                </div>
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  TikTok Growth
                </span>

                <h3 className="mt-3 text-2xl font-extrabold">
                  How to Grow on TikTok in 2026
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  Discover TikTok SEO, hooks, hashtags, video ideas,
                  captions and strategies to grow your audience.
                </p>

                <div className="mt-6 font-bold text-purple-400 transition-transform group-hover:translate-x-1">
                  Read Article →
                </div>
              </div>
            </Link>

            {/* Facebook */}
            <Link
              href="/blog/facebook/how-to-grow-on-facebook"
              className="group overflow-hidden rounded-2xl border border-blue-500/20 bg-[#0d1522] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl"
            >
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-900/10">
                <div className="text-6xl transition-transform duration-300 group-hover:scale-110">
                  📘
                </div>
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Facebook Growth
                </span>

                <h3 className="mt-3 text-2xl font-extrabold">
                  How to Grow on Facebook in 2026
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  Learn Facebook Reels, page growth, content strategy,
                  engagement and video marketing techniques.
                </p>

                <div className="mt-6 font-bold text-blue-400 transition-transform group-hover:translate-x-1">
                  Read Article →
                </div>
              </div>
            </Link>

            {/* Vimeo */}
            <Link
              href="/blog/vimeo/how-to-grow-on-vimeo"
              className="group overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0d1522] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-2xl"
            >
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-900/10">
                <div className="text-6xl transition-transform duration-300 group-hover:scale-110">
                  🎬
                </div>
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Vimeo Growth
                </span>

                <h3 className="mt-3 text-2xl font-extrabold">
                  How to Grow on Vimeo in 2026
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  Learn Vimeo SEO, video optimization, keywords,
                  descriptions, thumbnails and audience growth strategies.
                </p>

                <div className="mt-6 font-bold text-cyan-400 transition-transform group-hover:translate-x-1">
                  Read Article →
                </div>
              </div>
            </Link>

            {/* Pinterest */}
            <Link
              href="/blog/pinterest/how-to-grow-on-pinterest"
              className="group overflow-hidden rounded-2xl border border-rose-500/20 bg-[#0d1522] transition-all duration-300 hover:-translate-y-2 hover:border-rose-500/50 hover:shadow-2xl"
            >
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-rose-500/20 to-red-900/10">
                <div className="text-6xl transition-transform duration-300 group-hover:scale-110">
                  📌
                </div>
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  Pinterest Growth
                </span>

                <h3 className="mt-3 text-2xl font-extrabold">
                  How to Grow on Pinterest in 2026
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  Learn Pinterest SEO, keywords, Pins, boards, content
                  strategy and ways to increase traffic.
                </p>

                <div className="mt-6 font-bold text-rose-400 transition-transform group-hover:translate-x-1">
                  Read Article →
                </div>
              </div>
            </Link>
          </div>

          {/* All Guides Button */}
          <div className="mt-14 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
            >
              📚 Explore All Creator Guides →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOOL SEARCH
      ========================================================= */}
      <section id="tools" className="mx-auto max-w-7xl px-6 py-16">
        <ToolSearch />
      </section>

      {/* =========================================================
          POPULAR TOOLS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <PopularTools />
      </section>

      {/* =========================================================
          SEO CONTENT
      ========================================================= */}
      <section className="border-y border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              YouTube SEO Tools
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Free AI Tools for YouTube Creators
            </h2>
          </div>

          <div className="mt-10 space-y-6 text-base leading-8 text-zinc-300">
            <p>
              VideoSEOTools provides free AI-powered tools designed to help
              YouTube creators plan, optimize, and improve their video
              content. You can generate YouTube titles, descriptions, tags,
              and hashtags based on your video topic.
            </p>

            <p>
              Creating a YouTube video is only one part of growing a channel.
              Your title, description, keywords, and overall content strategy
              also help viewers understand what your video is about. Our tools
              are built to make that optimization process faster and easier.
            </p>

            <p>
              Whether you are starting a new YouTube channel, publishing
              Shorts, creating educational videos, making tutorials, or
              producing entertainment content, VideoSEOTools gives you
              practical tools to generate ideas and SEO-focused content.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FREE YOUTUBE SEO TOOLS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Explore Our Tools
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            YouTube SEO Tools You Can Use for Free
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-zinc-400">
            Choose a tool based on what you need for your next YouTube video.
            Generate titles, descriptions, tags, hashtags, or keywords and
            optimize your content workflow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/youtube/title-generator"
            className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-3xl">🎬</div>

            <h3 className="mt-4 text-xl font-bold">
              YouTube Title Generator
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Generate engaging and SEO-friendly YouTube title ideas based on
              your video topic.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-400">
              Try Title Generator →
            </span>
          </Link>

          <Link
            href="/youtube/description-generator"
            className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-3xl">📝</div>

            <h3 className="mt-4 text-xl font-bold">
              YouTube Description Generator
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Create structured, readable and SEO-friendly YouTube
              descriptions.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-400">
              Try Description Generator →
            </span>
          </Link>

          <Link
            href="/youtube/tags-generator"
            className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-3xl">🏷️</div>

            <h3 className="mt-4 text-xl font-bold">
              YouTube Tags Generator
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Generate relevant YouTube tag ideas for your video topic.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-400">
              Try Tags Generator →
            </span>
          </Link>

          <Link
            href="/youtube/hashtag-generator"
            className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-3xl">#️⃣</div>

            <h3 className="mt-4 text-xl font-bold">
              YouTube Hashtag Generator
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Find relevant hashtag ideas for your YouTube videos and content.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-400">
              Try Hashtag Generator →
            </span>
          </Link>

          <Link
            href="/youtube/keyword-generator"
            className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6 transition hover:border-cyan-500/50 hover:bg-[#101d30]"
          >
            <div className="text-3xl">🔍</div>

            <h3 className="mt-4 text-xl font-bold">
              YouTube Keyword Generator
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Find powerful YouTube keywords and keyword ideas to optimize
              your videos and reach more viewers.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-400">
              Try Keyword Generator →
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          WHAT IS YOUTUBE SEO
      ========================================================= */}
      <section className="border-y border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            What Is YouTube SEO?
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300">
            <p>
              YouTube SEO is the process of improving the information and
              content around a video so that viewers and search engines can
              better understand its topic.
            </p>

            <p>
              This can include creating a clear title, writing a useful
              description, selecting relevant terms, and making content that
              matches what viewers are looking for.
            </p>

            <p>
              Good YouTube optimization is not only about adding keywords.
              Your video should provide useful content for the audience while
              your title and description accurately communicate what viewers
              can expect.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Simple Workflow
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            How to Use VideoSEOTools
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              1
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Enter Your Topic
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Enter your video topic, idea, or subject into the generator you
              want to use.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              2
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Generate Ideas
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Use the AI tool to generate title, description, tag, hashtag, or
              keyword ideas for your content.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              3
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Improve Your Video
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Review the generated suggestions and adapt them to your
              audience, video, and content style.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Features />
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="border-t border-zinc-800/70 bg-[#0a1424]">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              YouTube SEO Tools FAQ
            </h2>
          </div>

          <div className="mt-12 space-y-5">
            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                What is VideoSEOTools?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                VideoSEOTools is a platform of AI-powered tools for creators.
                The tools help generate titles, descriptions, tags,
                hashtags and other content ideas.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Is VideoSEOTools free?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                The YouTube SEO tools currently available on VideoSEOTools
                are offered as free tools for creators.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Can these tools help with YouTube SEO?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                The tools can help you create and organize SEO-focused
                content such as titles, descriptions, tags and hashtags.
              </p>
            </details>

            <details className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Which YouTube SEO tool should I use first?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                Start with the{" "}
                <Link
                  href="/youtube/title-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  YouTube Title Generator
                </Link>
                , then use the{" "}
                <Link
                  href="/youtube/description-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  Description Generator
                </Link>
                ,{" "}
                <Link
                  href="/youtube/tags-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  Tags Generator
                </Link>
                , and{" "}
                <Link
                  href="/youtube/hashtag-generator"
                  className="font-semibold text-cyan-400 hover:underline"
                >
                  Hashtag Generator
                </Link>
                .
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <CTA />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
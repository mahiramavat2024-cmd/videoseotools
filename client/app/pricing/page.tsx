
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";


export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-center text-6xl font-extrabold">
            Simple Pricing
          </h1>

          <p className="mt-6 text-center text-xl text-zinc-400">
            Choose the perfect plan for your content creation journey.
          </p>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">

            {/* FREE */}

            <div className="rounded-3xl border border-zinc-700 bg-[#111827] p-10">

              <h2 className="text-4xl font-bold">
                Free
              </h2>

              <div className="mt-6 text-6xl font-extrabold">
                $0
              </div>

              <p className="mt-2 text-zinc-400">
                Forever Free
              </p>

              <ul className="mt-10 space-y-4 text-lg">

                <li>✅ 20 AI Generations / Day</li>
                <li>✅ YouTube SEO Tools</li>
                <li>✅ Instagram Tools</li>
                <li>✅ TikTok Tools</li>
                <li>✅ Facebook Tools</li>
                <li>✅ Vimeo Tools</li>
                <li>✅ Basic SEO Score</li>
                <li>❌ History</li>
                <li>❌ Export</li>

              </ul>

              <button className="mt-12 w-full rounded-xl bg-zinc-700 py-4 font-bold">
                Current Plan
              </button>

            </div>

            {/* PRO */}

            <div className="rounded-3xl border-2 border-cyan-500 bg-[#111827] p-10">

              <span className="rounded-full bg-cyan-500 px-4 py-2 text-black font-bold">
                MOST POPULAR
              </span>

              <h2 className="mt-6 text-4xl font-bold">
                PRO
              </h2>

              <div className="mt-6 flex items-end gap-2">

                <span className="text-6xl font-extrabold">
                  $5
                </span>

                <span className="pb-2 text-xl text-zinc-400">
                  /month
                </span>

              </div>

              <ul className="mt-10 space-y-4 text-lg">

                <li>🚀 Unlimited AI</li>
                <li>🚀 Advanced SEO Analysis</li>
                <li>🚀 CTR Prediction</li>
                <li>🚀 AI Script Generator</li>
                <li>🚀 Thumbnail Ideas</li>
                <li>🚀 Save History</li>
                <li>🚀 Export TXT / PDF</li>
                <li>🚀 No Ads</li>
                <li>🚀 Priority Speed</li>

              </ul>

              <button className="mt-12 w-full rounded-xl bg-cyan-500 py-4 font-bold text-black hover:bg-cyan-400">
                Upgrade to PRO
              </button>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}
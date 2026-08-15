import type { Metadata } from "next";
import EarningsChecker from "@/components/EarningsChecker";

export const metadata: Metadata = {
  title: "YouTube Channel Earnings Checker | VideoSEOTools",
  description:
    "Check estimated YouTube channel views, earnings, subscribers and performance using public channel data.",
};

export default function YouTubeEarningsCheckerPage() {
  return (
    <main className="min-h-screen bg-[#06101f]">
      <EarningsChecker />
    </main>
  );
}
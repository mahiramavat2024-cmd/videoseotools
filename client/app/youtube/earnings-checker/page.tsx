import type { Metadata } from "next";
import EarningsChecker from "@/components/EarningsChecker";

export const metadata: Metadata = {
  title:
    "YouTube Channel Earnings Checker - Estimate YouTube Revenue",
  description:
    "Check estimated YouTube channel earnings, monthly revenue, yearly revenue, subscribers, views and estimated RPM.",
};

export default function YouTubeEarningsCheckerPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-4 py-16 text-white">
      <EarningsChecker />
    </main>
  );
}
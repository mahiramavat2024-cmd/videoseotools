import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact VideoSEOTools",
  description:
    "Contact VideoSEOTools for questions, feedback, suggestions or business inquiries.",
  alternates: {
    canonical: "https://videoseotools.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      <Navbar />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
              GET IN TOUCH
            </span>

            <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
              Contact <span className="text-cyan-400">VideoSEOTools</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Have a question, suggestion or feedback? We would love
              to hear from you.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-8">
              <div className="text-4xl">💬</div>

              <h2 className="mt-5 text-2xl font-bold">
                General Questions
              </h2>

              <p className="mt-3 leading-7 text-zinc-400">
                If you have questions about our tools or how
                VideoSEOTools works, you can contact us.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#0d1828] p-8">
              <div className="text-4xl">💡</div>

              <h2 className="mt-5 text-2xl font-bold">
                Feedback & Suggestions
              </h2>

              <p className="mt-3 leading-7 text-zinc-400">
                Have an idea for a new tool or feature? Your feedback
                can help us improve VideoSEOTools.
              </p>
            </div>

          </div>

          <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center">

            <h2 className="text-2xl font-bold">
              Email Us
            </h2>

            <p className="mt-3 text-zinc-400">
              For questions, feedback and business inquiries:
            </p>

            <a
              href="mailto:contact@videoseotools.com"
              className="mt-5 inline-block text-lg font-bold text-cyan-400 hover:underline"
            >
              contact@videoseotools.com
            </a>

          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex rounded-xl bg-cyan-500 px-7 py-3 font-bold text-black hover:bg-cyan-400"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-[#06101f]">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} VideoSEOTools. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
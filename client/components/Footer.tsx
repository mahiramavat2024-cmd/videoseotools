import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#08111f]">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* Brand */}
          <div className="max-w-md">

            <div className="flex items-center gap-3">

              <Image
                src="/logo.png"
                alt="VideoSEOTools Logo"
                width={42}
                height={42}
              />

              <h2 className="text-2xl font-bold text-cyan-400">
                VideoSEOTools
              </h2>

            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              VideoSEOTools is a free AI-powered platform built for YouTube
              creators, marketers and content creators. Generate SEO-optimized
              titles, descriptions, tags, hashtags, hooks and scripts in
              seconds.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link href="/" className="hover:text-cyan-400 transition">
                Home
              </Link>

              <Link
                href="/youtube/title-generator"
                className="hover:text-cyan-400 transition"
              >
                Title Generator
              </Link>

              <Link
                href="/pricing"
                className="hover:text-cyan-400 transition"
              >
                Pricing
              </Link>

              <Link
                href="/about"
                className="hover:text-cyan-400 transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-cyan-400 transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Legal */}
          <div>

            <h3 className="mb-4 text-lg font-semibold text-white">
              Legal
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link
                href="/privacy"
                className="hover:text-cyan-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-cyan-400 transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6 text-center">

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} VideoSEOTools. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}
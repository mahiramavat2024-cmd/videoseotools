import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#08111f]">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* Brand */}
          <div className="max-w-md">

            <h2 className="text-2xl font-bold text-cyan-400">
              VideoSEOTools
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              VideoSEOTools is a free AI-powered platform built for
              YouTube creators, marketers and content creators.
              Generate SEO-optimized titles, descriptions, tags,
              hashtags, hooks and scripts in seconds.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link
                href="/"
                className="transition hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                href="/youtube/title-generator"
                className="transition hover:text-cyan-400"
              >
                Title Generator
              </Link>

              <Link
                href="/about"
                className="transition hover:text-cyan-400"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-cyan-400"
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
                className="transition hover:text-cyan-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-cyan-400"
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
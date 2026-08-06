import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#08111f]">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              VideoSEOTools
            </h2>

            <p className="mt-2 max-w-md text-sm text-zinc-400">
              Free AI-powered SEO tools for YouTube and video creators.
              Generate titles, descriptions, tags and hashtags in seconds.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">

            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>

            <Link
              href="/youtube/title-generator"
              className="hover:text-cyan-400"
            >
              Title Generator
            </Link>

            <Link
              href="/pricing"
              className="hover:text-cyan-400"
            >
              Pricing
            </Link>

            <Link
              href="/privacy-policy"
              className="hover:text-cyan-400"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="hover:text-cyan-400"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="hover:text-cyan-400"
            >
              Contact
            </Link>

          </div>

        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} VideoSEOTools. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
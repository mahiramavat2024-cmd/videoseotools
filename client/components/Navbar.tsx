import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-[#08111f]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="VideoSEOTools Logo"
            width={42}
            height={42}
            priority
          />

          <span className="text-2xl font-extrabold tracking-tight text-cyan-400">
            VideoSEOTools
          </span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6 text-sm font-medium">

          <Link href="/" className="transition hover:text-cyan-400">
            Home
          </Link>

          <Link
            href="/youtube/title-generator"
            className="transition hover:text-cyan-400"
          >
            Title Generator
          </Link>

          <Link
            href="/youtube/description-generator"
            className="transition hover:text-cyan-400"
          >
            Description
          </Link>

          <Link
            href="/youtube/tags-generator"
            className="transition hover:text-cyan-400"
          >
            Tags
          </Link>

          <Link
            href="/youtube/hashtag-generator"
            className="transition hover:text-cyan-400"
          >
            Hashtags
          </Link>

          <Link
            href="/pricing"
            className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black transition hover:bg-cyan-400"
          >
            Pricing
          </Link>

        </div>

      </div>
    </nav>
  );
}
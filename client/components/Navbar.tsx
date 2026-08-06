import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-[#08111f]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-cyan-400">
          VidNova
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link
            href="/youtube/title-generator"
            className="hover:text-cyan-400"
          >
            YouTube Title
          </Link>
        </div>
      </div>
    </nav>
  );
}<Link href="/pricing">Pricing</Link>
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#08111f] text-white px-6">

      <h1 className="text-8xl font-extrabold">
        404
      </h1>

      <p className="mt-6 text-xl text-zinc-400">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400"
      >
        Back to Home
      </Link>

    </main>
  );
}
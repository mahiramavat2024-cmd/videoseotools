"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { tools } from "@/data";

export default function ToolSearch() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return tools.filter((tool) =>
      tool.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="bg-[#0b1220] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Find Any Tool
        </h2>

        <p className="mt-3 text-center text-gray-400">
          Search from all available VidNova tools.
        </p>

        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-10 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filtered.map((tool) => (
            <Link
              key={`${tool.platform}-${tool.slug}`}
              href={`/${tool.platform}/${tool.slug}`}
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 hover:border-cyan-500 transition"
            >
              <h3 className="text-xl font-bold">
                {tool.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {tool.platform.toUpperCase()}
              </p>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
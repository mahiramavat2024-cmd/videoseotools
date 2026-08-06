import Link from "next/link";
import { tools } from "@/data";

type Props = {
  related: string[];
  platform: string;
};

export default function RelatedTools({
  related,
  platform,
}: Props) {
  const items = tools.filter((tool) =>
    related.includes(tool.slug)
  );

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-white">
        Related Tools
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${platform}/${tool.slug}`}
            className="rounded-xl border border-zinc-700 bg-zinc-900 p-5 hover:border-cyan-500"
          >
            <div className="text-xl font-bold">
              {tool.icon} {tool.title}
            </div>

            <p className="mt-2 text-zinc-400">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  emoji: string;
};

export default function ToolCard({
  title,
  description,
  href,
  emoji,
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]"
    >
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-4xl">
        {emoji}
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-white transition group-hover:text-cyan-400">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between">

        <span className="font-semibold text-cyan-400 transition group-hover:translate-x-1">
          Open Tool →
        </span>

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
          FREE
        </span>

      </div>
    </Link>
  );
}
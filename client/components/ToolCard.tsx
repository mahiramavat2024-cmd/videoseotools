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
      className="group block rounded-2xl border border-zinc-800 bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
        {emoji}
      </div>

      <h3 className="mt-5 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-zinc-400">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-semibold text-cyan-400">
          Open Tool →
        </span>

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
          Free
        </span>
      </div>
    </Link>
  );
}
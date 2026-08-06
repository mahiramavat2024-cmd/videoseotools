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
      className="rounded-2xl border border-gray-800 bg-[#111827] p-6 hover:border-cyan-500 hover:-translate-y-1 transition block"
    >
      <div className="text-5xl">{emoji}</div>

      <h3 className="mt-5 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-gray-400">
        {description}
      </p>
    </Link>
  );
}
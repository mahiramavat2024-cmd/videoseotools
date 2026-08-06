type Props = {
  tips: string[];
};

export default function ToolTips({ tips }: Props) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-white">
        Tips
      </h2>

      <ul className="mt-6 space-y-4">
        {tips.map((tip) => (
          <li
            key={tip}
            className="rounded-xl border border-zinc-700 bg-zinc-900 p-4"
          >
            ✅ {tip}
          </li>
        ))}
      </ul>
    </section>
  );
}
type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({
  items,
}: {
  items: FAQItem[];
}) {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-white">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 space-y-6">
        {items.map((faq) => (
          <div
            key={faq.question}
            className="rounded-xl border border-zinc-700 bg-zinc-900 p-6"
          >
            <h3 className="text-xl font-semibold">
              {faq.question}
            </h3>

            <p className="mt-3 text-gray-400">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
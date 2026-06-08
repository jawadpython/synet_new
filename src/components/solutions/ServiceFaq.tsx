type ServiceFaqProps = {
  items: { question: string; answer: string }[];
  heading?: string;
};

export function ServiceFaq({ items, heading = "FAQ" }: ServiceFaqProps) {
  if (items.length === 0) return null;

  return (
    <div>
      <h2 className="text-heading-lg text-navy-800">{heading}</h2>
      <dl className="mt-6 space-y-6">
        {items.map((item) => (
          <div key={item.question} className="rounded-[4px] border border-neutral-200 bg-white p-6">
            <dt className="text-heading-sm text-navy-800">{item.question}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-neutral-700">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

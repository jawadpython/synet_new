type ServiceFaqProps = {
  items: { question: string; answer: string }[];
  heading?: string;
};

export function ServiceFaq({ items, heading }: ServiceFaqProps) {
  if (items.length === 0) return null;

  return (
    <div>
      {heading ? <h2 className="text-heading-lg text-navy-800">{heading}</h2> : null}
      <dl className={heading ? "mt-6 space-y-6" : "space-y-6"}>
        {items.map((item) => (
          <div key={item.question} className="synet-card-static p-7">
            <dt className="text-heading-sm text-navy-800">{item.question}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-neutral-500">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

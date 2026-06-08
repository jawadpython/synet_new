import { Check } from "lucide-react";

type BulletListProps = {
  items: string[];
};

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check
            className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span className="text-neutral-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

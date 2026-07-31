import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: number;
  suffix?: string;
  href?: string;
  icon: LucideIcon;
  className?: string;
};

export function StatCard({ label, value, suffix, href, icon: Icon, className }: StatCardProps) {
  const content = (
    <div
      className={cn(
        "rounded-[4px] border border-neutral-200 bg-white p-5 transition-colors",
        href && "hover:border-blue-200 hover:shadow-sm",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-500">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-navy-800">
            {value}
            {suffix && <span className="ms-2 text-sm font-normal text-neutral-500">{suffix}</span>}
          </p>
        </div>
        <div className="rounded-[4px] bg-blue-50 p-2 text-blue-600">
          <Icon size={20} aria-hidden />
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

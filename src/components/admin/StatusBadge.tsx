import { cn } from "@/lib/utils";
import { statusLabel } from "@/lib/admin/copy";

const statusStyles: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  in_review: "bg-amber-100 text-amber-800",
  contacted: "bg-violet-100 text-violet-800",
  qualified: "bg-teal-100 text-teal-800",
  enrolled: "bg-green-100 text-green-800",
  converted: "bg-green-100 text-green-800",
  proposal_sent: "bg-indigo-100 text-indigo-800",
  won: "bg-green-100 text-green-800",
  lost: "bg-neutral-200 text-neutral-600",
  spam: "bg-red-100 text-red-700",
  archived: "bg-neutral-100 text-neutral-500",
};

type StatusBadgeProps = {
  status: string;
  className?: string;
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-[2px] px-2 py-0.5 text-xs font-semibold",
        statusStyles[status] ?? "bg-neutral-100 text-neutral-700",
        className,
      )}
    >
      {statusLabel(status)}
    </span>
  );
}

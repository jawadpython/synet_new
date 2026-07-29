import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { AudienceTile as AudienceTileType } from "@/lib/i18n/types";

type AudienceTileProps = {
  tile: AudienceTileType;
  href: string;
};

export function AudienceTile({ tile, href }: AudienceTileProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-card transition-shadow duration-200 hover:shadow-card-hover",
      )}
    >
      <Icon
        name={tile.icon}
        className="h-5 w-5 shrink-0 text-blue-600"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <span className="text-sm font-semibold text-navy-800">{tile.label}</span>
    </Link>
  );
}

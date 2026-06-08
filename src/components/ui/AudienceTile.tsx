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
        "flex items-center gap-3 rounded-[4px] border border-transparent bg-neutral-100 p-4",
        "transition-colors duration-150 hover:border-blue-600",
      )}
    >
      <Icon
        name={tile.icon}
        className="h-6 w-6 shrink-0 text-blue-600"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <span className="text-sm font-semibold text-navy-800">{tile.label}</span>
    </Link>
  );
}

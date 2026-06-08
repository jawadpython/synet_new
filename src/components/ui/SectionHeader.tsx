import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  id?: string;
  overline: string;
  heading: string;
  lead?: string;
  dark?: boolean;
  className?: string;
};

export function SectionHeader({
  id,
  overline,
  heading,
  lead,
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("mb-10 md:mb-12", className)}>
      <p
        className={cn(
          "text-overline mb-3",
          dark ? "text-blue-400" : "text-blue-600",
        )}
      >
        {overline}
      </p>
      <h2
        id={id}
        className={cn(
          "text-heading-xl max-w-3xl",
          dark ? "text-white" : "text-navy-800",
        )}
      >
        {heading}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed",
            dark ? "text-neutral-200" : "text-neutral-700",
          )}
        >
          {lead}
        </p>
      )}
    </header>
  );
}

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  id?: string;
  overline: string;
  heading: string;
  lead?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
};

export function SectionHeader({
  id,
  overline,
  heading,
  lead,
  dark = false,
  align = "left",
  className,
  action,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "mb-10 md:mb-14",
        action && "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        centered && !action && "text-center",
        className,
      )}
    >
      <div className={cn(centered && !action && "mx-auto")}>
        <p className={cn("text-overline", dark && "text-blue-300")}>{overline}</p>
        <h2
          id={id}
          className={cn(
            "text-heading-xl mt-3",
            centered && !action ? "mx-auto max-w-3xl" : "max-w-3xl",
            dark ? "text-white" : "text-navy-800",
          )}
        >
          {heading}
        </h2>
        {lead && (
          <p
            className={cn(
              "mt-4 text-base leading-relaxed md:text-lg",
              centered && !action ? "mx-auto max-w-2xl" : "max-w-2xl",
              dark ? "text-white/80" : "text-neutral-500",
            )}
          >
            {lead}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </header>
  );
}

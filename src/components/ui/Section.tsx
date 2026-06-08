import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionBackground = "white" | "neutral-50" | "neutral-100" | "navy-800" | "navy-900";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: SectionBackground;
  containerClassName?: string;
  ariaLabelledby?: string;
};

const backgroundStyles: Record<SectionBackground, string> = {
  white: "bg-white",
  "neutral-50": "bg-neutral-50",
  "neutral-100": "bg-neutral-100",
  "navy-800": "bg-navy-800 text-white",
  "navy-900": "bg-navy-900 text-white",
};

export function Section({
  id,
  children,
  className,
  background = "white",
  containerClassName,
  ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("py-16 md:py-20", backgroundStyles[background], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";

type HeroStatsSectionProps = {
  dictionary: Dictionary;
};

export function HeroStatsSection({ dictionary }: HeroStatsSectionProps) {
  const { stats } = dictionary.hero;

  return (
    <section className="bg-[#F3F7FC] py-12 md:py-16" aria-label={dictionary.hero.overline}>
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center md:px-6 lg:px-8 md:text-start ${
                index > 0 ? "md:border-s md:border-[#D5E2F2]" : ""
              }`}
            >
              <p className="font-sans text-[2.1rem] font-bold leading-none text-[#0B6BFF] md:text-[2.75rem]">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold leading-snug text-[#1E3A5F] md:text-[15px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { ArrowRight, Star } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { heroPeople } from "@/lib/site/hero-visuals";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type HeroSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[440px] lg:h-[480px]">
      {/* Blue disc behind the study scenes */}
      <div
        className="absolute end-0 top-[10%] size-[80%] rounded-full bg-[#0B6BFF]"
        aria-hidden="true"
      />

      {/* Three IT-study scenes — rectangular so laptops/code stay visible */}
      <div className="absolute inset-0 z-[2]">
        <div className="absolute bottom-[12%] start-0 z-[1] h-[58%] w-[42%] overflow-hidden rounded-2xl border-[3px] border-white shadow-md">
          <img
            src={heroPeople[0].src}
            alt={heroPeople[0].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="absolute bottom-[4%] start-[28%] z-[3] h-[72%] w-[48%] overflow-hidden rounded-2xl border-[3px] border-white shadow-lg">
          <img
            src={heroPeople[1].src}
            alt={heroPeople[1].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="absolute bottom-[18%] end-0 z-[2] h-[54%] w-[40%] overflow-hidden rounded-2xl border-[3px] border-white shadow-md">
          <img
            src={heroPeople[2].src}
            alt={heroPeople[2].alt}
            className="h-full w-full object-cover object-[center_30%]"
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-20 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

export function HeroSection({ locale, dictionary }: HeroSectionProps) {
  const { hero, trainingOverview } = dictionary;
  const rtl = locale === "ar";
  const formationsHref = `#${trainingOverview.id}`;

  return (
    <section
      className="relative overflow-hidden bg-white pt-6 md:pt-10 lg:pt-12"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -start-14 top-2 select-none font-sans text-[16rem] font-bold leading-none text-[#EEF2F7] md:text-[22rem] lg:text-[26rem]"
        aria-hidden="true"
      >
        S
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-6 pb-8 lg:grid-cols-2 lg:gap-10 lg:pb-10">
          <div className="relative z-10 max-w-xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F5B400] text-[#F5B400]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#0A4DB5]">{hero.trust[0]?.label}</span>
            </div>

            <h1
              id="hero-heading"
              className="font-sans text-[2.1rem] font-bold leading-[1.15] tracking-tight text-[#0A4DB5] sm:text-[2.55rem] md:text-[2.9rem] lg:text-[3.15rem]"
            >
              {hero.headline} {hero.headlineAccent}
            </h1>

            <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-[#6B7C93] md:text-base">
              {hero.lead}
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Button
                href={formationsHref}
                variant="primary"
                size="lg"
                className="rounded-lg bg-[#0B6BFF] px-7 text-[12px] font-bold uppercase tracking-wide hover:bg-[#0958d6]"
              >
                {hero.ctaTraining}
              </Button>
              <a
                href={formationsHref}
                className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[#0A4DB5] hover:text-[#0B6BFF]"
              >
                {hero.ctaSolutions}
                <ArrowRight className={`h-4 w-4 ${rtl ? "rotate-180" : ""}`} aria-hidden="true" />
              </a>
            </div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Building2, GraduationCap } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { getSolutionsHubUrl } from "@/lib/solutions/paths";
import { getTrainingHubUrl } from "@/lib/training/paths";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

type HeroSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HeroSection({ locale, dictionary }: HeroSectionProps) {
  const { hero, businessOverview, trainingOverview } = dictionary;

  return (
    <section
      className="bg-navy-800 py-16 text-white md:py-24"
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <p className="text-overline mb-4 text-blue-400">{hero.overline}</p>
            <h1 id="hero-heading" className="text-display-lg text-white">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-200">
              {hero.lead}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={getSolutionsHubUrl(locale)}
                variant="white"
                size="lg"
              >
                {hero.ctaSolutions}
              </Button>
              <Button
                href={getTrainingHubUrl(locale)}
                variant="outline-white"
                size="lg"
              >
                {hero.ctaTraining}
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-lg">
              <Link
                href={`#${businessOverview.id}`}
                className="rounded-[4px] border border-navy-600 bg-navy-700/50 p-4 transition-colors duration-150 hover:border-blue-600"
              >
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-blue-400" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-sm font-semibold">{hero.chipBusiness}</span>
                </div>
                <p className="mt-1 text-xs text-neutral-400">{hero.chipBusinessSub}</p>
              </Link>
              <Link
                href={`#${trainingOverview.id}`}
                className="rounded-[4px] border border-navy-600 bg-navy-700/50 p-4 transition-colors duration-150 hover:border-blue-600"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-400" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-sm font-semibold">{hero.chipTraining}</span>
                </div>
                <p className="mt-1 text-xs text-neutral-400">{hero.chipTrainingSub}</p>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-[4px] border border-navy-600 bg-navy-700"
              role="img"
              aria-label={hero.imageAlt}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <div className="flex gap-6">
                  <Building2 className="h-12 w-12 text-blue-400/80" strokeWidth={1.25} aria-hidden="true" />
                  <GraduationCap className="h-12 w-12 text-blue-400/80" strokeWidth={1.25} aria-hidden="true" />
                </div>
                <p className="text-sm text-neutral-300">{hero.imageAlt}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

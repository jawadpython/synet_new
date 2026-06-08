import type { Locale } from "@/lib/i18n/config";
import type { BusinessPagesCopy } from "@/lib/i18n/types";
import type { Service } from "@/lib/solutions/types";
import { getQuoteUrl } from "@/lib/solutions/paths";
import { localizedPath } from "@/lib/i18n/paths";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";

type ServiceCtaBandProps = {
  locale: Locale;
  copy: BusinessPagesCopy;
  service?: Service;
  contactPath: string;
};

export function ServiceCtaBand({
  locale,
  copy,
  service,
  contactPath,
}: ServiceCtaBandProps) {
  return (
    <section className="bg-navy-800 py-16 text-white md:py-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-heading-xl text-white">{copy.cta.heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-200">{copy.cta.lead}</p>
            <p className="mt-2 text-sm text-blue-400">{copy.cta.responseTime}</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                href={getQuoteUrl(locale, service?.slug)}
                variant="white"
                size="lg"
              >
                {copy.cta.requestQuote}
              </Button>
              <Button
                href={localizedPath(locale, contactPath)}
                variant="outline-white"
                size="lg"
              >
                {copy.cta.contactUs}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

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
    <section className="relative overflow-hidden bg-neutral-100 py-16 md:py-24">
      <div
        className="pointer-events-none absolute -end-10 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(5,105,255,0.12),transparent_70%)]"
        aria-hidden="true"
      />
      <Container>
        <FadeIn>
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <h2 className="text-heading-xl text-navy-800">{copy.cta.heading}</h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base leading-relaxed text-neutral-500">{copy.cta.lead}</p>
              <p className="mt-2 text-sm font-semibold text-blue-600">{copy.cta.responseTime}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-3 lg:flex-col lg:justify-self-end">
              <Button href={getQuoteUrl(locale, service?.slug)} variant="primary" size="lg">
                {copy.cta.requestQuote}
              </Button>
              <Button href={localizedPath(locale, contactPath)} variant="outline-blue" size="lg">
                {copy.cta.contactUs}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

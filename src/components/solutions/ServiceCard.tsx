import type { Service } from "@/lib/solutions/types";
import type { Locale } from "@/lib/i18n/config";
import type { BusinessPagesCopy } from "@/lib/i18n/types";
import { getQuoteUrl, getServiceUrl } from "@/lib/solutions/paths";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ServiceVisual } from "./ServiceVisual";

type ServiceCardProps = {
  service: Service;
  locale: Locale;
  copy: BusinessPagesCopy;
};

export function ServiceCard({ service, locale, copy }: ServiceCardProps) {
  const rtl = locale === "ar";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-neutral-200 bg-white transition-colors duration-150 hover:border-blue-600">
      <ServiceVisual variant={service.imageVariant} className="aspect-[21/9] w-full" />
      <div className="flex flex-1 flex-col p-6">
        <Icon
          name={service.icon}
          className="h-8 w-8 text-blue-600"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <h3 className="text-heading-sm mt-4 text-navy-800">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-700">
          {service.shortDescription}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <ArrowLink href={getServiceUrl(locale, service.slug)} rtl={rtl}>
            {copy.card.viewService}
          </ArrowLink>
          <Button href={getQuoteUrl(locale, service.slug)} variant="primary" size="sm">
            {copy.card.requestQuote}
          </Button>
        </div>
      </div>
    </article>
  );
}

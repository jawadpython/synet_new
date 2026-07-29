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
    <article className="synet-card group flex h-full flex-col overflow-hidden">
      <ServiceVisual
        variant={service.imageVariant}
        className="aspect-[16/10] w-full rounded-none"
      />
      <div className="flex flex-1 flex-col p-6">
        <Icon
          name={service.icon}
          className="h-8 w-8 text-blue-600"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <h3 className="font-heading mt-5 text-xl font-medium text-navy-800">{service.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-500">
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

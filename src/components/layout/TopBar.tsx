"use client";

import { Clock, Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { Container } from "@/components/ui/Container";
import type { SiteContactInfo } from "@/lib/site/contact-info";

type TopBarProps = {
  locale: Locale;
  dictionary: Dictionary;
  contactInfo?: SiteContactInfo;
};

export function TopBar({ locale, dictionary, contactInfo }: TopBarProps) {
  const pathname = usePathname();
  const info = contactInfo ?? dictionary.footer.contactInfo;

  const homePath = localizedPath(locale, "/");
  const isHome =
    pathname === homePath ||
    pathname === `/${locale}` ||
    pathname === `/${locale}/`;

  // Homepage uses a transparent header over the dark hero — hide the light top bar there.
  if (isHome) {
    return null;
  }

  return (
    <div className="wp-topbar hidden md:block">
      <Container as="div" className="flex h-9 items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={`tel:${info.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600"
            dir="ltr"
          >
            <Phone className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
            {info.phone}
          </a>
          <a
            href={`mailto:${info.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600"
            dir="ltr"
          >
            <Mail className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
            {info.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
            {info.hours}
          </span>
        </div>
      </Container>
    </div>
  );
}

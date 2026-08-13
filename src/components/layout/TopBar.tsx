"use client";

import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/ui/Container";
import type { SiteContactInfo } from "@/lib/site/contact-info";
import { toTelHref, toWhatsAppHref } from "@/lib/site/nap";

type TopBarProps = {
  locale: Locale;
  dictionary: Dictionary;
  contactInfo?: SiteContactInfo;
};

export function TopBar({ dictionary, contactInfo }: TopBarProps) {
  const info = contactInfo ?? dictionary.footer.contactInfo;

  return (
    <div className="wp-topbar hidden md:block">
      <Container as="div" className="flex h-9 items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={toTelHref(info.phone)}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600"
            dir="ltr"
          >
            <Phone className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
            {info.phone}
          </a>
          <a
            href={toWhatsAppHref(info.phone)}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
          >
            <MessageCircle className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
            {dictionary.footer.whatsapp}
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

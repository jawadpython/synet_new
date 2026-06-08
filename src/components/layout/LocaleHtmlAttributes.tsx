"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getDirection } from "@/lib/i18n/config";

type LocaleHtmlAttributesProps = {
  locale: Locale;
};

export function LocaleHtmlAttributes({ locale }: LocaleHtmlAttributesProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getDirection(locale);
  }, [locale]);

  return null;
}

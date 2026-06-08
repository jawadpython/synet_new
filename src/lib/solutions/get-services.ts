import type { Locale } from "@/lib/i18n/config";
import { servicesAr } from "./services/ar";
import { servicesEn } from "./services/en";
import { servicesFr } from "./services/fr";
import type { Service } from "./types";

const serviceCatalog: Record<Locale, Service[]> = {
  fr: servicesFr,
  en: servicesEn,
  ar: servicesAr,
};

export function getServices(locale: Locale): Service[] {
  return serviceCatalog[locale];
}

export function getServiceBySlug(locale: Locale, slug: string): Service | undefined {
  return getServices(locale).find((service) => service.slug === slug);
}

export function getServiceSlugs(locale: Locale): string[] {
  return getServices(locale).map((service) => service.slug);
}

export function filterServices(services: Service[], query: string): Service[] {
  const q = query.trim().toLowerCase();
  if (!q) return services;
  return services.filter(
    (service) =>
      service.name.toLowerCase().includes(q) ||
      service.shortDescription.toLowerCase().includes(q) ||
      service.description.toLowerCase().includes(q) ||
      service.technologies.some((t) => t.toLowerCase().includes(q)),
  );
}

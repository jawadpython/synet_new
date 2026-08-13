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

/** Core services shown on the public services hub. */
const FEATURED_SERVICE_IDS = [
  "web-development",
  "app-development",
  "network-infrastructure",
  "cybersecurity",
] as const;

export function getFeaturedServices(locale: Locale): Service[] {
  const catalog = getServices(locale);
  return FEATURED_SERVICE_IDS.map((id) => catalog.find((service) => service.id === id)).filter(
    (service): service is Service => Boolean(service),
  );
}

export function getServiceBySlug(locale: Locale, slug: string): Service | undefined {
  return getServices(locale).find((service) => service.slug === slug);
}

export function getServiceById(locale: Locale, id: string): Service | undefined {
  return getServices(locale).find((service) => service.id === id);
}

export function getServicesByIds(locale: Locale, ids: string[]): Service[] {
  return ids
    .map((id) => getServiceById(locale, id))
    .filter((service): service is Service => Boolean(service));
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

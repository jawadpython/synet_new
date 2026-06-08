import type { Locale } from "@/lib/i18n/config";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

export function isValidEmail(email: string): boolean {
  return EMAIL.test(email.trim());
}

export function isValidLocale(value: unknown): value is Locale {
  return value === "fr" || value === "en" || value === "ar";
}

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  intent: string;
  subject?: string;
  message: string;
  consent: boolean;
  locale: Locale;
};

export function parseContactPayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  if (!isValidLocale(b.locale)) return null;
  const name = stripHtml(String(b.name ?? ""));
  const email = stripHtml(String(b.email ?? ""));
  const message = stripHtml(String(b.message ?? ""));
  const intent = stripHtml(String(b.intent ?? ""));
  if (!name || !email || !message || !intent || b.consent !== true) return null;
  if (!isValidEmail(email)) return null;
  return {
    name,
    email,
    phone: b.phone ? stripHtml(String(b.phone)) : undefined,
    organization: b.organization ? stripHtml(String(b.organization)) : undefined,
    intent,
    subject: b.subject ? stripHtml(String(b.subject)) : undefined,
    message,
    consent: true,
    locale: b.locale,
  };
}

export type QuotePayload = {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  serviceSlug: string;
  sector: string;
  timeline: string;
  description: string;
  consent: boolean;
  locale: Locale;
};

export function parseQuotePayload(body: unknown): QuotePayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  if (!isValidLocale(b.locale)) return null;
  const company = stripHtml(String(b.company ?? ""));
  const contactName = stripHtml(String(b.contactName ?? ""));
  const email = stripHtml(String(b.email ?? ""));
  const phone = stripHtml(String(b.phone ?? ""));
  const serviceSlug = stripHtml(String(b.serviceSlug ?? ""));
  const sector = stripHtml(String(b.sector ?? ""));
  const description = stripHtml(String(b.description ?? ""));
  if (!company || !contactName || !email || !phone || !serviceSlug || !sector || !description) {
    return null;
  }
  if (b.consent !== true || !isValidEmail(email)) return null;
  return {
    company,
    contactName,
    email,
    phone,
    serviceSlug,
    sector,
    timeline: b.timeline ? stripHtml(String(b.timeline)) : "exploring",
    description,
    consent: true,
    locale: b.locale,
  };
}

export type EnrollmentPayload = {
  fullName: string;
  email: string;
  phone: string;
  courseSlug: string;
  experience: string;
  session: string;
  message?: string;
  consent: boolean;
  locale: Locale;
};

export function parseEnrollmentPayload(body: unknown): EnrollmentPayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  if (!isValidLocale(b.locale)) return null;
  const fullName = stripHtml(String(b.fullName ?? ""));
  const email = stripHtml(String(b.email ?? ""));
  const phone = stripHtml(String(b.phone ?? ""));
  const courseSlug = stripHtml(String(b.courseSlug ?? ""));
  const experience = stripHtml(String(b.experience ?? ""));
  if (!fullName || !email || !phone || !courseSlug || !experience) return null;
  if (b.consent !== true || !isValidEmail(email)) return null;
  return {
    fullName,
    email,
    phone,
    courseSlug,
    experience,
    session: b.session ? stripHtml(String(b.session)) : "",
    message: b.message ? stripHtml(String(b.message)) : undefined,
    consent: true,
    locale: b.locale,
  };
}

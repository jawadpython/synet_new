/** Canonical NAP (Name, Address, Phone) for Casablanca local SEO. Keep identical everywhere. */

export const SITE_EMAIL = "contact@synet.ma";

export const PHONE_E164 = "+212618563445";
export const PHONE_DISPLAY = "+212 6 18 56 34 45";

export const CITY = "Casablanca";
export const REGION = "Casablanca-Settat";
export const COUNTRY_CODE = "MA";
export const COUNTRY_NAME = "Morocco";

/** City-level coordinates for Casablanca (no street address yet). */
export const GEO = {
  latitude: 33.5731,
  longitude: -7.5898,
};

/** ISO 3166-2 Casablanca-Settat. */
export const GEO_REGION = "MA-06";

export const CASABLANCA_MAP_EMBED =
  "https://www.google.com/maps?q=Casablanca%2C+Morocco&z=12&output=embed";

export const CASABLANCA_MAP_SEARCH =
  "https://www.google.com/maps/search/?api=1&query=Casablanca%2C+Morocco";

/** Only emit streetAddress in schema when we have a real street, not city-only NAP. */
export function streetAddressForSchema(address: string | undefined | null): string | undefined {
  const value = address?.trim();
  if (!value) return undefined;
  if (/^(casablanca|الدار البيضاء)(\s*[,،]\s*(maroc|morocco|المغرب))?$/i.test(value)) {
    return undefined;
  }
  return value;
}

export function toTelHref(phone: string = PHONE_E164): string {
  const compact = phone.replace(/[^\d+]/g, "");
  return `tel:${compact.startsWith("+") ? compact : `+${compact}`}`;
}

export function toWhatsAppHref(phone: string = PHONE_E164): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

export function toE164(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("212")) return `+${digits}`;
  if (digits.startsWith("0") && digits.length === 10) return `+212${digits.slice(1)}`;
  if (digits.length === 9) return `+212${digits}`;
  return PHONE_E164;
}

export function isPlaceholderPhone(phone: string | undefined | null): boolean {
  if (!phone?.trim()) return true;
  return /X{2,}/i.test(phone) || !/\d{8,}/.test(phone);
}

export function formatMoroccoMobile(phone: string): string {
  if (isPlaceholderPhone(phone)) return PHONE_DISPLAY;
  const e164 = toE164(phone);
  const national = e164.replace("+212", "");
  if (national.length === 9) {
    return `+212 ${national[0]} ${national.slice(1, 3)} ${national.slice(3, 5)} ${national.slice(5, 7)} ${national.slice(7, 9)}`;
  }
  return PHONE_DISPLAY;
}

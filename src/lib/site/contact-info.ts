import {
  PHONE_DISPLAY,
  SITE_EMAIL,
} from "./nap";

export type SiteContactInfo = {
  address: string;
  phone: string;
  email: string;
  hours: string;
};

export function mergeContactInfo(
  fallback: SiteContactInfo,
  fromFirestore?: Partial<SiteContactInfo> | null,
): SiteContactInfo {
  const emailRaw = fromFirestore?.email?.trim();

  return {
    address: fromFirestore?.address?.trim() || fallback.address,
    phone: PHONE_DISPLAY,
    email: emailRaw || fallback.email || SITE_EMAIL,
    hours: fromFirestore?.hours?.trim() || fallback.hours,
  };
}

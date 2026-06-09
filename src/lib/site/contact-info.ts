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
  if (!fromFirestore) return fallback;
  return {
    address: fromFirestore.address?.trim() || fallback.address,
    phone: fromFirestore.phone?.trim() || fallback.phone,
    email: fromFirestore.email?.trim() || fallback.email,
    hours: fromFirestore.hours?.trim() || fallback.hours,
  };
}

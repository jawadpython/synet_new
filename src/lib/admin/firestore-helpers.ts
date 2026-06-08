import type { Timestamp } from "firebase-admin/firestore";

export function serializeTimestamp(value: unknown): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  const ts = value as Timestamp;
  if (typeof ts.toDate === "function") {
    return ts.toDate().toISOString();
  }
  return "";
}

export function formatAdminDate(iso: string): string {
  if (!iso) return "—";
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

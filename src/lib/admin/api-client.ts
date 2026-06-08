"use client";

import { getFirebaseAuth } from "@/lib/firebase/client";
import type { AdminListItem, AdminStats, AdminUser } from "./types";

async function adminFetch<T>(path: string, forceRefresh = false): Promise<T> {
  const user = getFirebaseAuth().currentUser;
  if (!user) throw new Error("Non connecté");
  const token = await user.getIdToken(forceRefresh);
  const res = await fetch(path, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "Erreur");
  return data as T;
}

export function fetchAdminMe(forceRefresh = false): Promise<{ user: AdminUser }> {
  return adminFetch("/api/admin/me", forceRefresh);
}

export function fetchAdminStats(): Promise<AdminStats> {
  return adminFetch("/api/admin/stats");
}

export function fetchRegistrations(): Promise<{ items: AdminListItem[] }> {
  return adminFetch("/api/admin/registrations");
}

export function fetchQuotes(): Promise<{ items: AdminListItem[] }> {
  return adminFetch("/api/admin/quotes");
}

export function fetchMessages(): Promise<{ items: AdminListItem[] }> {
  return adminFetch("/api/admin/messages");
}

"use client";

import { getFirebaseAuth } from "@/lib/firebase/client";
import type { AdminListItem, AdminStats, AdminUser } from "./types";
import type { FirestoreCourseDoc } from "@/lib/firestore/courses-types";

async function adminFetch<T>(path: string, options: RequestInit = {}, forceRefresh = false): Promise<T> {
  const user = getFirebaseAuth().currentUser;
  if (!user) throw new Error("Non connecté");
  const token = await user.getIdToken(forceRefresh);
  const res = await fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers ?? {}),
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "Erreur");
  return data as T;
}

export function fetchAdminMe(forceRefresh = false): Promise<{ user: AdminUser }> {
  return adminFetch("/api/admin/me", {}, forceRefresh);
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

export function patchRegistration(id: string, body: { status?: string; note?: string }) {
  return adminFetch(`/api/admin/registrations/${id}`, { method: "PATCH", body: JSON.stringify(body) });
}

export function patchQuote(id: string, body: { status?: string; note?: string }) {
  return adminFetch(`/api/admin/quotes/${id}`, { method: "PATCH", body: JSON.stringify(body) });
}

export function patchMessage(id: string, body: { status?: string; note?: string }) {
  return adminFetch(`/api/admin/messages/${id}`, { method: "PATCH", body: JSON.stringify(body) });
}

export function fetchAdminCourses(): Promise<{ items: Array<Record<string, unknown>> }> {
  return adminFetch("/api/admin/courses");
}

export function fetchAdminCourse(id: string): Promise<{ course: Record<string, unknown> }> {
  return adminFetch(`/api/admin/courses/${id}`);
}

export function saveAdminCourse(
  id: string | null,
  course: FirestoreCourseDoc,
  sessions: Array<Record<string, unknown>>,
) {
  if (id) {
    return adminFetch(`/api/admin/courses/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ course, sessions }),
    });
  }
  return adminFetch("/api/admin/courses", {
    method: "POST",
    body: JSON.stringify({ course, sessions }),
  });
}

export function seedAdminCourses(): Promise<{ ok: boolean; count: number }> {
  return adminFetch("/api/admin/courses", {
    method: "POST",
    body: JSON.stringify({ action: "seed" }),
  });
}

export function fetchAdminUsers(): Promise<{ items: Array<Record<string, unknown>> }> {
  return adminFetch("/api/admin/users");
}

export function fetchAdminGlobals(): Promise<{ globals: Record<string, unknown> | null }> {
  return adminFetch("/api/admin/globals");
}

export function patchAdminGlobals(globals: Record<string, unknown>) {
  return adminFetch("/api/admin/globals", { method: "PATCH", body: JSON.stringify(globals) });
}

export function fetchRegistrationDetail(id: string) {
  return adminFetch<{ item: AdminListItem & { notes?: Array<Record<string, unknown>>; activity?: Array<Record<string, unknown>> } }>(
    `/api/admin/registrations/${id}`,
  );
}

export function fetchQuoteDetail(id: string) {
  return adminFetch<{ item: AdminListItem & { notes?: Array<Record<string, unknown>>; activity?: Array<Record<string, unknown>> } }>(
    `/api/admin/quotes/${id}`,
  );
}

export function fetchMessageDetail(id: string) {
  return adminFetch<{ item: AdminListItem & { notes?: Array<Record<string, unknown>>; activity?: Array<Record<string, unknown>> } }>(
    `/api/admin/messages/${id}`,
  );
}

export function fetchAdminTestimonials(): Promise<{ items: Array<Record<string, unknown>> }> {
  return adminFetch("/api/admin/testimonials");
}

export function fetchAdminTestimonial(id: string) {
  return adminFetch<{ testimonial: Record<string, unknown> }>(`/api/admin/testimonials/${id}`);
}

export function saveAdminTestimonial(id: string, testimonial: Record<string, unknown>) {
  return adminFetch(`/api/admin/testimonials/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ testimonial }),
  });
}

export function seedAdminTestimonials(): Promise<{ ok: boolean; count: number }> {
  return adminFetch("/api/admin/testimonials", {
    method: "POST",
    body: JSON.stringify({ action: "seed" }),
  });
}

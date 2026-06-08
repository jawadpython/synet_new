import type { AdminRole } from "./types";

export function canViewQuotes(role: AdminRole): boolean {
  return role === "admin" || role === "super_admin";
}

export function canViewMessages(role: AdminRole): boolean {
  return role === "admin" || role === "super_admin";
}

export function canManageContent(role: AdminRole): boolean {
  return role === "admin" || role === "super_admin";
}

export function canManageUsers(role: AdminRole): boolean {
  return role === "admin" || role === "super_admin";
}

export function canViewSettings(role: AdminRole): boolean {
  return role === "super_admin";
}

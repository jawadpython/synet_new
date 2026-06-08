import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Quote,
  Settings,
  Star,
  UserCircle,
  Users,
} from "lucide-react";
import type { AdminRole } from "./types";
import {
  canManageContent,
  canManageUsers,
  canViewMessages,
  canViewQuotes,
} from "./permissions";
import { adminCopy } from "./copy";

export type AdminNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  roles?: AdminRole[];
};

export type AdminNavSection = {
  title?: string;
  items: AdminNavItem[];
};

export function getAdminNav(role: AdminRole): AdminNavSection[] {
  const sections: AdminNavSection[] = [
    {
      items: [
        { href: "/admin/dashboard", label: adminCopy.nav.dashboard, icon: LayoutDashboard },
      ],
    },
    {
      title: adminCopy.nav.operations,
      items: [
        { href: "/admin/registrations", label: adminCopy.nav.registrations, icon: GraduationCap },
        ...(canViewQuotes(role)
          ? [{ href: "/admin/quotes", label: adminCopy.nav.quotes, icon: Quote }]
          : []),
        ...(canViewMessages(role)
          ? [{ href: "/admin/messages", label: adminCopy.nav.messages, icon: MessageSquare }]
          : []),
      ],
    },
    {
      title: adminCopy.nav.content,
      items: [
        { href: "/admin/courses", label: adminCopy.nav.courses, icon: BookOpen },
        ...(canManageContent(role)
          ? [
              { href: "/admin/testimonials", label: adminCopy.nav.testimonials, icon: Star },
              { href: "/admin/content/globals", label: adminCopy.nav.globals, icon: Settings },
            ]
          : []),
      ],
    },
  ];

  if (canManageUsers(role)) {
    sections.push({
      title: adminCopy.nav.administration,
      items: [{ href: "/admin/users", label: adminCopy.nav.users, icon: Users }],
    });
  }

  sections.push({
    items: [{ href: "/admin/profile", label: adminCopy.nav.profile, icon: UserCircle }],
  });

  return sections;
}

export function getPageTitle(pathname: string): string {
  if (pathname.startsWith("/admin/registrations")) return adminCopy.nav.registrations;
  if (pathname.startsWith("/admin/quotes")) return adminCopy.nav.quotes;
  if (pathname.startsWith("/admin/messages")) return adminCopy.nav.messages;
  if (pathname.startsWith("/admin/courses")) return adminCopy.nav.courses;
  if (pathname.startsWith("/admin/testimonials")) return adminCopy.nav.testimonials;
  if (pathname.startsWith("/admin/content")) return adminCopy.nav.siteContent;
  if (pathname.startsWith("/admin/users")) return adminCopy.nav.users;
  if (pathname.startsWith("/admin/profile")) return adminCopy.nav.profile;
  if (pathname.startsWith("/admin/dashboard")) return adminCopy.nav.dashboard;
  return adminCopy.brand;
}

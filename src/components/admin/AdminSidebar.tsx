"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { adminCopy } from "@/lib/admin/copy";
import { getAdminNav } from "@/lib/admin/nav";
import type { AdminRole } from "@/lib/admin/types";

type AdminSidebarProps = {
  role: AdminRole;
};

export function AdminSidebar({ role }: AdminSidebarProps) {
  const pathname = usePathname();
  const sections = getAdminNav(role);

  return (
    <aside className="flex w-[260px] shrink-0 flex-col bg-navy-800 text-white">
      <div className="border-b border-white/10 px-5 py-5">
        <Link href="/admin/dashboard" className="block">
          <span className="text-lg font-semibold tracking-tight">SYNET</span>
          <span className="mt-0.5 block text-xs text-white/60">{adminCopy.brand}</span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {sections.map((section, idx) => (
          <div key={idx} className={cn(idx > 0 && "mt-6")}>
            {section.title && (
              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-white/40">
                {section.title}
              </p>
            )}
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-[4px] px-3 py-2.5 text-sm transition-colors",
                        active
                          ? "bg-white/15 font-semibold text-white"
                          : "text-white/75 hover:bg-white/10 hover:text-white",
                      )}
                    >
                      <Icon size={18} aria-hidden />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-white/10 px-5 py-4 text-xs text-white/50">
        <a href="/fr" className="hover:text-white hover:underline" target="_blank" rel="noopener noreferrer">
          Voir le site public →
        </a>
      </div>
    </aside>
  );
}

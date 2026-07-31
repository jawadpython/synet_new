"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { adminCopy } from "@/lib/admin/copy";
import { getPageTitle } from "@/lib/admin/nav";
import type { AdminUser } from "@/lib/admin/types";
import { useAdminAuth } from "./AdminAuthProvider";

type AdminTopbarProps = {
  pathname: string;
  user: AdminUser;
};

export function AdminTopbar({ pathname, user }: AdminTopbarProps) {
  const { logout } = useAdminAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/admin/login");
  };

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-neutral-200 bg-white px-6">
      <h1 className="text-lg font-semibold text-navy-800">{getPageTitle(pathname)}</h1>
      <div className="flex items-center gap-4">
        <div className="text-end text-sm">
          <p className="font-medium text-neutral-900">{user.name}</p>
          <p className="text-xs text-neutral-500">{user.email}</p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex items-center gap-2 rounded-[4px] border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          <LogOut size={16} aria-hidden />
          {adminCopy.nav.logout}
        </button>
      </div>
    </header>
  );
}

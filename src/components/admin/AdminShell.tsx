"use client";

import { usePathname } from "next/navigation";
import { useAdminAuth } from "./AdminAuthProvider";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopbar } from "./AdminTopbar";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { adminUser } = useAdminAuth();

  if (!adminUser) return null;

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <AdminSidebar role={adminUser.role} />
      <div className="flex min-w-0 flex-1 flex-col">
        <AdminTopbar pathname={pathname} user={adminUser} />
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-[1440px]">{children}</div>
        </main>
      </div>
    </div>
  );
}

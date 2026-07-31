"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAdminAuth } from "./AdminAuthProvider";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { firebaseUser, adminUser, loading, profileLoading } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading || profileLoading) return;
    if (!firebaseUser || !adminUser) {
      router.replace(`/admin/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [loading, profileLoading, firebaseUser, adminUser, router, pathname]);

  if (loading || profileLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50 text-sm text-neutral-500">
        Chargement…
      </div>
    );
  }

  if (!firebaseUser || !adminUser) return null;

  return children;
}

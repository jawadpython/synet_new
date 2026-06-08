"use client";

import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { adminCopy } from "@/lib/admin/copy";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { useAdminAuth } from "@/components/admin/AdminAuthProvider";

export default function AdminLoginPage() {
  const { firebaseUser, adminUser, loading, profileLoading } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !profileLoading && firebaseUser && adminUser) {
      router.replace("/admin/dashboard");
    }
  }, [loading, profileLoading, firebaseUser, adminUser, router]);

  if (loading || profileLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50 text-sm text-neutral-500">
        Chargement…
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-[40%] flex-col justify-between bg-navy-800 p-10 text-white lg:flex">
        <div>
          <p className="text-2xl font-semibold">SYNET</p>
          <p className="mt-2 text-sm text-white/70">{adminCopy.tagline}</p>
        </div>
        <p className="text-sm text-white/50">
          Solutions IT &amp; formation professionnelle — Maroc
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center bg-neutral-50 px-6 py-12">
        <div className="w-full max-w-md rounded-[4px] border border-neutral-200 bg-white p-8 shadow-sm">
          <div className="mb-8 lg:hidden">
            <p className="text-xl font-semibold text-navy-800">SYNET</p>
            <p className="text-sm text-neutral-500">{adminCopy.brand}</p>
          </div>
          <h1 className="text-2xl font-semibold text-navy-800">{adminCopy.login.title}</h1>
          <p className="mt-2 text-sm text-neutral-500">{adminCopy.tagline}</p>
          <div className="mt-8">
            <Suspense fallback={<p className="text-sm text-neutral-500">Chargement…</p>}>
              <AdminLoginForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

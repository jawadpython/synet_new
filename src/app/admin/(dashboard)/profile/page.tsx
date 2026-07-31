"use client";

import { adminCopy } from "@/lib/admin/copy";
import { useAdminAuth } from "@/components/admin/AdminAuthProvider";

export default function AdminProfilePage() {
  const { adminUser } = useAdminAuth();
  if (!adminUser) return null;

  return (
    <div className="max-w-lg space-y-6">
      <h2 className="text-2xl font-semibold text-navy-800">{adminCopy.profile.title}</h2>
      <dl className="divide-y divide-neutral-200 rounded-[4px] border border-neutral-200 bg-white">
        <div className="grid grid-cols-3 gap-4 px-5 py-4">
          <dt className="text-sm text-neutral-500">{adminCopy.profile.email}</dt>
          <dd className="col-span-2 text-sm font-medium text-neutral-900" dir="ltr">{adminUser.email}</dd>
        </div>
        <div className="grid grid-cols-3 gap-4 px-5 py-4">
          <dt className="text-sm text-neutral-500">Nom</dt>
          <dd className="col-span-2 text-sm font-medium text-neutral-900">{adminUser.name}</dd>
        </div>
        <div className="grid grid-cols-3 gap-4 px-5 py-4">
          <dt className="text-sm text-neutral-500">{adminCopy.profile.role}</dt>
          <dd className="col-span-2 text-sm font-medium text-neutral-900">{adminUser.role}</dd>
        </div>
      </dl>
    </div>
  );
}

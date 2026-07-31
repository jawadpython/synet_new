"use client";

import { useEffect, useState } from "react";
import { fetchAdminUsers } from "@/lib/admin/api-client";
import { adminCopy } from "@/lib/admin/copy";
import { formatAdminDate } from "@/lib/admin/firestore-helpers";

type UserRow = { id: string; name: string; email: string; role: string; active: boolean; createdAt: string };

export default function AdminUsersPage() {
  const [rows, setRows] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdminUsers()
      .then((data) => setRows(data.items as UserRow[]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-navy-800">{adminCopy.nav.users}</h2>
        <p className="mt-1 text-sm text-neutral-500">Comptes administrateurs et formateurs</p>
      </div>
      {loading ? (
        <p className="text-sm text-neutral-500">{adminCopy.table.loading}</p>
      ) : (
        <div className="overflow-x-auto rounded-[4px] border border-neutral-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-neutral-200 bg-neutral-50">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Nom</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">E-mail</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Rôle</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Actif</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Créé</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-neutral-100">
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3" dir="ltr">{row.email}</td>
                  <td className="px-4 py-3">{row.role}</td>
                  <td className="px-4 py-3">{row.active ? "Oui" : "Non"}</td>
                  <td className="px-4 py-3">{formatAdminDate(row.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

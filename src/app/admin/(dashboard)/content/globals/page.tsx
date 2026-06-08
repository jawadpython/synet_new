"use client";

import { useEffect, useState } from "react";
import { getFirebaseAuth } from "@/lib/firebase/client";
import { adminCopy } from "@/lib/admin/copy";

type GlobalsData = {
  siteName?: string;
  locales?: Record<string, { address?: string; phone?: string; email?: string; hours?: string }>;
};

export default function AdminGlobalsPage() {
  const [data, setData] = useState<GlobalsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const user = getFirebaseAuth().currentUser;
        if (!user) return;
        const token = await user.getIdToken();
        const res = await fetch("/api/admin/globals", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error);
        setData(json.globals);
      } catch {
        setError(adminCopy.table.error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return <p className="text-sm text-neutral-500">{adminCopy.table.loading}</p>;
  }

  if (error || !data) {
    return <p className="text-sm text-error-700">{error ?? adminCopy.table.error}</p>;
  }

  const locales = data.locales ?? {};

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-navy-800">{adminCopy.nav.globals}</h2>
        <p className="mt-1 text-sm text-neutral-500">
          Coordonnées affichées sur le site (lecture seule — édition à venir)
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {(["fr", "en", "ar"] as const).map((locale) => {
          const info = locales[locale];
          return (
            <div key={locale} className="rounded-[4px] border border-neutral-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">{locale}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-neutral-500">E-mail</dt>
                  <dd className="font-medium text-neutral-900" dir="ltr">{info?.email ?? "—"}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Téléphone</dt>
                  <dd className="font-medium text-neutral-900" dir="ltr">{info?.phone ?? "—"}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Adresse</dt>
                  <dd className="font-medium text-neutral-900">{info?.address ?? "—"}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Horaires</dt>
                  <dd className="font-medium text-neutral-900">{info?.hours ?? "—"}</dd>
                </div>
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
}

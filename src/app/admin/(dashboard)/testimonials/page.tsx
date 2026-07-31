"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchAdminTestimonials, seedAdminTestimonials } from "@/lib/admin/api-client";
import { adminCopy } from "@/lib/admin/copy";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/admin/StatusBadge";

type TestimonialRow = {
  id: string;
  nameFr: string;
  quoteFr: string;
  division: string;
  published: boolean;
  featured: boolean;
};

export default function AdminTestimonialsPage() {
  const [rows, setRows] = useState<TestimonialRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);

  const load = () => {
    setLoading(true);
    fetchAdminTestimonials()
      .then((data) => setRows(data.items as TestimonialRow[]))
      .catch(() => setRows([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      try {
        const data = await fetchAdminTestimonials();
        if (active) setRows(data.items as TestimonialRow[]);
      } catch {
        if (active) setRows([]);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const handleSeed = async () => {
    setSeeding(true);
    try {
      await seedAdminTestimonials();
      load();
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-navy-800">{adminCopy.nav.testimonials}</h2>
          <p className="mt-1 text-sm text-neutral-500">Témoignages affichés sur la page d&apos;accueil</p>
        </div>
        {rows.length === 0 && (
          <Button variant="secondary" onClick={handleSeed} disabled={seeding}>
            {seeding ? "Import…" : "Importer depuis le site"}
          </Button>
        )}
      </div>

      {loading ? (
        <p className="text-sm text-neutral-500">{adminCopy.table.loading}</p>
      ) : rows.length === 0 ? (
        <div className="rounded-[4px] border border-neutral-200 bg-white p-8 text-center text-sm text-neutral-500">
          Aucun témoignage en base. Cliquez « Importer depuis le site » pour migrer les témoignages actuels.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-[4px] border border-neutral-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-neutral-200 bg-neutral-50">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Auteur</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Citation</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Division</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Statut</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50/80">
                  <td className="px-4 py-3 font-medium text-neutral-900">{row.nameFr}</td>
                  <td className="px-4 py-3 text-neutral-600 max-w-xs truncate">{row.quoteFr}…</td>
                  <td className="px-4 py-3 text-neutral-600">{row.division}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.published ? "enrolled" : "new"} />
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/admin/testimonials/${row.id}`} className="text-sm font-semibold text-blue-600 hover:underline">
                      Modifier
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

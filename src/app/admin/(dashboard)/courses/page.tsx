"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { fetchAdminCourses, seedAdminCourses } from "@/lib/admin/api-client";
import { adminCopy } from "@/lib/admin/copy";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/admin/StatusBadge";

type CourseRow = {
  id: string;
  nameFr: string;
  categoryId: string;
  level: string;
  published: boolean;
  featured: boolean;
  sessionCount: number;
};

export default function AdminCoursesPage() {
  const [rows, setRows] = useState<CourseRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);

  const load = () => {
    setLoading(true);
    fetchAdminCourses()
      .then((data) => setRows(data.items as CourseRow[]))
      .catch(() => setRows([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      try {
        const data = await fetchAdminCourses();
        if (active) setRows(data.items as CourseRow[]);
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
      await seedAdminCourses();
      load();
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-navy-800">{adminCopy.nav.courses}</h2>
          <p className="mt-1 text-sm text-neutral-500">Gérez le catalogue formations (Firestore CMS)</p>
        </div>
        <div className="flex gap-2">
          {rows.length === 0 && (
            <Button variant="secondary" onClick={handleSeed} disabled={seeding}>
              {seeding ? "Import…" : "Importer depuis le site"}
            </Button>
          )}
          <Button href="/admin/courses/new" variant="primary">
            <Plus size={16} /> Nouvelle formation
          </Button>
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-neutral-500">{adminCopy.table.loading}</p>
      ) : rows.length === 0 ? (
        <div className="rounded-[4px] border border-neutral-200 bg-white p-8 text-center text-sm text-neutral-500">
          Aucune formation en base. Cliquez « Importer depuis le site » pour migrer les 7 formations actuelles.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-[4px] border border-neutral-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-neutral-200 bg-neutral-50">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Formation</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Catégorie</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Niveau</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Sessions</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Statut</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50/80">
                  <td className="px-4 py-3 font-medium text-neutral-900">{row.nameFr}</td>
                  <td className="px-4 py-3 text-neutral-600">{row.categoryId}</td>
                  <td className="px-4 py-3 text-neutral-600">{row.level}</td>
                  <td className="px-4 py-3 text-neutral-600">{row.sessionCount}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.published ? "enrolled" : "new"} />
                    <span className="sr-only">{row.published ? "Publié" : "Brouillon"}</span>
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/admin/courses/${row.id}`} className="text-sm font-semibold text-blue-600 hover:underline">
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

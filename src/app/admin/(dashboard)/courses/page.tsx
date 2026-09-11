"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { deleteAdminCourse, fetchAdminCourses, seedAdminCourses } from "@/lib/admin/api-client";
import { adminCopy } from "@/lib/admin/copy";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/admin/StatusBadge";

type CourseRow = {
  id: string;
  nameFr: string;
  priceFr?: string;
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
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);
    setError("");
    fetchAdminCourses()
      .then((data) => setRows(data.items as CourseRow[]))
      .catch((err) => {
        setRows([]);
        setError(err instanceof Error ? err.message : adminCopy.table.error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      try {
        const data = await fetchAdminCourses();
        if (active) setRows(data.items as CourseRow[]);
      } catch (err) {
        if (active) {
          setRows([]);
          setError(err instanceof Error ? err.message : adminCopy.table.error);
        }
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const handleSeed = async () => {
    if (
      rows.length > 0 &&
      !window.confirm("Importer les 7 formations du site ? Les fiches existantes avec le même identifiant seront mises à jour.")
    ) {
      return;
    }
    setSeeding(true);
    setError("");
    try {
      await seedAdminCourses();
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import impossible");
    } finally {
      setSeeding(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Supprimer « ${name} » ? Elle disparaîtra du site.`)) return;
    try {
      await deleteAdminCourse(id);
      setRows((current) => current.filter((row) => row.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Suppression impossible");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-navy-800">{adminCopy.nav.courses}</h2>
          <p className="mt-1 text-sm text-neutral-500">
            Prix, sessions, textes FR/EN/AR — ce que vous enregistrez ici s’affiche sur le site.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={handleSeed} disabled={seeding}>
            {seeding ? "Import…" : rows.length === 0 ? "Importer depuis le site" : "Réimporter le catalogue"}
          </Button>
          <Button href="/admin/courses/new" variant="primary">
            <Plus size={16} /> Nouvelle formation
          </Button>
        </div>
      </div>

      {error && (
        <p className="text-sm text-error-600" role="alert">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-sm text-neutral-500">{adminCopy.table.loading}</p>
      ) : rows.length === 0 ? (
        <div className="rounded-[4px] border border-neutral-200 bg-white p-8 text-center text-sm text-neutral-500">
          Aucune formation en base. Cliquez « Importer depuis le site » pour charger les formations actuelles, puis
          modifiez prix et contenus.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-[4px] border border-neutral-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-neutral-200 bg-neutral-50">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Formation</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Prix</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Catégorie</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Sessions</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase text-neutral-500">Statut</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50/80">
                  <td className="px-4 py-3 font-medium text-neutral-900">
                    {row.nameFr}
                    {row.featured && (
                      <span className="ms-2 text-xs font-semibold text-blue-600">Vedette</span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-neutral-800">{row.priceFr || "—"}</td>
                  <td className="px-4 py-3 text-neutral-600">{row.categoryId}</td>
                  <td className="px-4 py-3 text-neutral-600">{row.sessionCount}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.published ? "published" : "draft"} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Link href={`/admin/courses/${row.id}`} className="text-sm font-semibold text-blue-600 hover:underline">
                        Modifier
                      </Link>
                      <button
                        type="button"
                        className="text-sm text-error-600 hover:underline"
                        onClick={() => handleDelete(row.id, row.nameFr)}
                      >
                        Supprimer
                      </button>
                    </div>
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

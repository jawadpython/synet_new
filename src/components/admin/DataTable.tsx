import { formatAdminDate } from "@/lib/admin/firestore-helpers";
import { adminCopy } from "@/lib/admin/copy";
import { StatusBadge } from "./StatusBadge";

export type DataTableColumn<T> = {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
};

type DataTableProps<T extends { id: string; status?: string; createdAt?: string }> = {
  columns: DataTableColumn<T>[];
  rows: T[];
  loading?: boolean;
  error?: string | null;
};

export function DataTable<T extends { id: string; status?: string; createdAt?: string }>({
  columns,
  rows,
  loading,
  error,
}: DataTableProps<T>) {
  if (loading) {
    return (
      <div className="rounded-[4px] border border-neutral-200 bg-white px-6 py-12 text-center text-sm text-neutral-500">
        {adminCopy.table.loading}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-[4px] border border-error-200 bg-error-50 px-6 py-12 text-center text-sm text-error-700">
        {error}
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="rounded-[4px] border border-neutral-200 bg-white px-6 py-12 text-center text-sm text-neutral-500">
        {adminCopy.table.empty}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-[4px] border border-neutral-200 bg-white">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-neutral-200 bg-neutral-50">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50/80">
              {columns.map((col) => {
                const key = col.key as keyof T;
                let cell: React.ReactNode;
                if (col.render) {
                  cell = col.render(row);
                } else if (key === "status" && typeof row.status === "string") {
                  cell = <StatusBadge status={row.status} />;
                } else if (key === "createdAt" && row.createdAt) {
                  cell = formatAdminDate(String(row.createdAt));
                } else {
                  const value = row[key];
                  cell = value != null && value !== "" ? String(value) : "—";
                }
                return (
                  <td key={String(col.key)} className="px-4 py-3 text-neutral-800">
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

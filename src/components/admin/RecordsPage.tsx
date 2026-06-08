"use client";

import { useEffect, useState } from "react";
import {
  fetchMessages,
  fetchQuotes,
  fetchRegistrations,
} from "@/lib/admin/api-client";
import { DataTable, type DataTableColumn } from "./DataTable";
import type { AdminListItem } from "@/lib/admin/types";
import { adminCopy } from "@/lib/admin/copy";

const loaders = {
  registrations: fetchRegistrations,
  quotes: fetchQuotes,
  messages: fetchMessages,
} as const;

type RecordsPageProps = {
  title: string;
  subtitle?: string;
  source: keyof typeof loaders;
  columns: DataTableColumn<AdminListItem>[];
};

export function RecordsPage({ title, subtitle, source, columns }: RecordsPageProps) {
  const [rows, setRows] = useState<AdminListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    loaders[source]()
      .then((data) => {
        if (active) setRows(data.items);
      })
      .catch(() => {
        if (active) setError(adminCopy.table.error);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [source]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-navy-800">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>}
      </div>
      <DataTable columns={columns} rows={rows} loading={loading} error={error} />
    </div>
  );
}

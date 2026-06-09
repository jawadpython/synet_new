"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  fetchMessageDetail,
  fetchMessages,
  fetchQuoteDetail,
  fetchQuotes,
  fetchRegistrationDetail,
  fetchRegistrations,
  patchMessage,
  patchQuote,
  patchRegistration,
} from "@/lib/admin/api-client";
import { adminCopy } from "@/lib/admin/copy";
import type { AdminListItem } from "@/lib/admin/types";
import { DataTable, type DataTableColumn } from "./DataTable";
import { FilterBar } from "./FilterBar";
import { LeadDetailDrawer } from "./LeadDetailDrawer";

const loaders = {
  registrations: fetchRegistrations,
  quotes: fetchQuotes,
  messages: fetchMessages,
} as const;

const patchers = {
  registrations: patchRegistration,
  quotes: patchQuote,
  messages: patchMessage,
} as const;

const detailFetchers = {
  registrations: fetchRegistrationDetail,
  quotes: fetchQuoteDetail,
  messages: fetchMessageDetail,
} as const;

type LeadRecordsPageProps = {
  title: string;
  subtitle?: string;
  source: keyof typeof loaders;
  columns: DataTableColumn<AdminListItem>[];
  drawerFields: Array<{ key: string; label: string }>;
};

export function LeadRecordsPage({
  title,
  subtitle,
  source,
  columns,
  drawerFields,
}: LeadRecordsPageProps) {
  const [rows, setRows] = useState<AdminListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [selected, setSelected] = useState<AdminListItem | null>(null);
  const [selectedDetail, setSelectedDetail] = useState<AdminListItem | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  const load = useCallback(() => {
    setLoading(true);
    loaders[source]()
      .then((data) => setRows(data.items))
      .catch(() => setError(adminCopy.table.error))
      .finally(() => setLoading(false));
  }, [source]);

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      try {
        const data = await loaders[source]();
        if (active) setRows(data.items);
      } catch {
        if (active) setError(adminCopy.table.error);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [source]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((row) => {
      if (status && row.status !== status) return false;
      if (!q) return true;
      return Object.values(row).some((v) => String(v ?? "").toLowerCase().includes(q));
    });
  }, [rows, query, status]);

  const openDetail = (row: AdminListItem) => {
    setSelected(row);
    setSelectedDetail(null);
    setDetailLoading(true);
    detailFetchers[source](row.id)
      .then((data) => setSelectedDetail(data.item))
      .catch(() => setSelectedDetail(row))
      .finally(() => setDetailLoading(false));
  };

  const handleSave = async (id: string, newStatus: string, note: string) => {
    await patchers[source](id, { status: newStatus, note: note || undefined });
    load();
    if (selected?.id === id) {
      const data = await detailFetchers[source](id);
      setSelectedDetail(data.item);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-navy-800">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>}
      </div>

      <FilterBar query={query} status={status} onQueryChange={setQuery} onStatusChange={setStatus} />

      <DataTable
        columns={[
          ...columns,
          {
            key: "_actions",
            label: "",
            render: (row) => (
              <button
                type="button"
                className="text-sm font-semibold text-blue-600 hover:underline"
                onClick={() => openDetail(row)}
              >
                Voir
              </button>
            ),
          },
        ]}
        rows={filtered}
        loading={loading}
        error={error}
      />

      <LeadDetailDrawer
        item={selectedDetail ?? selected}
        loading={detailLoading}
        onClose={() => {
          setSelected(null);
          setSelectedDetail(null);
        }}
        onSave={handleSave}
        fields={drawerFields}
      />
    </div>
  );
}

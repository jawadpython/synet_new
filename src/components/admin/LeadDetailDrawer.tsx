"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { StatusBadge } from "./StatusBadge";
import { formatAdminDate } from "@/lib/admin/firestore-helpers";
import type { AdminListItem } from "@/lib/admin/types";

type LeadNote = { id?: string; body: string; authorName?: string; createdAt?: string };
type LeadActivity = { id?: string; action: string; actorName?: string; createdAt?: string };

type LeadDetailDrawerProps = {
  item: AdminListItem | null;
  loading?: boolean;
  onClose: () => void;
  onSave: (id: string, status: string, note: string) => Promise<void>;
  fields: Array<{ key: string; label: string }>;
};

export function LeadDetailDrawer({ item, loading = false, onClose, onSave, fields }: LeadDetailDrawerProps) {
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);

  if (!item) return null;

  const currentStatus = status || String(item.status ?? "new");

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(item.id, currentStatus, note);
      setNote("");
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button type="button" className="absolute inset-0 bg-navy-800/40" onClick={onClose} aria-label="Fermer" />
      <aside className="relative flex h-full w-full max-w-lg flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <div>
            <p className="text-lg font-semibold text-navy-800">{item.reference}</p>
            <StatusBadge status={String(item.status ?? "new")} />
          </div>
          <button type="button" onClick={onClose} className="rounded-[4px] p-2 text-neutral-500 hover:bg-neutral-100">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {loading && <p className="text-sm text-neutral-500">Chargement du détail…</p>}
          {fields.map((f) => (
            <div key={f.key}>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{f.label}</p>
              <p className="mt-1 text-sm text-neutral-900 break-words">
                {item[f.key] != null && item[f.key] !== "" ? String(item[f.key]) : "—"}
              </p>
            </div>
          ))}
          {item.createdAt && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Date</p>
              <p className="mt-1 text-sm">{formatAdminDate(String(item.createdAt))}</p>
            </div>
          )}

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Statut</label>
            <Select className="mt-2" value={currentStatus} onChange={(e) => setStatus(e.target.value)}>
              {["new", "in_review", "contacted", "qualified", "enrolled", "won", "lost", "spam", "archived"].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </Select>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Note interne</label>
            <Textarea className="mt-2" rows={4} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Ajouter une note…" />
          </div>

          {Array.isArray(item.notes) && (item.notes as LeadNote[]).length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Historique des notes</p>
              <ul className="mt-2 space-y-3">
                {(item.notes as LeadNote[]).map((entry) => (
                  <li key={entry.id ?? entry.body} className="rounded-[4px] border border-neutral-200 bg-neutral-50 p-3 text-sm">
                    <p className="text-neutral-900">{entry.body}</p>
                    <p className="mt-1 text-xs text-neutral-500">
                      {entry.authorName || "Admin"}
                      {entry.createdAt ? ` · ${formatAdminDate(entry.createdAt)}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(item.activity) && (item.activity as LeadActivity[]).length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Activité</p>
              <ul className="mt-2 space-y-2">
                {(item.activity as LeadActivity[]).map((entry) => (
                  <li key={entry.id ?? entry.action} className="text-sm text-neutral-700">
                    <span className="font-medium">{entry.action}</span>
                    {entry.actorName ? ` — ${entry.actorName}` : ""}
                    {entry.createdAt ? ` · ${formatAdminDate(entry.createdAt)}` : ""}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="border-t border-neutral-200 px-6 py-4 flex gap-3">
          <Button variant="secondary" onClick={onClose}>Annuler</Button>
          <Button variant="primary" onClick={handleSave} disabled={saving}>
            {saving ? "Enregistrement…" : "Enregistrer"}
          </Button>
        </div>
      </aside>
    </div>
  );
}

"use client";

import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

type FilterBarProps = {
  query: string;
  status: string;
  onQueryChange: (value: string) => void;
  onStatusChange: (value: string) => void;
};

const STATUS_OPTIONS = [
  { value: "", label: "Tous les statuts" },
  { value: "new", label: "Nouveau" },
  { value: "in_review", label: "En cours" },
  { value: "contacted", label: "Contacté" },
  { value: "qualified", label: "Qualifié" },
  { value: "enrolled", label: "Inscrit" },
  { value: "won", label: "Gagné" },
  { value: "lost", label: "Perdu" },
  { value: "archived", label: "Archivé" },
];

export function FilterBar({ query, status, onQueryChange, onStatusChange }: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-[4px] border border-neutral-200 bg-white p-4 sm:flex-row sm:items-center">
      <div className="flex-1">
        <Input
          placeholder="Rechercher référence, nom, e-mail…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>
      <div className="w-full sm:w-48">
        <Select value={status} onChange={(e) => onStatusChange(e.target.value)}>
          {STATUS_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </Select>
      </div>
    </div>
  );
}

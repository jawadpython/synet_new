"use client";

import { useEffect, useState } from "react";
import { fetchAdminGlobals, patchAdminGlobals } from "@/lib/admin/api-client";
import { adminCopy } from "@/lib/admin/copy";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";

type LocaleInfo = { address?: string; phone?: string; email?: string; hours?: string };

export default function AdminGlobalsPage() {
  const [locales, setLocales] = useState<Record<string, LocaleInfo>>({ fr: {}, en: {}, ar: {} });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchAdminGlobals()
      .then((data) => {
        const g = data.globals as { locales?: Record<string, LocaleInfo> } | null;
        if (g?.locales) setLocales(g.locales);
      })
      .finally(() => setLoading(false));
  }, []);

  const update = (locale: string, field: keyof LocaleInfo, value: string) => {
    setLocales((prev) => ({
      ...prev,
      [locale]: { ...prev[locale], [field]: value },
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      await patchAdminGlobals({ locales, siteName: "SYNET" });
      setSaved(true);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-sm text-neutral-500">{adminCopy.table.loading}</p>;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-navy-800">{adminCopy.nav.globals}</h2>
        <p className="mt-1 text-sm text-neutral-500">Coordonnées affichées sur le site public</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {(["fr", "en", "ar"] as const).map((locale) => (
          <div key={locale} className="rounded-[4px] border border-neutral-200 bg-white p-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase text-neutral-500">{locale}</h3>
            <FormField id={`${locale}-email`} label="E-mail">
              <Input id={`${locale}-email`} value={locales[locale]?.email ?? ""} onChange={(e) => update(locale, "email", e.target.value)} dir="ltr" />
            </FormField>
            <FormField id={`${locale}-phone`} label="Téléphone">
              <Input id={`${locale}-phone`} value={locales[locale]?.phone ?? ""} onChange={(e) => update(locale, "phone", e.target.value)} dir="ltr" />
            </FormField>
            <FormField id={`${locale}-address`} label="Adresse">
              <Input id={`${locale}-address`} value={locales[locale]?.address ?? ""} onChange={(e) => update(locale, "address", e.target.value)} />
            </FormField>
            <FormField id={`${locale}-hours`} label="Horaires">
              <Input id={`${locale}-hours`} value={locales[locale]?.hours ?? ""} onChange={(e) => update(locale, "hours", e.target.value)} />
            </FormField>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button variant="primary" onClick={handleSave} disabled={saving}>
          {saving ? "Enregistrement…" : "Enregistrer"}
        </Button>
        {saved && <span className="text-sm text-green-700">Enregistré</span>}
      </div>
    </div>
  );
}

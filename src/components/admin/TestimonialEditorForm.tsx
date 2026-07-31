"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import type { FirestoreTestimonialDoc } from "@/lib/firestore/testimonials-types";
import { saveAdminTestimonial } from "@/lib/admin/api-client";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const locales: Locale[] = ["fr", "en", "ar"];

type TestimonialEditorFormProps = {
  testimonialId: string;
  initial: FirestoreTestimonialDoc;
};

export function TestimonialEditorForm({ testimonialId, initial }: TestimonialEditorFormProps) {
  const router = useRouter();
  const [tab, setTab] = useState<Locale>("fr");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [general, setGeneral] = useState({
    division: initial.division,
    featured: initial.featured,
    published: initial.published,
    sortOrder: initial.sortOrder,
  });
  const [localesContent, setLocalesContent] = useState(initial.locales);

  const updateLocale = (locale: Locale, field: string, value: string) => {
    setLocalesContent((prev) => ({
      ...prev,
      [locale]: { ...prev[locale], [field]: value },
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      const testimonial: FirestoreTestimonialDoc = {
        division: general.division,
        featured: general.featured,
        published: general.published,
        sortOrder: Number(general.sortOrder),
        locales: localesContent,
      };
      await saveAdminTestimonial(testimonialId, testimonial);
      router.push("/admin/testimonials");
      router.refresh();
    } catch {
      setError("Erreur lors de l'enregistrement");
    } finally {
      setSaving(false);
    }
  };

  const content = localesContent[tab];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <FormField id="division" label="Division">
          <Select
            id="division"
            value={general.division}
            onChange={(e) => setGeneral({ ...general, division: e.target.value as "business" | "training" })}
          >
            <option value="business">Solutions entreprise</option>
            <option value="training">Centre de formation</option>
          </Select>
        </FormField>
        <FormField id="sortOrder" label="Ordre">
          <Input
            id="sortOrder"
            type="number"
            value={general.sortOrder}
            onChange={(e) => setGeneral({ ...general, sortOrder: Number(e.target.value) })}
          />
        </FormField>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={general.featured} onChange={(e) => setGeneral({ ...general, featured: e.target.checked })} />
          Afficher sur la page d&apos;accueil
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={general.published} onChange={(e) => setGeneral({ ...general, published: e.target.checked })} />
          Publié
        </label>
      </div>

      <div className="flex gap-2 border-b border-neutral-200 pb-2">
        {locales.map((loc) => (
          <button
            key={loc}
            type="button"
            onClick={() => setTab(loc)}
            className={`rounded-[4px] px-3 py-1.5 text-sm font-semibold ${
              tab === loc ? "bg-navy-800 text-white" : "bg-neutral-100 text-neutral-700"
            }`}
          >
            {loc.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <FormField id={`quote-${tab}`} label="Citation">
          <Textarea id={`quote-${tab}`} rows={4} value={content?.quote ?? ""} onChange={(e) => updateLocale(tab, "quote", e.target.value)} />
        </FormField>
        <FormField id={`attribution-${tab}`} label="Auteur">
          <Input id={`attribution-${tab}`} value={content?.attribution ?? ""} onChange={(e) => updateLocale(tab, "attribution", e.target.value)} />
        </FormField>
        <FormField id={`role-${tab}`} label="Rôle">
          <Input id={`role-${tab}`} value={content?.role ?? ""} onChange={(e) => updateLocale(tab, "role", e.target.value)} />
        </FormField>
        <FormField id={`organization-${tab}`} label="Organisation">
          <Input id={`organization-${tab}`} value={content?.organization ?? ""} onChange={(e) => updateLocale(tab, "organization", e.target.value)} />
        </FormField>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3">
        <Button variant="primary" onClick={handleSave} disabled={saving}>
          {saving ? "Enregistrement…" : "Enregistrer"}
        </Button>
        <Button variant="secondary" href="/admin/testimonials">
          Annuler
        </Button>
      </div>
    </div>
  );
}

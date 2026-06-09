"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import type { CourseCategory, CourseLevel } from "@/lib/training/types";
import { emptyLocaleContent, type CourseLocaleContent, type FirestoreCourseDoc, type FirestoreSessionDoc } from "@/lib/firestore/courses-types";
import { saveAdminCourse } from "@/lib/admin/api-client";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const locales: Locale[] = ["fr", "en", "ar"];
const categories: CourseCategory[] = ["networking", "linux", "cybersecurity", "cloud", "sap", "microsoft", "corporate"];
const levels: CourseLevel[] = ["beginner", "intermediate", "advanced", "all-levels"];
const imageVariants = ["network", "security", "linux", "cloud", "sap", "microsoft", "corporate"];

type SessionRow = FirestoreSessionDoc & { id?: string };

type CourseEditorFormProps = {
  courseId: string | null;
  initial?: FirestoreCourseDoc & { sessions?: SessionRow[] };
};

function linesToArray(value: string): string[] {
  return value.split("\n").map((s) => s.trim()).filter(Boolean);
}

function arrayToLines(value: string[]): string {
  return (value ?? []).join("\n");
}

export function CourseEditorForm({ courseId, initial }: CourseEditorFormProps) {
  const router = useRouter();
  const [tab, setTab] = useState<string>("general");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [general, setGeneral] = useState<{
    categoryId: CourseCategory;
    level: CourseLevel;
    imageVariant: string;
    featured: boolean;
    published: boolean;
    sortOrder: number;
    slugs: { fr: string; en: string; ar: string };
  }>({
    categoryId: (initial?.categoryId ?? "networking") as CourseCategory,
    level: (initial?.level ?? "beginner") as CourseLevel,
    imageVariant: initial?.imageVariant ?? "network",
    featured: initial?.featured ?? false,
    published: initial?.published ?? false,
    sortOrder: initial?.sortOrder ?? 99,
    slugs: initial?.slugs ?? { fr: "", en: "", ar: "" },
  });

  const [localeContent, setLocaleContent] = useState<Record<Locale, CourseLocaleContent>>({
    fr: initial?.locales?.fr ?? emptyLocaleContent(),
    en: initial?.locales?.en ?? emptyLocaleContent(),
    ar: initial?.locales?.ar ?? emptyLocaleContent(),
  });

  const [sessions, setSessions] = useState<SessionRow[]>(
    initial?.sessions ?? [{
      startDate: "", endDate: "", format: "Présentiel", spotsTotal: 10, spotsLeft: 10, published: true,
    }],
  );

  const updateLocale = (locale: Locale, field: keyof CourseLocaleContent, value: string | string[]) => {
    setLocaleContent((prev) => ({
      ...prev,
      [locale]: { ...prev[locale], [field]: value },
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      const course: FirestoreCourseDoc = {
        categoryId: general.categoryId as CourseCategory,
        level: general.level as CourseLevel,
        slugs: general.slugs,
        locales: localeContent,
        imageVariant: general.imageVariant,
        featured: general.featured,
        published: general.published,
        sortOrder: Number(general.sortOrder),
      };
      await saveAdminCourse(courseId, course, sessions);
      router.push("/admin/courses");
      router.refresh();
    } catch {
      setError("Erreur lors de l'enregistrement");
    } finally {
      setSaving(false);
    }
  };

  const activeLocale = tab as Locale;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-2">
        {["general", "fr", "en", "ar", "sessions", "seo"].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-[4px] px-3 py-1.5 text-sm font-semibold ${
              tab === t ? "bg-navy-800 text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            {t === "general" ? "Général" : t === "sessions" ? "Sessions" : t === "seo" ? "SEO (FR)" : t.toUpperCase()}
          </button>
        ))}
      </div>

      {tab === "general" && (
        <div className="grid gap-4 md:grid-cols-2">
          <FormField id="category" label="Catégorie">
            <Select id="category" value={general.categoryId} onChange={(e) => setGeneral({ ...general, categoryId: e.target.value as CourseCategory })}>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </Select>
          </FormField>
          <FormField id="level" label="Niveau">
            <Select id="level" value={general.level} onChange={(e) => setGeneral({ ...general, level: e.target.value as CourseLevel })}>
              {levels.map((l) => <option key={l} value={l}>{l}</option>)}
            </Select>
          </FormField>
          {locales.map((loc) => (
            <FormField key={loc} id={`slug-${loc}`} label={`Slug ${loc.toUpperCase()}`}>
              <Input
                id={`slug-${loc}`}
                value={general.slugs[loc]}
                onChange={(e) => setGeneral({ ...general, slugs: { ...general.slugs, [loc]: e.target.value } })}
                dir="ltr"
              />
            </FormField>
          ))}
          <FormField id="image" label="Variante visuelle">
            <Select id="image" value={general.imageVariant} onChange={(e) => setGeneral({ ...general, imageVariant: e.target.value })}>
              {imageVariants.map((v) => <option key={v} value={v}>{v}</option>)}
            </Select>
          </FormField>
          <FormField id="sort" label="Ordre">
            <Input id="sort" type="number" value={general.sortOrder} onChange={(e) => setGeneral({ ...general, sortOrder: Number(e.target.value) })} />
          </FormField>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={general.featured} onChange={(e) => setGeneral({ ...general, featured: e.target.checked })} /> Vedette</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={general.published} onChange={(e) => setGeneral({ ...general, published: e.target.checked })} /> Publié</label>
        </div>
      )}

      {(tab === "fr" || tab === "en" || tab === "ar") && (
        <div className="grid gap-4">
          <FormField id="name" label="Nom">
            <Input value={localeContent[activeLocale].name} onChange={(e) => updateLocale(activeLocale, "name", e.target.value)} />
          </FormField>
          <FormField id="short" label="Description courte">
            <Textarea rows={2} value={localeContent[activeLocale].shortDescription} onChange={(e) => updateLocale(activeLocale, "shortDescription", e.target.value)} />
          </FormField>
          <FormField id="desc" label="Description">
            <Textarea rows={5} value={localeContent[activeLocale].description} onChange={(e) => updateLocale(activeLocale, "description", e.target.value)} />
          </FormField>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id="duration" label="Durée"><Input value={localeContent[activeLocale].duration} onChange={(e) => updateLocale(activeLocale, "duration", e.target.value)} /></FormField>
            <FormField id="schedule" label="Horaires"><Input value={localeContent[activeLocale].schedule} onChange={(e) => updateLocale(activeLocale, "schedule", e.target.value)} /></FormField>
            <FormField id="price" label="Prix"><Input value={localeContent[activeLocale].price} onChange={(e) => updateLocale(activeLocale, "price", e.target.value)} /></FormField>
            <FormField id="cert" label="Certification"><Input value={localeContent[activeLocale].certification ?? ""} onChange={(e) => updateLocale(activeLocale, "certification", e.target.value)} /></FormField>
          </div>
          <FormField id="outcomes" label="Objectifs (une ligne par point)">
            <Textarea rows={4} value={arrayToLines(localeContent[activeLocale].outcomes)} onChange={(e) => updateLocale(activeLocale, "outcomes", linesToArray(e.target.value))} />
          </FormField>
          <FormField id="prereq" label="Prérequis (une ligne par point)">
            <Textarea rows={3} value={arrayToLines(localeContent[activeLocale].prerequisites)} onChange={(e) => updateLocale(activeLocale, "prerequisites", linesToArray(e.target.value))} />
          </FormField>
          <div className="grid gap-4 md:grid-cols-3">
            <FormField id="instr-name" label="Formateur"><Input value={localeContent[activeLocale].instructorName} onChange={(e) => updateLocale(activeLocale, "instructorName", e.target.value)} /></FormField>
            <FormField id="instr-title" label="Titre"><Input value={localeContent[activeLocale].instructorTitle} onChange={(e) => updateLocale(activeLocale, "instructorTitle", e.target.value)} /></FormField>
            <FormField id="status" label="Statut contenu">
              <Select value={localeContent[activeLocale].status} onChange={(e) => updateLocale(activeLocale, "status", e.target.value)}>
                <option value="draft">Brouillon</option>
                <option value="review">En révision</option>
                <option value="published">Publié</option>
              </Select>
            </FormField>
          </div>
          <FormField id="bio" label="Bio formateur">
            <Textarea rows={3} value={localeContent[activeLocale].instructorBio} onChange={(e) => updateLocale(activeLocale, "instructorBio", e.target.value)} />
          </FormField>
        </div>
      )}

      {tab === "seo" && (
        <div className="grid gap-4">
          <FormField id="metaTitle" label="Meta title (FR)">
            <Input value={localeContent.fr.metaTitle ?? ""} onChange={(e) => updateLocale("fr", "metaTitle", e.target.value)} />
          </FormField>
          <FormField id="metaDesc" label="Meta description (FR)">
            <Textarea rows={3} value={localeContent.fr.metaDescription ?? ""} onChange={(e) => updateLocale("fr", "metaDescription", e.target.value)} />
          </FormField>
        </div>
      )}

      {tab === "sessions" && (
        <div className="space-y-4">
          {sessions.map((session, idx) => (
            <div key={idx} className="grid gap-3 rounded-[4px] border border-neutral-200 p-4 md:grid-cols-3">
              <Input type="date" value={session.startDate} onChange={(e) => {
                const next = [...sessions]; next[idx] = { ...next[idx], startDate: e.target.value }; setSessions(next);
              }} />
              <Input type="date" value={session.endDate} onChange={(e) => {
                const next = [...sessions]; next[idx] = { ...next[idx], endDate: e.target.value }; setSessions(next);
              }} />
              <Input value={session.format} placeholder="Format" onChange={(e) => {
                const next = [...sessions]; next[idx] = { ...next[idx], format: e.target.value }; setSessions(next);
              }} />
              <Input type="number" value={session.spotsTotal} placeholder="Places totales" onChange={(e) => {
                const next = [...sessions]; next[idx] = { ...next[idx], spotsTotal: Number(e.target.value) }; setSessions(next);
              }} />
              <Input type="number" value={session.spotsLeft} placeholder="Places restantes" onChange={(e) => {
                const next = [...sessions]; next[idx] = { ...next[idx], spotsLeft: Number(e.target.value) }; setSessions(next);
              }} />
              <label className="flex items-center gap-2 text-sm self-center">
                <input type="checkbox" checked={session.published} onChange={(e) => {
                  const next = [...sessions]; next[idx] = { ...next[idx], published: e.target.checked }; setSessions(next);
                }} /> Publiée
              </label>
            </div>
          ))}
          <Button type="button" variant="secondary" onClick={() => setSessions([...sessions, { startDate: "", endDate: "", format: "Présentiel", spotsTotal: 10, spotsLeft: 10, published: true }])}>
            Ajouter une session
          </Button>
        </div>
      )}

      {error && <p className="text-sm text-error-600">{error}</p>}

      <div className="flex gap-3 border-t border-neutral-200 pt-4">
        <Button variant="secondary" href="/admin/courses">Annuler</Button>
        <Button variant="primary" onClick={handleSave} disabled={saving}>
          {saving ? "Enregistrement…" : "Enregistrer"}
        </Button>
      </div>
    </div>
  );
}

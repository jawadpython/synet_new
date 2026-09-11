"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { CourseCategory, CourseLevel } from "@/lib/training/types";
import {
  emptyLocaleContent,
  type CourseLocaleContent,
  type FirestoreCourseDoc,
  type FirestoreSessionDoc,
} from "@/lib/firestore/courses-types";
import { deleteAdminCourse, saveAdminCourse } from "@/lib/admin/api-client";
import { slugify } from "@/lib/site/slugify";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const locales: Locale[] = ["fr", "en", "ar"];

const categoryLabels: Record<CourseCategory, string> = {
  networking: "Réseaux",
  linux: "Linux",
  cybersecurity: "Cybersécurité",
  cloud: "Cloud",
  sap: "SAP",
  microsoft: "Microsoft",
  corporate: "Entreprise",
};

const levelLabels: Record<CourseLevel, string> = {
  beginner: "Débutant",
  intermediate: "Intermédiaire",
  advanced: "Avancé",
  "all-levels": "Tous niveaux",
};

const categories = Object.keys(categoryLabels) as CourseCategory[];
const levels = Object.keys(levelLabels) as CourseLevel[];
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

function emptySession(): SessionRow {
  return {
    startDate: "",
    endDate: "",
    format: "Présentiel",
    location: "Casablanca",
    spotsTotal: 10,
    spotsLeft: 10,
    published: true,
  };
}

export function CourseEditorForm({ courseId, initial }: CourseEditorFormProps) {
  const router = useRouter();
  const [tab, setTab] = useState<string>("general");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  const [general, setGeneral] = useState({
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
    initial?.sessions?.length ? initial.sessions : [emptySession()],
  );

  const updateLocale = (locale: Locale, field: keyof CourseLocaleContent, value: string | string[]) => {
    setLocaleContent((prev) => ({
      ...prev,
      [locale]: { ...prev[locale], [field]: value },
    }));
  };

  const fillSlugFromName = (locale: Locale, name: string) => {
    if (general.slugs[locale]) return;
    const generated = slugify(name);
    if (!generated) return;
    setGeneral((prev) => ({
      ...prev,
      slugs: { ...prev.slugs, [locale]: generated },
    }));
  };

  const copyFromFrench = (target: Locale) => {
    setLocaleContent((prev) => ({
      ...prev,
      [target]: { ...prev.fr, status: prev[target].status },
    }));
    setGeneral((prev) => ({
      ...prev,
      slugs: {
        ...prev.slugs,
        [target]: prev.slugs[target] || prev.slugs.fr,
      },
    }));
  };

  const handleSave = async () => {
    if (!localeContent.fr.name.trim()) {
      setError("Le nom français est obligatoire.");
      setTab("fr");
      return;
    }
    if (!localeContent.fr.price.trim()) {
      setError("Le prix (FR) est obligatoire — il s’affiche sur le site.");
      setTab("fr");
      return;
    }

    const slugs = { ...general.slugs };
    if (!slugs.fr) slugs.fr = slugify(localeContent.fr.name) || "formation";
    if (!slugs.en) slugs.en = slugs.fr;
    if (!slugs.ar) slugs.ar = slugs.fr;

    setSaving(true);
    setError("");
    try {
      const course: FirestoreCourseDoc = {
        categoryId: general.categoryId,
        level: general.level,
        slugs,
        locales: localeContent,
        imageVariant: general.imageVariant,
        featured: general.featured,
        published: general.published,
        sortOrder: Number(general.sortOrder) || 99,
      };
      await saveAdminCourse(courseId, course, sessions);
      router.push("/admin/courses");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'enregistrement");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!courseId) return;
    if (!window.confirm("Supprimer cette formation ? Elle disparaîtra du site public.")) return;
    setDeleting(true);
    setError("");
    try {
      await deleteAdminCourse(courseId);
      router.push("/admin/courses");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Suppression impossible");
    } finally {
      setDeleting(false);
    }
  };

  const activeLocale = tab as Locale;
  const tabs = [
    { id: "general", label: "Général" },
    { id: "fr", label: "FR — Contenu" },
    { id: "en", label: "EN — Content" },
    { id: "ar", label: "AR — المحتوى" },
    { id: "sessions", label: "Sessions" },
    { id: "seo", label: "SEO" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-2">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={`rounded-[4px] px-3 py-1.5 text-sm font-semibold ${
              tab === item.id ? "bg-navy-800 text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {tab === "general" && (
        <div className="grid gap-4 md:grid-cols-2">
          <FormField id="category" label="Catégorie">
            <Select
              id="category"
              value={general.categoryId}
              onChange={(e) => setGeneral({ ...general, categoryId: e.target.value as CourseCategory })}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {categoryLabels[c]}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField id="level" label="Niveau">
            <Select
              id="level"
              value={general.level}
              onChange={(e) => setGeneral({ ...general, level: e.target.value as CourseLevel })}
            >
              {levels.map((l) => (
                <option key={l} value={l}>
                  {levelLabels[l]}
                </option>
              ))}
            </Select>
          </FormField>
          {locales.map((loc) => (
            <FormField key={loc} id={`slug-${loc}`} label={`Slug ${loc.toUpperCase()} (URL)`}>
              <Input
                id={`slug-${loc}`}
                value={general.slugs[loc]}
                onChange={(e) =>
                  setGeneral({ ...general, slugs: { ...general.slugs, [loc]: e.target.value } })
                }
                placeholder={loc === "fr" ? "formation-reseaux" : ""}
                dir="ltr"
              />
            </FormField>
          ))}
          <FormField id="image" label="Image / visuel">
            <Select
              id="image"
              value={general.imageVariant}
              onChange={(e) => setGeneral({ ...general, imageVariant: e.target.value })}
            >
              {imageVariants.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField id="sort" label="Ordre d’affichage">
            <Input
              id="sort"
              type="number"
              value={general.sortOrder}
              onChange={(e) => setGeneral({ ...general, sortOrder: Number(e.target.value) })}
            />
          </FormField>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={general.featured}
              onChange={(e) => setGeneral({ ...general, featured: e.target.checked })}
            />
            Mettre en avant
          </label>
          <label className="flex items-center gap-2 text-sm font-semibold text-navy-800">
            <input
              type="checkbox"
              checked={general.published}
              onChange={(e) => setGeneral({ ...general, published: e.target.checked })}
            />
            Publié sur le site
          </label>
          <p className="md:col-span-2 text-sm text-neutral-500">
            Prix, nom, durée, sessions et formateur s’affichent sur le catalogue et la fiche formation dès que
            « Publié sur le site » est coché.
          </p>
        </div>
      )}

      {(tab === "fr" || tab === "en" || tab === "ar") && (
        <div className="grid gap-4">
          {tab !== "fr" && (
            <div>
              <Button type="button" variant="secondary" size="sm" onClick={() => copyFromFrench(activeLocale)}>
                Copier le contenu FR vers {tab.toUpperCase()}
              </Button>
            </div>
          )}
          <FormField id={`${tab}-name`} label="Nom de la formation" required>
            <Input
              id={`${tab}-name`}
              value={localeContent[activeLocale].name}
              onChange={(e) => updateLocale(activeLocale, "name", e.target.value)}
              onBlur={(e) => fillSlugFromName(activeLocale, e.target.value)}
            />
          </FormField>
          <FormField id={`${tab}-short`} label="Description courte (cartes catalogue)">
            <Textarea
              id={`${tab}-short`}
              rows={2}
              value={localeContent[activeLocale].shortDescription}
              onChange={(e) => updateLocale(activeLocale, "shortDescription", e.target.value)}
            />
          </FormField>
          <FormField id={`${tab}-desc`} label="Description complète">
            <Textarea
              id={`${tab}-desc`}
              rows={5}
              value={localeContent[activeLocale].description}
              onChange={(e) => updateLocale(activeLocale, "description", e.target.value)}
            />
          </FormField>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id={`${tab}-duration`} label="Durée">
              <Input
                id={`${tab}-duration`}
                value={localeContent[activeLocale].duration}
                onChange={(e) => updateLocale(activeLocale, "duration", e.target.value)}
                placeholder="5 jours (40 heures)"
              />
            </FormField>
            <FormField id={`${tab}-schedule`} label="Horaires">
              <Input
                id={`${tab}-schedule`}
                value={localeContent[activeLocale].schedule}
                onChange={(e) => updateLocale(activeLocale, "schedule", e.target.value)}
                placeholder="Lun – Ven, 9h00 – 17h00"
              />
            </FormField>
            <FormField id={`${tab}-price`} label="Prix" required>
              <Input
                id={`${tab}-price`}
                value={localeContent[activeLocale].price}
                onChange={(e) => updateLocale(activeLocale, "price", e.target.value)}
                placeholder="12 500 MAD"
              />
            </FormField>
            <FormField id={`${tab}-priceNote`} label="Note de prix">
              <Input
                id={`${tab}-priceNote`}
                value={localeContent[activeLocale].priceNote ?? ""}
                onChange={(e) => updateLocale(activeLocale, "priceNote", e.target.value)}
                placeholder="Matériel de lab inclus"
              />
            </FormField>
            <FormField id={`${tab}-cert`} label="Certification">
              <Input
                id={`${tab}-cert`}
                value={localeContent[activeLocale].certification ?? ""}
                onChange={(e) => updateLocale(activeLocale, "certification", e.target.value)}
              />
            </FormField>
          </div>
          <FormField id={`${tab}-outcomes`} label="Objectifs (une ligne par point)">
            <Textarea
              id={`${tab}-outcomes`}
              rows={4}
              value={arrayToLines(localeContent[activeLocale].outcomes)}
              onChange={(e) => updateLocale(activeLocale, "outcomes", linesToArray(e.target.value))}
            />
          </FormField>
          <FormField id={`${tab}-prereq`} label="Prérequis (une ligne par point)">
            <Textarea
              id={`${tab}-prereq`}
              rows={3}
              value={arrayToLines(localeContent[activeLocale].prerequisites)}
              onChange={(e) => updateLocale(activeLocale, "prerequisites", linesToArray(e.target.value))}
            />
          </FormField>
          <div className="grid gap-4 md:grid-cols-3">
            <FormField id={`${tab}-instr-name`} label="Formateur">
              <Input
                id={`${tab}-instr-name`}
                value={localeContent[activeLocale].instructorName}
                onChange={(e) => updateLocale(activeLocale, "instructorName", e.target.value)}
              />
            </FormField>
            <FormField id={`${tab}-instr-title`} label="Titre du formateur">
              <Input
                id={`${tab}-instr-title`}
                value={localeContent[activeLocale].instructorTitle}
                onChange={(e) => updateLocale(activeLocale, "instructorTitle", e.target.value)}
              />
            </FormField>
            <FormField id={`${tab}-status`} label="Statut du texte">
              <Select
                id={`${tab}-status`}
                value={localeContent[activeLocale].status}
                onChange={(e) => updateLocale(activeLocale, "status", e.target.value)}
              >
                <option value="draft">Brouillon</option>
                <option value="review">En révision</option>
                <option value="published">Prêt</option>
              </Select>
            </FormField>
          </div>
          <FormField id={`${tab}-bio`} label="Bio formateur">
            <Textarea
              id={`${tab}-bio`}
              rows={3}
              value={localeContent[activeLocale].instructorBio}
              onChange={(e) => updateLocale(activeLocale, "instructorBio", e.target.value)}
            />
          </FormField>
        </div>
      )}

      {tab === "seo" && (
        <div className="space-y-8">
          {locales.map((loc) => (
            <div key={loc} className="grid gap-4 rounded-[4px] border border-neutral-200 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-800">
                {loc.toUpperCase()}
              </h3>
              <FormField id={`metaTitle-${loc}`} label="Titre SEO">
                <Input
                  id={`metaTitle-${loc}`}
                  value={localeContent[loc].metaTitle ?? ""}
                  onChange={(e) => updateLocale(loc, "metaTitle", e.target.value)}
                  placeholder={localeContent[loc].name}
                />
              </FormField>
              <FormField id={`metaDesc-${loc}`} label="Meta description">
                <Textarea
                  id={`metaDesc-${loc}`}
                  rows={3}
                  value={localeContent[loc].metaDescription ?? ""}
                  onChange={(e) => updateLocale(loc, "metaDescription", e.target.value)}
                  placeholder={localeContent[loc].shortDescription}
                />
              </FormField>
            </div>
          ))}
        </div>
      )}

      {tab === "sessions" && (
        <div className="space-y-4">
          <p className="text-sm text-neutral-500">
            Dates, format, lieu et places restantes s’affichent sur la fiche formation et le formulaire d’inscription.
          </p>
          {sessions.map((session, idx) => (
            <div key={session.id ?? idx} className="grid gap-3 rounded-[4px] border border-neutral-200 p-4 md:grid-cols-3">
              <FormField id={`start-${idx}`} label="Début">
                <Input
                  id={`start-${idx}`}
                  type="date"
                  value={session.startDate}
                  onChange={(e) => {
                    const next = [...sessions];
                    next[idx] = { ...next[idx], startDate: e.target.value };
                    setSessions(next);
                  }}
                />
              </FormField>
              <FormField id={`end-${idx}`} label="Fin">
                <Input
                  id={`end-${idx}`}
                  type="date"
                  value={session.endDate}
                  onChange={(e) => {
                    const next = [...sessions];
                    next[idx] = { ...next[idx], endDate: e.target.value };
                    setSessions(next);
                  }}
                />
              </FormField>
              <FormField id={`format-${idx}`} label="Format">
                <Input
                  id={`format-${idx}`}
                  value={session.format}
                  placeholder="Présentiel / Distanciel"
                  onChange={(e) => {
                    const next = [...sessions];
                    next[idx] = { ...next[idx], format: e.target.value };
                    setSessions(next);
                  }}
                />
              </FormField>
              <FormField id={`location-${idx}`} label="Lieu">
                <Input
                  id={`location-${idx}`}
                  value={session.location ?? ""}
                  placeholder="Casablanca"
                  onChange={(e) => {
                    const next = [...sessions];
                    next[idx] = { ...next[idx], location: e.target.value };
                    setSessions(next);
                  }}
                />
              </FormField>
              <FormField id={`total-${idx}`} label="Places totales">
                <Input
                  id={`total-${idx}`}
                  type="number"
                  value={session.spotsTotal}
                  onChange={(e) => {
                    const next = [...sessions];
                    next[idx] = { ...next[idx], spotsTotal: Number(e.target.value) };
                    setSessions(next);
                  }}
                />
              </FormField>
              <FormField id={`left-${idx}`} label="Places restantes">
                <Input
                  id={`left-${idx}`}
                  type="number"
                  value={session.spotsLeft}
                  onChange={(e) => {
                    const next = [...sessions];
                    next[idx] = { ...next[idx], spotsLeft: Number(e.target.value) };
                    setSessions(next);
                  }}
                />
              </FormField>
              <label className="flex items-center gap-2 text-sm self-end pb-2">
                <input
                  type="checkbox"
                  checked={session.published}
                  onChange={(e) => {
                    const next = [...sessions];
                    next[idx] = { ...next[idx], published: e.target.checked };
                    setSessions(next);
                  }}
                />
                Session visible
              </label>
              <div className="self-end pb-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setSessions(sessions.filter((_, i) => i !== idx))}
                >
                  <Trash2 className="h-4 w-4" /> Retirer
                </Button>
              </div>
            </div>
          ))}
          <Button type="button" variant="secondary" onClick={() => setSessions([...sessions, emptySession()])}>
            Ajouter une session
          </Button>
        </div>
      )}

      {error && (
        <p className="text-sm text-error-600" role="alert">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3 border-t border-neutral-200 pt-4">
        <Button variant="secondary" href="/admin/courses">
          Annuler
        </Button>
        <Button variant="primary" onClick={handleSave} disabled={saving || deleting}>
          {saving ? "Enregistrement…" : "Enregistrer"}
        </Button>
        {courseId && (
          <Button variant="ghost" onClick={handleDelete} disabled={saving || deleting} className="ms-auto text-error-600">
            {deleting ? "Suppression…" : "Supprimer"}
          </Button>
        )}
      </div>
    </div>
  );
}

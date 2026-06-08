"use client";

import Link from "next/link";
import { useState } from "react";
import type { Service } from "@/lib/solutions/types";
import type { BusinessPagesCopy, TrainingPagesCopy } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { getLegalUrl } from "@/lib/site/paths";
import { FormSuccess } from "@/components/site/FormSuccess";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

type QuoteRequestFormProps = {
  services: Service[];
  copy: BusinessPagesCopy;
  formsCopy: TrainingPagesCopy["forms"];
  locale: Locale;
  preselectedServiceSlug?: string;
};

type FormState = {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  serviceSlug: string;
  sector: string;
  timeline: string;
  description: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function QuoteRequestForm({
  services,
  copy,
  formsCopy,
  locale,
  preselectedServiceSlug,
}: QuoteRequestFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormState>({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    serviceSlug: preselectedServiceSlug ?? "",
    sector: "",
    timeline: "",
    description: "",
    consent: false,
  });

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.company.trim()) next.company = copy.quote.errors.required;
    if (!form.contactName.trim()) next.contactName = copy.quote.errors.required;
    if (!form.email.trim()) next.email = copy.quote.errors.required;
    else if (!emailPattern.test(form.email)) next.email = copy.quote.errors.email;
    if (!form.phone.trim()) next.phone = copy.quote.errors.required;
    if (!form.serviceSlug) next.serviceSlug = copy.quote.errors.required;
    if (!form.sector) next.sector = copy.quote.errors.required;
    if (!form.description.trim()) next.description = copy.quote.errors.required;
    if (!form.consent) next.consent = copy.quote.errors.consent;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      const data = await res.json();
      if (res.ok) {
        setReference(data.reference ?? "");
        setSubmitted(true);
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <FormSuccess
        title={copy.quote.successTitle}
        message={copy.quote.successMessage}
        reference={reference}
        referenceLabel={formsCopy.referenceLabel}
        nextStepsTitle={formsCopy.nextStepsTitle}
        nextSteps={copy.quote.nextSteps}
      />
    );
  }

  const { fields } = copy.quote;

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[4px] border border-neutral-200 bg-white p-6 md:p-8"
      noValidate
    >
      <p className="mb-6 text-sm text-neutral-500">{copy.cta.responseTime}</p>
      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="company" label={fields.company} required error={errors.company}>
          <Input
            id="company"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            hasError={!!errors.company}
            autoComplete="organization"
          />
        </FormField>
        <FormField id="contactName" label={fields.contactName} required error={errors.contactName}>
          <Input
            id="contactName"
            value={form.contactName}
            onChange={(e) => update("contactName", e.target.value)}
            hasError={!!errors.contactName}
            autoComplete="name"
          />
        </FormField>
        <FormField id="email" label={fields.email} required error={errors.email}>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            hasError={!!errors.email}
            dir="ltr"
            autoComplete="email"
          />
        </FormField>
        <FormField id="phone" label={fields.phone} required error={errors.phone}>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            hasError={!!errors.phone}
            dir="ltr"
            autoComplete="tel"
          />
        </FormField>
        <FormField
          id="service"
          label={fields.service}
          required
          error={errors.serviceSlug}
          className="md:col-span-2"
        >
          <Select
            id="service"
            value={form.serviceSlug}
            onChange={(e) => update("serviceSlug", e.target.value)}
            hasError={!!errors.serviceSlug}
          >
            <option value="">{fields.selectService}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField id="sector" label={fields.sector} required error={errors.sector}>
          <Select
            id="sector"
            value={form.sector}
            onChange={(e) => update("sector", e.target.value)}
            hasError={!!errors.sector}
          >
            <option value="">{fields.sector}</option>
            {fields.sectorOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField id="timeline" label={fields.timeline}>
          <Select
            id="timeline"
            value={form.timeline}
            onChange={(e) => update("timeline", e.target.value)}
          >
            <option value="">{fields.timeline}</option>
            {fields.timelineOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField
          id="description"
          label={fields.description}
          hint={fields.descriptionHint}
          required
          error={errors.description}
          className="md:col-span-2"
        >
          <Textarea
            id="description"
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            hasError={!!errors.description}
            rows={5}
          />
        </FormField>
        <div className="md:col-span-2">
          <label className="flex items-start gap-3 text-sm text-neutral-700">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => update("consent", e.target.checked)}
              className="mt-1 h-4 w-4 rounded-[2px] border-neutral-200 text-blue-600"
            />
            <span>
              {fields.consent}{" "}
              <Link href={getLegalUrl(locale, "privacy")} className="font-semibold text-blue-600 hover:underline">
                {fields.consentLink}
              </Link>
              .
            </span>
          </label>
          {errors.consent && <p className="mt-1 text-sm text-error-600" role="alert">{errors.consent}</p>}
        </div>
      </div>
      <div className="mt-8">
        <Button type="submit" variant="primary" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? copy.quote.submitting : copy.quote.submit}
        </Button>
      </div>
    </form>
  );
}

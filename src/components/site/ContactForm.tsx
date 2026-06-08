"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { SitePagesCopy } from "@/lib/site/types";
import { getLegalUrl } from "@/lib/site/paths";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { FormSuccess } from "./FormSuccess";

type ContactFormProps = {
  locale: Locale;
  copy: SitePagesCopy["contact"];
  formsCopy: SitePagesCopy["forms"];
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  intent: string;
  subject: string;
  message: string;
  consent: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({ locale, copy, formsCopy }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    intent: "",
    subject: "",
    message: "",
    consent: false,
  });

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = copy.errors.required;
    if (!form.email.trim()) next.email = copy.errors.required;
    else if (!emailPattern.test(form.email)) next.email = copy.errors.email;
    if (!form.message.trim()) next.message = copy.errors.required;
    if (!form.intent) next.intent = copy.errors.required;
    if (!form.consent) next.consent = copy.errors.consent;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
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
        title={copy.successTitle}
        message={copy.successMessage}
        reference={reference}
        referenceLabel={formsCopy.referenceLabel}
        nextStepsTitle={formsCopy.nextStepsTitle}
        nextSteps={copy.nextSteps}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[4px] border border-neutral-200 bg-white p-6 md:p-8"
      noValidate
    >
      <p className="mb-6 text-sm text-neutral-500">{copy.responseTime}</p>
      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="name" label={copy.fields.name} required error={errors.name}>
          <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} hasError={!!errors.name} autoComplete="name" />
        </FormField>
        <FormField id="email" label={copy.fields.email} required error={errors.email}>
          <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} hasError={!!errors.email} autoComplete="email" dir="ltr" />
        </FormField>
        <FormField id="phone" label={copy.fields.phone} error={errors.phone}>
          <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" dir="ltr" />
        </FormField>
        <FormField id="intent" label={copy.fields.intent} required error={errors.intent}>
          <Select id="intent" value={form.intent} onChange={(e) => update("intent", e.target.value)} hasError={!!errors.intent}>
            <option value="">—</option>
            {copy.fields.intentOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </Select>
        </FormField>
        <FormField id="organization" label={copy.fields.organization} className="md:col-span-2">
          <Input id="organization" value={form.organization} onChange={(e) => update("organization", e.target.value)} autoComplete="organization" />
        </FormField>
        <FormField id="subject" label={copy.fields.subject} className="md:col-span-2">
          <Input id="subject" value={form.subject} onChange={(e) => update("subject", e.target.value)} />
        </FormField>
        <FormField id="message" label={copy.fields.message} required error={errors.message} className="md:col-span-2">
          <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} rows={5} hasError={!!errors.message} />
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
              {copy.fields.consent}{" "}
              <Link href={getLegalUrl(locale, "privacy")} className="font-semibold text-blue-600 hover:underline">
                {copy.fields.consentLink}
              </Link>
              .
            </span>
          </label>
          {errors.consent && <p className="mt-1 text-sm text-error-600" role="alert">{errors.consent}</p>}
        </div>
      </div>
      <div className="mt-8">
        <Button type="submit" variant="primary" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? copy.submitting : copy.submit}
        </Button>
      </div>
    </form>
  );
}

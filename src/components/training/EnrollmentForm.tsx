"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Course } from "@/lib/training/types";
import type { Locale } from "@/lib/i18n/config";
import type { TrainingPagesCopy } from "@/lib/i18n/types";
import { getLegalUrl } from "@/lib/site/paths";
import { formatSessionLabel } from "@/lib/training/format";
import { FormSuccess } from "@/components/site/FormSuccess";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

type EnrollmentFormProps = {
  courses: Course[];
  locale: Locale;
  copy: TrainingPagesCopy;
  preselectedCourseSlug?: string;
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  courseSlug: string;
  experience: string;
  session: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnrollmentForm({
  courses,
  locale,
  copy,
  preselectedCourseSlug,
}: EnrollmentFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    courseSlug: preselectedCourseSlug ?? "",
    experience: "",
    session: "",
    message: "",
    consent: false,
  });

  const selectedCourse = useMemo(
    () => courses.find((c) => c.slug === form.courseSlug),
    [courses, form.courseSlug],
  );

  const sessionOptions = selectedCourse?.sessions ?? [];

  const updateField = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "courseSlug") next.session = "";
      return next;
    });
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.fullName.trim()) next.fullName = copy.enrollment.errors.required;
    if (!form.email.trim()) next.email = copy.enrollment.errors.required;
    else if (!emailPattern.test(form.email)) next.email = copy.enrollment.errors.email;
    if (!form.phone.trim()) next.phone = copy.enrollment.errors.required;
    if (!form.courseSlug) next.courseSlug = copy.enrollment.errors.required;
    if (!form.experience) next.experience = copy.enrollment.errors.required;
    if (!form.consent) next.consent = copy.enrollment.errors.consent;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/enrollment", {
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
        title={copy.enrollment.successTitle}
        message={copy.enrollment.successMessage}
        reference={reference}
        referenceLabel={copy.forms.referenceLabel}
        nextStepsTitle={copy.forms.nextStepsTitle}
        nextSteps={copy.enrollment.nextSteps}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[4px] border border-neutral-200 bg-white p-6 md:p-8"
      noValidate
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          id="fullName"
          label={copy.enrollment.fields.fullName}
          required
          error={errors.fullName}
        >
          <Input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            hasError={!!errors.fullName}
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
        </FormField>

        <FormField
          id="email"
          label={copy.enrollment.fields.email}
          required
          error={errors.email}
        >
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            hasError={!!errors.email}
            autoComplete="email"
            dir="ltr"
            aria-invalid={!!errors.email}
          />
        </FormField>

        <FormField
          id="phone"
          label={copy.enrollment.fields.phone}
          required
          error={errors.phone}
        >
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            hasError={!!errors.phone}
            autoComplete="tel"
            dir="ltr"
            aria-invalid={!!errors.phone}
          />
        </FormField>

        <FormField
          id="experience"
          label={copy.enrollment.fields.experience}
          required
          error={errors.experience}
        >
          <Select
            id="experience"
            name="experience"
            value={form.experience}
            onChange={(e) => updateField("experience", e.target.value)}
            hasError={!!errors.experience}
            aria-invalid={!!errors.experience}
          >
            <option value="">{copy.enrollment.fields.experience}</option>
            {copy.enrollment.fields.experienceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField
          id="course"
          label={copy.enrollment.fields.course}
          required
          error={errors.courseSlug}
          className="md:col-span-2"
        >
          <Select
            id="course"
            name="course"
            value={form.courseSlug}
            onChange={(e) => updateField("courseSlug", e.target.value)}
            hasError={!!errors.courseSlug}
            aria-invalid={!!errors.courseSlug}
          >
            <option value="">{copy.enrollment.fields.selectCourse}</option>
            {courses.map((course) => (
              <option key={course.slug} value={course.slug}>
                {course.name} — {course.price}
              </option>
            ))}
          </Select>
        </FormField>

        {sessionOptions.length > 0 && (
          <FormField
            id="session"
            label={copy.enrollment.fields.session}
            className="md:col-span-2"
          >
            <Select
              id="session"
              name="session"
              value={form.session}
              onChange={(e) => updateField("session", e.target.value)}
            >
              <option value="">{copy.enrollment.fields.selectSession}</option>
              {sessionOptions.map((session) => {
                const value = `${session.startDate}|${session.endDate}`;
                return (
                  <option key={value} value={value}>
                    {formatSessionLabel(
                      locale,
                      session.startDate,
                      session.endDate,
                      session.format,
                    )}
                  </option>
                );
              })}
            </Select>
          </FormField>
        )}

        <FormField
          id="message"
          label={copy.enrollment.fields.message}
          hint={copy.enrollment.fields.messageHint}
          className="md:col-span-2"
        >
          <Textarea
            id="message"
            name="message"
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            rows={4}
          />
        </FormField>
        <div className="md:col-span-2">
          <label className="flex items-start gap-3 text-sm text-neutral-700">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => updateField("consent", e.target.checked)}
              className="mt-1 h-4 w-4 rounded-[2px] border-neutral-200 text-blue-600"
            />
            <span>
              {copy.enrollment.fields.consent}{" "}
              <Link href={getLegalUrl(locale, "privacy")} className="font-semibold text-blue-600 hover:underline">
                {copy.enrollment.fields.consentLink}
              </Link>
              .
            </span>
          </label>
          {errors.consent && <p className="mt-1 text-sm text-error-600" role="alert">{errors.consent}</p>}
        </div>
      </div>

      <div className="mt-8">
        <Button type="submit" variant="primary" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? copy.enrollment.submitting : copy.enrollment.submit}
        </Button>
      </div>
    </form>
  );
}

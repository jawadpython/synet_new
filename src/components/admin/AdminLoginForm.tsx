"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { adminCopy } from "@/lib/admin/copy";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { useAdminAuth } from "./AdminAuthProvider";

export function AdminLoginForm() {
  const { signIn, configured } = useAdminAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      if (!configured) {
        setError(adminCopy.login.firebaseError);
        return;
      }

      const ok = await signIn(email, password);
      if (!ok) {
        setError(adminCopy.login.error);
        return;
      }

      const next = searchParams.get("next") ?? "/admin/dashboard";
      router.replace(next.startsWith("/admin") ? next : "/admin/dashboard");
    } catch {
      setError(adminCopy.login.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <FormField id="email" label={adminCopy.login.email} required>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          dir="ltr"
          required
        />
      </FormField>
      <FormField id="password" label={adminCopy.login.password} required>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          dir="ltr"
          required
        />
      </FormField>
      {error && (
        <p className="rounded-[4px] border border-error-200 bg-error-50 px-4 py-3 text-sm text-error-700" role="alert">
          {error}
        </p>
      )}
      <Button type="submit" variant="primary" disabled={submitting} className="w-full">
        {submitting ? adminCopy.login.submitting : adminCopy.login.submit}
      </Button>
    </form>
  );
}

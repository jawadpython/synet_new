"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchAdminTestimonial } from "@/lib/admin/api-client";
import { TestimonialEditorForm } from "@/components/admin/TestimonialEditorForm";
import type { FirestoreTestimonialDoc } from "@/lib/firestore/testimonials-types";
import { adminCopy } from "@/lib/admin/copy";

export default function AdminTestimonialEditPage() {
  const params = useParams<{ id: string }>();
  const [initial, setInitial] = useState<FirestoreTestimonialDoc | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const data = await fetchAdminTestimonial(params.id);
        if (active) setInitial(data.testimonial as FirestoreTestimonialDoc);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [params.id]);

  if (loading) return <p className="text-sm text-neutral-500">{adminCopy.table.loading}</p>;
  if (!initial) return <p className="text-sm text-red-600">Témoignage introuvable</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-navy-800">Modifier le témoignage</h2>
      <TestimonialEditorForm testimonialId={params.id} initial={initial} />
    </div>
  );
}

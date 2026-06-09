"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchAdminCourse } from "@/lib/admin/api-client";
import { CourseEditorForm } from "@/components/admin/CourseEditorForm";
import type { FirestoreCourseDoc } from "@/lib/firestore/courses-types";
import type { FirestoreSessionDoc } from "@/lib/firestore/courses-types";

export default function AdminEditCoursePage() {
  const params = useParams();
  const id = params.id as string;
  const [initial, setInitial] = useState<(FirestoreCourseDoc & { sessions?: Array<FirestoreSessionDoc & { id?: string }> }) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdminCourse(id)
      .then((data) => {
        const c = data.course as FirestoreCourseDoc & { id: string; sessions?: Array<FirestoreSessionDoc & { id: string }> };
        const { id: _id, sessions, ...course } = c;
        setInitial({ ...course, sessions });
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-sm text-neutral-500">Chargement…</p>;
  if (!initial) return <p className="text-sm text-error-600">Formation introuvable</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-navy-800">Modifier la formation</h2>
      <CourseEditorForm courseId={id} initial={initial} />
    </div>
  );
}

import { CourseEditorForm } from "@/components/admin/CourseEditorForm";

export default function AdminNewCoursePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-navy-800">Nouvelle formation</h2>
      <CourseEditorForm courseId={null} />
    </div>
  );
}

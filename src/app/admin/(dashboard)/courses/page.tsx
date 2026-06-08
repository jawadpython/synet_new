import { getCourses } from "@/lib/training/get-courses";
import { adminCopy } from "@/lib/admin/copy";
export default function AdminCoursesPage() {
  const courses = getCourses("fr");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-navy-800">{adminCopy.nav.courses}</h2>
        <p className="mt-1 text-sm text-neutral-500">
          Catalogue actuel (fichiers statiques — migration CMS à venir)
        </p>
      </div>

      <div className="overflow-x-auto rounded-[4px] border border-neutral-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">Formation</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">Slug</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">Catégorie</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">Niveau</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">Statut</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-b border-neutral-100 last:border-0">
                <td className="px-4 py-3 font-medium text-neutral-900">{course.name}</td>
                <td className="px-4 py-3 text-neutral-600" dir="ltr">{course.slug}</td>
                <td className="px-4 py-3 text-neutral-600">{course.category}</td>
                <td className="px-4 py-3 text-neutral-600">{course.level}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex rounded-[2px] bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                    Publié
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

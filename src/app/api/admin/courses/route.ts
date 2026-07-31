import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { canManageContent } from "@/lib/admin/permissions";
import { listCoursesAdmin, saveCourseAdmin, seedCoursesFromStatic } from "@/lib/firestore/courses-repository";
import type { FirestoreCourseDoc } from "@/lib/firestore/courses-types";
import { revalidateCoursePages, revalidatePublicContent } from "@/lib/admin/revalidate-public";

export async function GET(request: Request) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canManageContent(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }
    const items = await listCoursesAdmin();
    return Response.json({ items });
  } catch (error) {
    return adminJsonError(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canManageContent(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }

    const body = await request.json();

    if (body.action === "seed") {
      const count = await seedCoursesFromStatic();
      revalidatePublicContent();
      return Response.json({ ok: true, count });
    }

    const { course, sessions } = body as {
      course: FirestoreCourseDoc;
      sessions: Array<Record<string, unknown>>;
    };

    const id = await saveCourseAdmin(null, course, sessions as never);
    revalidateCoursePages(course);
    return Response.json({ ok: true, id });
  } catch (error) {
    return adminJsonError(error);
  }
}

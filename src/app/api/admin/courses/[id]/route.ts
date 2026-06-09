import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { canManageContent } from "@/lib/admin/permissions";
import { getCourseAdmin, saveCourseAdmin } from "@/lib/firestore/courses-repository";
import type { FirestoreCourseDoc } from "@/lib/firestore/courses-types";
import { revalidateCoursePages } from "@/lib/admin/revalidate-public";

type Props = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: Props) {
  try {
    await verifyAdminRequest(request);
    const { id } = await params;
    const course = await getCourseAdmin(id);
    if (!course) return Response.json({ error: "Introuvable" }, { status: 404 });
    return Response.json({ course });
  } catch (error) {
    return adminJsonError(error);
  }
}

export async function PATCH(request: Request, { params }: Props) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canManageContent(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }
    const { id } = await params;
    const body = await request.json();
    const { course, sessions } = body as {
      course: FirestoreCourseDoc;
      sessions: Array<Record<string, unknown>>;
    };
    const savedId = await saveCourseAdmin(id, course, sessions as never);
    revalidateCoursePages(course);
    return Response.json({ ok: true, id: savedId });
  } catch (error) {
    return adminJsonError(error);
  }
}

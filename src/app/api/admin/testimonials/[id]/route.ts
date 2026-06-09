import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { canManageContent } from "@/lib/admin/permissions";
import { getTestimonialAdmin, saveTestimonialAdmin } from "@/lib/firestore/testimonials-repository";
import type { FirestoreTestimonialDoc } from "@/lib/firestore/testimonials-types";
import { revalidateHomepages } from "@/lib/admin/revalidate-public";

type Props = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: Props) {
  try {
    await verifyAdminRequest(request);
    const { id } = await params;
    const testimonial = await getTestimonialAdmin(id);
    if (!testimonial) return Response.json({ error: "Introuvable" }, { status: 404 });
    return Response.json({ testimonial });
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
    const { testimonial } = body as { testimonial: FirestoreTestimonialDoc };
    const savedId = await saveTestimonialAdmin(id, testimonial);
    revalidateHomepages();
    return Response.json({ ok: true, id: savedId });
  } catch (error) {
    return adminJsonError(error);
  }
}

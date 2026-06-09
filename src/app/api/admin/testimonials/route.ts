import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { canManageContent } from "@/lib/admin/permissions";
import { listTestimonialsAdmin, saveTestimonialAdmin, seedTestimonialsFromDictionaries } from "@/lib/firestore/testimonials-repository";
import type { FirestoreTestimonialDoc } from "@/lib/firestore/testimonials-types";
import { revalidateHomepages } from "@/lib/admin/revalidate-public";

export async function GET(request: Request) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canManageContent(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }
    const items = await listTestimonialsAdmin();
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
      const count = await seedTestimonialsFromDictionaries();
      revalidateHomepages();
      return Response.json({ ok: true, count });
    }

    const { testimonial } = body as { testimonial: FirestoreTestimonialDoc };
    const id = await saveTestimonialAdmin(null, testimonial);
    revalidateHomepages();
    return Response.json({ ok: true, id });
  } catch (error) {
    return adminJsonError(error);
  }
}

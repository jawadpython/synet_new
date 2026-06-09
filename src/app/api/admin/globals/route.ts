import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore } from "@/lib/firebase/admin";
import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { canManageContent } from "@/lib/admin/permissions";
import { revalidatePublicContent } from "@/lib/admin/revalidate-public";

export async function GET(request: Request) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canManageContent(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }
    const snap = await getAdminFirestore().collection("settings").doc("globals").get();
    return Response.json({ globals: snap.exists ? snap.data() : null });
  } catch (error) {
    return adminJsonError(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canManageContent(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }
    const body = await request.json();
    await getAdminFirestore().collection("settings").doc("globals").set(
      { ...body, updatedAt: FieldValue.serverTimestamp(), updatedBy: user.uid },
      { merge: true },
    );
    revalidatePublicContent();
    return Response.json({ ok: true });
  } catch (error) {
    return adminJsonError(error);
  }
}

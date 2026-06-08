import { getAdminFirestore } from "@/lib/firebase/admin";
import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { canManageContent } from "@/lib/admin/permissions";

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

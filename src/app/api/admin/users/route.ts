import { getAdminFirestore } from "@/lib/firebase/admin";
import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { canManageUsers } from "@/lib/admin/permissions";
import { serializeTimestamp } from "@/lib/admin/firestore-helpers";

export async function GET(request: Request) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canManageUsers(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }
    const snap = await getAdminFirestore().collection("users").orderBy("name", "asc").get();
    const items = snap.docs.map((doc) => {
      const d = doc.data();
      return {
        id: doc.id,
        email: d.email,
        name: d.name,
        role: d.role,
        active: d.active,
        createdAt: serializeTimestamp(d.createdAt),
      };
    });
    return Response.json({ items });
  } catch (error) {
    return adminJsonError(error);
  }
}

import { getAdminFirestore } from "@/lib/firebase/admin";
import { serializeTimestamp } from "@/lib/admin/firestore-helpers";
import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { canViewMessages } from "@/lib/admin/permissions";

export async function GET(request: Request) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canViewMessages(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }

    const snap = await getAdminFirestore()
      .collection("leads")
      .orderBy("createdAt", "desc")
      .limit(200)
      .get();

    const items = snap.docs
      .filter((doc) => doc.data().source === "website_contact")
      .slice(0, 100)
      .map((doc) => {
      const d = doc.data();
      return {
        id: doc.id,
        reference: String(d.reference ?? ""),
        status: String(d.status ?? "new"),
        fullName: String(d.fullName ?? ""),
        email: String(d.email ?? ""),
        phone: String(d.phone ?? ""),
        organization: String(d.organization ?? ""),
        subject: String(d.subject ?? ""),
        intent: String(d.intent ?? ""),
        message: String(d.message ?? ""),
        locale: String(d.locale ?? ""),
        createdAt: serializeTimestamp(d.createdAt),
      };
      });

    return Response.json({ items });
  } catch (error) {
    return adminJsonError(error);
  }
}

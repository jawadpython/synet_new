import { getAdminFirestore } from "@/lib/firebase/admin";
import { serializeTimestamp } from "@/lib/admin/firestore-helpers";
import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { canViewQuotes } from "@/lib/admin/permissions";

export async function GET(request: Request) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canViewQuotes(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }

    const snap = await getAdminFirestore()
      .collection("serviceRequests")
      .orderBy("createdAt", "desc")
      .limit(100)
      .get();

    const items = snap.docs.map((doc) => {
      const d = doc.data();
      return {
        id: doc.id,
        reference: String(d.reference ?? ""),
        status: String(d.status ?? "new"),
        companyName: String(d.companyName ?? ""),
        contactName: String(d.contactName ?? ""),
        email: String(d.contactEmail ?? ""),
        phone: String(d.contactPhone ?? ""),
        serviceName: String(d.serviceName ?? ""),
        sector: String(d.sector ?? ""),
        timeline: String(d.timeline ?? ""),
        locale: String(d.locale ?? ""),
        createdAt: serializeTimestamp(d.createdAt),
      };
    });

    return Response.json({ items });
  } catch (error) {
    return adminJsonError(error);
  }
}

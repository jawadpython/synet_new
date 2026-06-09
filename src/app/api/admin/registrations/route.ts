import { getAdminFirestore } from "@/lib/firebase/admin";
import { serializeTimestamp } from "@/lib/admin/firestore-helpers";
import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";

export async function GET(request: Request) {
  try {
    await verifyAdminRequest(request);
    const snap = await getAdminFirestore()
      .collection("registrations")
      .orderBy("createdAt", "desc")
      .limit(100)
      .get();

    const items = snap.docs.map((doc) => {
      const d = doc.data();
      return {
        id: doc.id,
        reference: String(d.reference ?? ""),
        status: String(d.status ?? "new"),
        fullName: String(d.fullName ?? ""),
        email: String(d.email ?? ""),
        phone: String(d.phone ?? ""),
        courseName: String(d.courseName ?? ""),
        experience: String(d.experience ?? ""),
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

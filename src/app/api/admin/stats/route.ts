import { getAdminFirestore } from "@/lib/firebase/admin";
import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";

async function countNew(collection: string, extra?: { field: string; value: string }) {
  const db = getAdminFirestore();
  let query = db.collection(collection).where("status", "==", "new");
  if (extra) {
    query = query.where(extra.field, "==", extra.value);
  }
  const snap = await query.count().get();
  return snap.data().count;
}

export async function GET(request: Request) {
  try {
    await verifyAdminRequest(request);
    const [registrationsNew, quotesNew, messagesNew, leadsNew] = await Promise.all([
      countNew("registrations"),
      countNew("serviceRequests"),
      countNew("leads", { field: "source", value: "website_contact" }),
      countNew("leads"),
    ]);
    return Response.json({ registrationsNew, quotesNew, messagesNew, leadsNew });
  } catch (error) {
    return adminJsonError(error);
  }
}

import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore } from "@/lib/firebase/admin";
import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { canManageContent } from "@/lib/admin/permissions";
import { revalidatePublicContent } from "@/lib/admin/revalidate-public";
import { PHONE_DISPLAY } from "@/lib/site/nap";

function lockPublicPhone(body: Record<string, unknown>) {
  const locales = body.locales;
  if (!locales || typeof locales !== "object") return body;
  const next: Record<string, unknown> = {};
  for (const [locale, value] of Object.entries(locales as Record<string, unknown>)) {
    next[locale] =
      value && typeof value === "object"
        ? { ...(value as Record<string, unknown>), phone: PHONE_DISPLAY }
        : { phone: PHONE_DISPLAY };
  }
  return { ...body, locales: next };
}

export async function GET(request: Request) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canManageContent(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }
    const snap = await getAdminFirestore().collection("settings").doc("globals").get();
    const globals = snap.exists ? lockPublicPhone(snap.data() as Record<string, unknown>) : null;
    return Response.json({ globals });
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
    const body = lockPublicPhone(await request.json());
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

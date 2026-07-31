import { getAuth } from "firebase-admin/auth";
import { getAdminApp, getAdminFirestore } from "@/lib/firebase/admin";
import type { AdminRole, AdminUser } from "./types";

export class AdminAuthError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

const ALLOWED_ROLES: AdminRole[] = ["admin", "super_admin", "trainer"];

export async function verifyAdminRequest(request: Request): Promise<AdminUser> {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) {
    throw new AdminAuthError("Non autorisé", 401);
  }

  const token = header.slice(7);
  getAdminApp();

  let decoded;
  try {
    decoded = await getAuth().verifyIdToken(token);
  } catch {
    throw new AdminAuthError("Session invalide", 401);
  }

  const userSnap = await getAdminFirestore().collection("users").doc(decoded.uid).get();
  if (!userSnap.exists) {
    throw new AdminAuthError("Profil introuvable", 403);
  }

  const data = userSnap.data()!;
  if (data.active === false) {
    throw new AdminAuthError("Compte désactivé", 403);
  }

  const claimRole = decoded.role as AdminRole | undefined;
  const role = (data.role as AdminRole | undefined) ?? claimRole;
  if (!role || !ALLOWED_ROLES.includes(role)) {
    throw new AdminAuthError("Accès refusé", 403);
  }

  return {
    uid: decoded.uid,
    email: String(data.email ?? decoded.email ?? ""),
    name: String(data.name ?? ""),
    role,
    active: true,
    locale: data.locale as string | undefined,
    divisions: data.divisions as string[] | undefined,
  };
}

export function adminJsonError(error: unknown) {
  if (error instanceof AdminAuthError) {
    return Response.json({ error: error.message }, { status: error.status });
  }
  console.error("[admin]", error);
  return Response.json({ error: "Erreur serveur" }, { status: 500 });
}

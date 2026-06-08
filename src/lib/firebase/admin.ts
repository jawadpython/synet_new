import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

type ServiceAccount = {
  project_id: string;
  client_email: string;
  private_key: string;
};

function parseServiceAccountJson(): ServiceAccount | null {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ServiceAccount;
  } catch {
    return null;
  }
}

export function isFirebaseConfigured(): boolean {
  if (parseServiceAccountJson()) return true;
  return Boolean(
    process.env.FIREBASE_PROJECT_ID &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PRIVATE_KEY,
  );
}

function resolveCredentials() {
  const fromJson = parseServiceAccountJson();
  if (fromJson) {
    return cert({
      projectId: fromJson.project_id,
      clientEmail: fromJson.client_email,
      privateKey: fromJson.private_key,
    });
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Firebase Admin is not configured. Set FIREBASE_SERVICE_ACCOUNT_JSON or FIREBASE_PROJECT_ID + FIREBASE_CLIENT_EMAIL + FIREBASE_PRIVATE_KEY.",
    );
  }

  return cert({ projectId, clientEmail, privateKey });
}

let adminApp: App | undefined;

export function getAdminApp(): App {
  if (adminApp) return adminApp;
  const existing = getApps()[0];
  if (existing) {
    adminApp = existing;
    return adminApp;
  }
  adminApp = initializeApp({ credential: resolveCredentials() });
  return adminApp;
}

export function getAdminFirestore(): Firestore {
  return getFirestore(getAdminApp());
}

/**
 * One-time Firebase project setup using the logged-in Firebase CLI account.
 * Run: npm run firebase:setup
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { requireAuth } = require("firebase-tools/lib/requireAuth");
const { getAccessToken } = require("firebase-tools/lib/apiv2");
const { getGlobalDefaultAccount, setActiveAccount } = require("firebase-tools/lib/auth");

const PROJECT_ID = "synet-5603c";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const WEB_CONFIG = {
  apiKey: "AIzaSyAnyvKuoPgksjpWUZnM564Sf0mTkcXTlec",
  authDomain: "synet-5603c.firebaseapp.com",
  projectId: PROJECT_ID,
  storageBucket: "synet-5603c.firebasestorage.app",
  messagingSenderId: "759992939636",
  appId: "1:759992939636:web:d45744cb69ca6631bdcd21",
};

function firestoreValue(value) {
  if (typeof value === "string") return { stringValue: value };
  if (typeof value === "boolean") return { booleanValue: value };
  if (typeof value === "number") return { integerValue: String(value) };
  if (value === null) return { nullValue: null };
  if (Array.isArray(value)) {
    return {
      arrayValue: {
        values: value.map((item) => firestoreValue(item)),
      },
    };
  }
  if (typeof value === "object") {
    const fields = {};
    for (const [key, nested] of Object.entries(value)) {
      fields[key] = firestoreValue(nested);
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(value) };
}

function toFirestoreFields(obj) {
  const fields = {};
  for (const [key, value] of Object.entries(obj)) {
    fields[key] = firestoreValue(value);
  }
  return fields;
}

async function firestoreUpsert(collectionId, documentId, data, accessToken) {
  const base = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;
  const docUrl = `${base}/${collectionId}/${documentId}`;
  const body = JSON.stringify({ fields: toFirestoreFields(data) });
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const getRes = await fetch(docUrl, { method: "GET", headers });
  const exists = getRes.ok;

  if (exists) {
    const mask = Object.keys(data)
      .map((key) => `updateMask.fieldPaths=${encodeURIComponent(key)}`)
      .join("&");
    const patchRes = await fetch(`${docUrl}?${mask}`, {
      method: "PATCH",
      headers,
      body,
    });
    if (!patchRes.ok) {
      const text = await patchRes.text();
      throw new Error(`Firestore update ${collectionId}/${documentId} failed (${patchRes.status}): ${text.slice(0, 300)}`);
    }
    return;
  }

  const createRes = await fetch(`${base}/${collectionId}?documentId=${documentId}`, {
    method: "POST",
    headers,
    body,
  });
  if (!createRes.ok) {
    const text = await createRes.text();
    throw new Error(`Firestore create ${collectionId}/${documentId} failed (${createRes.status}): ${text.slice(0, 300)}`);
  }
}

async function seedFirestore(accessToken) {
  const globals = {
    projectId: PROJECT_ID,
    siteName: "SYNET",
    locales: {
      fr: {
        address: "Casablanca, Maroc",
        phone: "+212 5XX XX XX XX",
        email: "contact@synet.ma",
        hours: "Lun – Ven, 8h30 – 18h00",
      },
      en: {
        address: "Casablanca, Morocco",
        phone: "+212 5XX XX XX XX",
        email: "contact@synet.ma",
        hours: "Mon – Fri, 8:30 AM – 6:00 PM",
      },
      ar: {
        address: "الدار البيضاء، المغرب",
        phone: "+212 5XX XX XX XX",
        email: "contact@synet.ma",
        hours: "الإثنين – الجمعة، 8:30 – 18:00",
      },
    },
    updatedAt: new Date().toISOString(),
  };

  const featureFlags = {
    cmsFromFirestore: false,
    maintenanceMode: false,
    formsPersistToFirestore: true,
    updatedAt: new Date().toISOString(),
  };

  const seoDefaults = {
    siteUrl: "",
    updatedAt: new Date().toISOString(),
  };

  const docs = [
    ["settings", "globals", globals],
    ["settings", "featureFlags", featureFlags],
    ["settings", "seoDefaults", seoDefaults],
  ];

  for (const [collectionId, documentId, data] of docs) {
    await firestoreUpsert(collectionId, documentId, data, accessToken);
    console.log(`✓ Seeded ${collectionId}/${documentId}`);
  }
}

async function enableEmailAuth(accessToken) {
  const url = `https://identitytoolkit.googleapis.com/admin/v2/projects/${PROJECT_ID}/config?updateMask=signIn.email.enabled,signIn.email.passwordRequired`;
  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signIn: {
          email: {
            enabled: true,
            passwordRequired: true,
          },
        },
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`${res.status}: ${text.slice(0, 200)}`);
    }
    console.log("✓ Enabled Email/Password authentication");
  } catch (error) {
    console.warn("⚠ Could not enable Email/Password via API — enable manually in Firebase Console → Authentication");
    console.warn(`  ${error.message ?? error}`);
  }
}

async function createServiceAccountKey(accessToken) {
  const listRes = await fetch(`https://iam.googleapis.com/v1/projects/${PROJECT_ID}/serviceAccounts`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!listRes.ok) {
    throw new Error(`List service accounts failed (${listRes.status})`);
  }

  const list = await listRes.json();
  const accounts = list.accounts ?? [];
  const adminSdk = accounts.find((a) => a.email?.includes("firebase-adminsdk"));

  if (!adminSdk) {
    console.warn("⚠ No firebase-adminsdk service account found — download key manually from Firebase Console");
    return null;
  }

  const keyRes = await fetch(`https://iam.googleapis.com/v1/${adminSdk.name}/keys`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      keyAlgorithm: "KEY_ALG_RSA_2048",
      privateKeyType: "TYPE_GOOGLE_CREDENTIALS_FILE",
    }),
  });

  if (!keyRes.ok) {
    const text = await keyRes.text();
    throw new Error(`Create key failed (${keyRes.status}): ${text.slice(0, 200)}`);
  }

  const keyBody = await keyRes.json();
  const decoded = JSON.parse(Buffer.from(keyBody.privateKeyData, "base64").toString("utf8"));

  const keyPath = path.join(ROOT, "firebase-service-account.json");
  fs.writeFileSync(keyPath, JSON.stringify(decoded, null, 2), "utf8");
  console.log("✓ Service account key saved to firebase-service-account.json");
  return decoded;
}

function writeEnvLocal(serviceAccount) {
  const envPath = path.join(ROOT, ".env.local");
  const lines = [
    "# Generated by npm run firebase:setup — do not commit",
    "",
    "# Firebase Admin (server API routes)",
  ];

  if (serviceAccount) {
    lines.push(`FIREBASE_SERVICE_ACCOUNT_JSON=${JSON.stringify(serviceAccount)}`);
  } else {
    lines.push("# FIREBASE_SERVICE_ACCOUNT_JSON=...");
  }

  lines.push(
    "",
    "# Firebase Web (public — future admin dashboard)",
    `NEXT_PUBLIC_FIREBASE_API_KEY=${WEB_CONFIG.apiKey}`,
    `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${WEB_CONFIG.authDomain}`,
    `NEXT_PUBLIC_FIREBASE_PROJECT_ID=${WEB_CONFIG.projectId}`,
    `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=${WEB_CONFIG.storageBucket}`,
    `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=${WEB_CONFIG.messagingSenderId}`,
    `NEXT_PUBLIC_FIREBASE_APP_ID=${WEB_CONFIG.appId}`,
    "",
    "# Set after Vercel deploy",
    "# NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app",
    "",
  );

  fs.writeFileSync(envPath, lines.join("\n"), "utf8");
  console.log("✓ Wrote .env.local");
}

async function main() {
  console.log(`Configuring Firebase project: ${PROJECT_ID}\n`);

  const account = getGlobalDefaultAccount();
  if (!account) {
    throw new Error("Not logged in. Run: firebase login");
  }

  const options = {
    project: PROJECT_ID,
    projectId: PROJECT_ID,
    user: account.user,
    tokens: account.tokens,
  };
  setActiveAccount(options, account);
  const email = await requireAuth(options);
  console.log(`Authenticated as: ${email ?? "(application credentials)"}\n`);

  const accessToken = await getAccessToken();

  await seedFirestore(accessToken);
  await enableEmailAuth(accessToken);

  let serviceAccount = null;
  try {
    serviceAccount = await createServiceAccountKey(accessToken);
  } catch (error) {
    console.warn("⚠ Could not create service account key via API");
    console.warn(`  ${error.message ?? error}`);
    console.warn("  Download manually: Firebase Console → Project settings → Service accounts → Generate new private key");
  }

  writeEnvLocal(serviceAccount);

  console.log("\nDone. Next steps:");
  console.log("  1. npm run dev");
  console.log("  2. Open http://localhost:3000/api/health (firebase should be configured)");
  console.log("  3. Add FIREBASE_SERVICE_ACCOUNT_JSON to Vercel environment variables before production deploy");
}

main().catch((error) => {
  console.error("\nSetup failed:", error.message ?? error);
  process.exit(1);
});

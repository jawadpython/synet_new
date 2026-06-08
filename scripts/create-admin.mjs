/**
 * Create or update a SYNET admin user.
 *
 * Usage:
 *   npm run firebase:create-admin
 *
 * Or with env vars (non-interactive):
 *   ADMIN_EMAIL=you@synet.ma ADMIN_PASSWORD='YourSecurePass1!' ADMIN_NAME='Your Name' npm run firebase:create-admin
 */
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { randomBytes } from "node:crypto";

const require = createRequire(import.meta.url);
const { cert, getApps, initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PROJECT_ID = "synet-5603c";

function loadServiceAccount() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  }

  const keyPath = path.join(ROOT, "firebase-service-account.json");
  if (fs.existsSync(keyPath)) {
    return JSON.parse(fs.readFileSync(keyPath, "utf8"));
  }

  throw new Error(
    "Missing credentials. Run npm run firebase:setup first or set FIREBASE_SERVICE_ACCOUNT_JSON.",
  );
}

function initAdmin() {
  if (getApps().length) return;
  const sa = loadServiceAccount();
  initializeApp({ credential: cert(sa) });
}

function generatePassword() {
  const base = randomBytes(12).toString("base64url");
  return `${base}Aa1!`;
}

async function promptValue(rl, label, { defaultValue = "", secret = false } = {}) {
  const envKey = label.toUpperCase().replace(/\s+/g, "_");
  if (process.env[envKey]) return process.env[envKey];

  const suffix = defaultValue ? ` [${defaultValue}]` : "";
  const answer = secret
    ? await rl.question(`${label}${suffix}: `)
    : await rl.question(`${label}${suffix}: `);

  if (!answer.trim() && defaultValue) return defaultValue;
  return answer.trim();
}

async function main() {
  initAdmin();
  const auth = getAuth();
  const db = getFirestore();

  const rl = readline.createInterface({ input, output });

  try {
    const email = (process.env.ADMIN_EMAIL ?? (await promptValue(rl, "Admin email"))).trim().toLowerCase();
    const name = process.env.ADMIN_NAME ?? (await promptValue(rl, "Admin display name", { defaultValue: "SYNET Admin" }));
    let password = process.env.ADMIN_PASSWORD;
    let generated = false;

    if (!password) {
      const useGenerated = process.env.ADMIN_GENERATE_PASSWORD !== "false";
      if (useGenerated) {
        password = generatePassword();
        generated = true;
      } else {
        password = await promptValue(rl, "Admin password (min 8 chars)", { secret: true });
      }
    }

    if (!email || !password || password.length < 8) {
      throw new Error("Email and password (min 8 characters) are required.");
    }

    let user;
    let created = false;

    try {
      user = await auth.getUserByEmail(email);
      await auth.updateUser(user.uid, {
        password,
        displayName: name,
        emailVerified: true,
        disabled: false,
      });
      console.log(`Updating existing auth user: ${email}`);
    } catch (error) {
      if (error.code !== "auth/user-not-found") throw error;
      user = await auth.createUser({
        email,
        password,
        displayName: name,
        emailVerified: true,
        disabled: false,
      });
      created = true;
      console.log(`Created auth user: ${email}`);
    }

    await auth.setCustomUserClaims(user.uid, { role: "admin", active: true });

    const now = FieldValue.serverTimestamp();
    await db.collection("users").doc(user.uid).set(
      {
        email,
        name,
        role: "admin",
        active: true,
        divisions: ["business", "training"],
        locale: "fr",
        notificationPrefs: { newLead: true, dailyDigest: true },
        mustChangePassword: created || generated,
        createdAt: now,
        updatedAt: now,
      },
      { merge: true },
    );

    console.log("\nAdmin account ready.");
    console.log(`  UID:   ${user.uid}`);
    console.log(`  Email: ${email}`);
    console.log(`  Role:  admin (custom claims set)`);
    if (generated) {
      console.log(`\n  Temporary password (save now — not stored in repo):`);
      console.log(`  ${password}`);
      console.log("\n  Change this password after the admin dashboard login is available.");
    }
    console.log("\nFirestore: users/" + user.uid);
    console.log("Note: Admin UI (/admin) is not built yet — account is ready for when it is.");
  } finally {
    rl.close();
  }
}

main().catch((error) => {
  if (error.code === "auth/configuration-not-found") {
    console.error(
      "\nFirebase Authentication is not initialized.\n" +
        "Open Firebase Console → Authentication → Get started → enable Email/Password,\n" +
        "then run this script again.",
    );
  } else {
    console.error("\nFailed:", error.message ?? error);
  }
  process.exit(1);
});

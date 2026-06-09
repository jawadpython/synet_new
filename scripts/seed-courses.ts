import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { seedCoursesFromStatic } from "../src/lib/firestore/courses-repository";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function loadCredentials() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) return;

  const keyPath = path.join(ROOT, "firebase-service-account.json");
  if (fs.existsSync(keyPath)) {
    process.env.FIREBASE_SERVICE_ACCOUNT_JSON = fs.readFileSync(keyPath, "utf8");
  }
}

async function main() {
  loadCredentials();
  const count = await seedCoursesFromStatic();
  console.log(`Seeded ${count} courses to Firestore`);
  console.log("Enabled settings/featureFlags.cmsFromFirestore = true");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

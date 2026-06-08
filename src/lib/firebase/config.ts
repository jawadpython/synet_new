/** Public Firebase web config — used by the future admin dashboard (client SDK). */
export const publicFirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
};

export function isPublicFirebaseConfigured(): boolean {
  return Boolean(
    publicFirebaseConfig.apiKey &&
      publicFirebaseConfig.authDomain &&
      publicFirebaseConfig.projectId &&
      publicFirebaseConfig.appId,
  );
}

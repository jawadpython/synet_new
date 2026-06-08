import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { isPublicFirebaseConfigured, publicFirebaseConfig } from "./config";

let app: FirebaseApp | undefined;
let auth: Auth | undefined;

export function getFirebaseApp(): FirebaseApp {
  if (!isPublicFirebaseConfigured()) {
    throw new Error("Firebase client is not configured. Set NEXT_PUBLIC_FIREBASE_* in .env.local");
  }
  if (app) return app;
  app = getApps().length ? getApp() : initializeApp(publicFirebaseConfig);
  return app;
}

export function getFirebaseAuth(): Auth {
  if (auth) return auth;
  auth = getAuth(getFirebaseApp());
  return auth;
}

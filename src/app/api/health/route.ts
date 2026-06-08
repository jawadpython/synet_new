import { NextResponse } from "next/server";
import { isFirebaseConfigured } from "@/lib/firebase/admin";

export async function GET() {
  return NextResponse.json({
    ok: true,
    firebase: isFirebaseConfigured() ? "configured" : "not_configured",
    timestamp: new Date().toISOString(),
  });
}

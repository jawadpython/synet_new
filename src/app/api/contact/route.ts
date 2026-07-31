import { NextResponse } from "next/server";
import { parseContactPayload } from "@/lib/api/validation";
import { submitContact } from "@/lib/firestore/submissions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseContactPayload(body);
    if (!payload) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const result = await submitContact(payload);
    return NextResponse.json({ ok: true, reference: result.reference, persisted: result.persisted });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { parseQuotePayload } from "@/lib/api/validation";
import { submitQuote } from "@/lib/firestore/submissions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseQuotePayload(body);
    if (!payload) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const result = await submitQuote(payload);
    return NextResponse.json({ ok: true, reference: result.reference, persisted: result.persisted });
  } catch (error) {
    console.error("[quote]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

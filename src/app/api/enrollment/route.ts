import { NextResponse } from "next/server";
import { parseEnrollmentPayload } from "@/lib/api/validation";
import { submitEnrollment } from "@/lib/firestore/submissions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseEnrollmentPayload(body);
    if (!payload) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const result = await submitEnrollment(payload);
    return NextResponse.json({ ok: true, reference: result.reference, persisted: result.persisted });
  } catch (error) {
    console.error("[enrollment]", error);
    if (error instanceof Error && error.message === "Invalid course") {
      return NextResponse.json({ error: "Invalid course" }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

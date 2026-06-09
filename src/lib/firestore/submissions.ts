import { FieldValue } from "firebase-admin/firestore";
import { generateReference } from "@/lib/api/references";
import type {
  ContactPayload,
  EnrollmentPayload,
  QuotePayload,
} from "@/lib/api/validation";
import { getAdminFirestore, isFirebaseConfigured } from "@/lib/firebase/admin";
import { getCourseBySlugServer } from "@/lib/training/get-courses-server";
import { formatSessionLabel } from "@/lib/training/format";
import { getServiceBySlug } from "@/lib/solutions/get-services";
import { nextReference } from "./references";

export type SubmitResult = {
  reference: string;
  persisted: boolean;
};

function normalizeCompanyName(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

function divisionFromIntent(intent: string): "business" | "training" | "both" {
  if (intent === "business") return "business";
  if (intent === "training") return "training";
  if (intent === "both") return "both";
  return "business";
}

async function createCompanyRecord(
  name: string,
  sector: string,
): Promise<{ id: string; reference: string; name: string }> {
  const db = getAdminFirestore();
  const reference = await nextReference("company");
  const docRef = db.collection("companies").doc();
  const now = FieldValue.serverTimestamp();

  await docRef.set({
    reference,
    name,
    normalizedName: normalizeCompanyName(name),
    sector,
    status: "prospect",
    leadCount: 0,
    serviceRequestCount: 1,
    createdAt: now,
    updatedAt: now,
  });

  return { id: docRef.id, reference, name };
}

export async function submitContact(payload: ContactPayload): Promise<SubmitResult> {
  if (!isFirebaseConfigured()) {
    const reference = generateReference("LED");
    console.info("[contact]", reference, payload);
    return { reference, persisted: false };
  }

  const db = getAdminFirestore();
  const reference = await nextReference("lead");
  const now = FieldValue.serverTimestamp();
  const leadRef = db.collection("leads").doc();

  await leadRef.set({
    reference,
    status: "new",
    division: divisionFromIntent(payload.intent),
    source: "website_contact",
    intent: payload.intent,
    fullName: payload.name,
    email: payload.email,
    phone: payload.phone ?? "",
    organization: payload.organization ?? "",
    companyName: payload.organization ?? "",
    subject: payload.subject ?? "",
    message: payload.message,
    locale: payload.locale,
    createdAt: now,
    updatedAt: now,
  });

  return { reference, persisted: true };
}

export async function submitQuote(payload: QuotePayload): Promise<SubmitResult> {
  if (!isFirebaseConfigured()) {
    const reference = generateReference("DEV");
    console.info("[quote]", reference, payload);
    return { reference, persisted: false };
  }

  const service = getServiceBySlug(payload.locale, payload.serviceSlug);
  const serviceName = service?.name ?? payload.serviceSlug;
  const serviceId = payload.serviceSlug;

  const db = getAdminFirestore();
  const company = await createCompanyRecord(payload.company, payload.sector);
  const leadReference = await nextReference("lead");
  const requestReference = await nextReference("serviceRequest");
  const now = FieldValue.serverTimestamp();

  const leadRef = db.collection("leads").doc();
  const requestRef = db.collection("serviceRequests").doc();

  const batch = db.batch();

  batch.set(leadRef, {
    reference: leadReference,
    status: "new",
    division: "business",
    source: "website_quote",
    sourceId: requestRef.id,
    intent: "business",
    fullName: payload.contactName,
    email: payload.email,
    phone: payload.phone,
    organization: payload.company,
    companyId: company.id,
    companyName: payload.company,
    message: payload.description,
    locale: payload.locale,
    createdAt: now,
    updatedAt: now,
  });

  batch.set(requestRef, {
    reference: requestReference,
    status: "new",
    companyId: company.id,
    companyName: payload.company,
    contactName: payload.contactName,
    contactEmail: payload.email,
    contactPhone: payload.phone,
    serviceId,
    serviceName,
    sector: payload.sector,
    timeline: payload.timeline || "exploring",
    description: payload.description,
    leadId: leadRef.id,
    locale: payload.locale,
    consentAt: now,
    createdAt: now,
    updatedAt: now,
  });

  await batch.commit();
  return { reference: requestReference, persisted: true };
}

export async function submitEnrollment(payload: EnrollmentPayload): Promise<SubmitResult> {
  if (!isFirebaseConfigured()) {
    const reference = generateReference("INS");
    console.info("[enrollment]", reference, payload);
    return { reference, persisted: false };
  }

  const course = await getCourseBySlugServer(payload.locale, payload.courseSlug);
  if (!course) {
    throw new Error("Invalid course");
  }

  const sessionIndex = payload.session ? Number.parseInt(payload.session, 10) : NaN;
  const session =
    Number.isFinite(sessionIndex) && sessionIndex >= 0
      ? course.sessions[sessionIndex]
      : undefined;
  const sessionLabel = session
    ? formatSessionLabel(
        payload.locale,
        session.startDate,
        session.endDate,
        session.format,
      )
    : undefined;

  const db = getAdminFirestore();
  const registrationReference = await nextReference("registration");
  const leadReference = await nextReference("lead");
  const now = FieldValue.serverTimestamp();

  const registrationRef = db.collection("registrations").doc();
  const leadRef = db.collection("leads").doc();

  const batch = db.batch();

  batch.set(registrationRef, {
    reference: registrationReference,
    status: "new",
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    courseId: course.id,
    courseName: course.name,
    sessionId: session ? String(sessionIndex) : "",
    sessionLabel: sessionLabel ?? "",
    experience: payload.experience,
    message: payload.message ?? "",
    locale: payload.locale,
    consentAt: now,
    createdAt: now,
    updatedAt: now,
  });

  batch.set(leadRef, {
    reference: leadReference,
    status: "new",
    division: "training",
    source: "website_enrollment",
    sourceId: registrationRef.id,
    intent: "training",
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    organization: "",
    message: payload.message ?? "",
    locale: payload.locale,
    createdAt: now,
    updatedAt: now,
  });

  await batch.commit();
  return { reference: registrationReference, persisted: true };
}

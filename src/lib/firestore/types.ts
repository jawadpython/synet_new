import type { Timestamp } from "firebase-admin/firestore";

export type CounterType = "registration" | "serviceRequest" | "lead" | "company";

export type LeadSource =
  | "website_contact"
  | "website_quote"
  | "website_enrollment"
  | "phone"
  | "email"
  | "referral"
  | "event";

export type LeadStatus =
  | "new"
  | "in_review"
  | "contacted"
  | "qualified"
  | "converted"
  | "lost"
  | "spam"
  | "archived";

export type RegistrationStatus =
  | "new"
  | "in_review"
  | "contacted"
  | "qualified"
  | "enrolled"
  | "lost"
  | "spam"
  | "archived";

export type ServiceRequestStatus =
  | "new"
  | "in_review"
  | "contacted"
  | "qualified"
  | "proposal_sent"
  | "won"
  | "lost"
  | "spam"
  | "archived";

export type LeadDoc = {
  reference: string;
  status: LeadStatus;
  division: "business" | "training" | "both";
  source: LeadSource;
  sourceId?: string;
  intent?: string;
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  companyName?: string;
  subject?: string;
  message?: string;
  locale: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type RegistrationDoc = {
  reference: string;
  status: RegistrationStatus;
  fullName: string;
  email: string;
  phone: string;
  courseId: string;
  courseName: string;
  sessionId?: string;
  sessionLabel?: string;
  experience: string;
  message?: string;
  locale: string;
  consentAt: Timestamp;
  sourceUrl?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type ServiceRequestDoc = {
  reference: string;
  status: ServiceRequestStatus;
  companyId: string;
  companyName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  serviceId: string;
  serviceName: string;
  sector: string;
  timeline: string;
  description: string;
  leadId?: string;
  locale: string;
  consentAt: Timestamp;
  sourceUrl?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type CompanyDoc = {
  reference: string;
  name: string;
  normalizedName: string;
  sector: string;
  status: "prospect" | "active" | "inactive";
  leadCount: number;
  serviceRequestCount: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

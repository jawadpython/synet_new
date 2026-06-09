"use client";

import { adminCopy } from "@/lib/admin/copy";
import { LeadRecordsPage } from "@/components/admin/LeadRecordsPage";

export default function AdminRegistrationsPage() {
  return (
    <LeadRecordsPage
      title={adminCopy.nav.registrations}
      subtitle="Demandes d'inscription au centre de formation"
      source="registrations"
      columns={[
        { key: "reference", label: adminCopy.table.reference },
        { key: "status", label: adminCopy.table.status },
        { key: "fullName", label: adminCopy.table.name },
        { key: "email", label: adminCopy.table.email },
        { key: "courseName", label: adminCopy.table.course },
        { key: "createdAt", label: adminCopy.table.createdAt },
      ]}
      drawerFields={[
        { key: "fullName", label: adminCopy.table.name },
        { key: "email", label: adminCopy.table.email },
        { key: "phone", label: adminCopy.table.phone },
        { key: "courseName", label: adminCopy.table.course },
        { key: "experience", label: "Expérience" },
        { key: "message", label: "Message" },
        { key: "locale", label: "Langue" },
      ]}
    />
  );
}

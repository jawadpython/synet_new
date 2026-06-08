"use client";

import { adminCopy } from "@/lib/admin/copy";
import { RecordsPage } from "@/components/admin/RecordsPage";

const columns = [
  { key: "reference", label: adminCopy.table.reference },
  { key: "status", label: adminCopy.table.status },
  { key: "fullName", label: adminCopy.table.name },
  { key: "email", label: adminCopy.table.email },
  { key: "phone", label: adminCopy.table.phone },
  { key: "courseName", label: adminCopy.table.course },
  { key: "createdAt", label: adminCopy.table.createdAt },
] as const;

export default function AdminRegistrationsPage() {
  return (
    <RecordsPage
      title={adminCopy.nav.registrations}
      subtitle="Demandes d'inscription au centre de formation"
      source="registrations"
      columns={[...columns]}
    />
  );
}

"use client";

import { adminCopy } from "@/lib/admin/copy";
import { RecordsPage } from "@/components/admin/RecordsPage";

const columns = [
  { key: "reference", label: adminCopy.table.reference },
  { key: "status", label: adminCopy.table.status },
  { key: "companyName", label: adminCopy.table.company },
  { key: "contactName", label: adminCopy.table.name },
  { key: "email", label: adminCopy.table.email },
  { key: "serviceName", label: adminCopy.table.service },
  { key: "createdAt", label: adminCopy.table.createdAt },
] as const;

export default function AdminQuotesPage() {
  return (
    <RecordsPage
      title={adminCopy.nav.quotes}
      subtitle="Demandes de devis solutions entreprise"
      source="quotes"
      columns={[...columns]}
    />
  );
}

"use client";

import { adminCopy } from "@/lib/admin/copy";
import { LeadRecordsPage } from "@/components/admin/LeadRecordsPage";

export default function AdminQuotesPage() {
  return (
    <LeadRecordsPage
      title={adminCopy.nav.quotes}
      subtitle="Demandes de devis solutions entreprise"
      source="quotes"
      columns={[
        { key: "reference", label: adminCopy.table.reference },
        { key: "status", label: adminCopy.table.status },
        { key: "companyName", label: adminCopy.table.company },
        { key: "contactName", label: adminCopy.table.name },
        { key: "serviceName", label: adminCopy.table.service },
        { key: "createdAt", label: adminCopy.table.createdAt },
      ]}
      drawerFields={[
        { key: "companyName", label: adminCopy.table.company },
        { key: "contactName", label: adminCopy.table.name },
        { key: "email", label: adminCopy.table.email },
        { key: "phone", label: adminCopy.table.phone },
        { key: "serviceName", label: adminCopy.table.service },
        { key: "sector", label: "Secteur" },
        { key: "timeline", label: "Délai" },
        { key: "description", label: "Description" },
      ]}
    />
  );
}

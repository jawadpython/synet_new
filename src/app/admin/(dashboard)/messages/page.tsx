"use client";

import { adminCopy } from "@/lib/admin/copy";
import { LeadRecordsPage } from "@/components/admin/LeadRecordsPage";

export default function AdminMessagesPage() {
  return (
    <LeadRecordsPage
      title={adminCopy.nav.messages}
      subtitle="Messages reçus via le formulaire de contact"
      source="messages"
      columns={[
        { key: "reference", label: adminCopy.table.reference },
        { key: "status", label: adminCopy.table.status },
        { key: "fullName", label: adminCopy.table.name },
        { key: "email", label: adminCopy.table.email },
        { key: "subject", label: adminCopy.table.subject },
        { key: "createdAt", label: adminCopy.table.createdAt },
      ]}
      drawerFields={[
        { key: "fullName", label: adminCopy.table.name },
        { key: "email", label: adminCopy.table.email },
        { key: "phone", label: adminCopy.table.phone },
        { key: "organization", label: "Organisation" },
        { key: "subject", label: adminCopy.table.subject },
        { key: "intent", label: "Intent" },
        { key: "message", label: "Message" },
      ]}
    />
  );
}

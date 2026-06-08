"use client";

import { adminCopy } from "@/lib/admin/copy";
import { RecordsPage } from "@/components/admin/RecordsPage";

const columns = [
  { key: "reference", label: adminCopy.table.reference },
  { key: "status", label: adminCopy.table.status },
  { key: "fullName", label: adminCopy.table.name },
  { key: "email", label: adminCopy.table.email },
  { key: "subject", label: adminCopy.table.subject },
  { key: "intent", label: "Intent" },
  { key: "createdAt", label: adminCopy.table.createdAt },
] as const;

export default function AdminMessagesPage() {
  return (
    <RecordsPage
      title={adminCopy.nav.messages}
      subtitle="Messages reçus via le formulaire de contact"
      source="messages"
      columns={[...columns]}
    />
  );
}

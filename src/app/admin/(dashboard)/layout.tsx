import { AuthGuard } from "@/components/admin/AuthGuard";
import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <AdminShell>{children}</AdminShell>
    </AuthGuard>
  );
}

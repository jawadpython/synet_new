import type { Metadata } from "next";
import { AdminAuthProvider } from "@/components/admin/AdminAuthProvider";

export const metadata: Metadata = {
  title: "SYNET Admin",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <AdminAuthProvider>{children}</AdminAuthProvider>;
}

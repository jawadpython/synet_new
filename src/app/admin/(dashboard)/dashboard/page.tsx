"use client";

import { useEffect, useState } from "react";
import { GraduationCap, MessageSquare, Quote, Users } from "lucide-react";
import { fetchAdminStats } from "@/lib/admin/api-client";
import { adminCopy } from "@/lib/admin/copy";
import type { AdminStats } from "@/lib/admin/types";
import { StatCard } from "@/components/admin/StatCard";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdminStats()
      .then(setStats)
      .catch(() => setStats({ registrationsNew: 0, quotesNew: 0, messagesNew: 0, leadsNew: 0 }))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-navy-800">{adminCopy.dashboard.title}</h2>
        <p className="mt-1 text-sm text-neutral-500">{adminCopy.dashboard.subtitle}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label={adminCopy.dashboard.registrations}
          value={loading ? 0 : (stats?.registrationsNew ?? 0)}
          suffix={adminCopy.dashboard.new}
          href="/admin/registrations"
          icon={GraduationCap}
        />
        <StatCard
          label={adminCopy.dashboard.quotes}
          value={loading ? 0 : (stats?.quotesNew ?? 0)}
          suffix={adminCopy.dashboard.new}
          href="/admin/quotes"
          icon={Quote}
        />
        <StatCard
          label={adminCopy.dashboard.messages}
          value={loading ? 0 : (stats?.messagesNew ?? 0)}
          suffix={adminCopy.dashboard.new}
          href="/admin/messages"
          icon={MessageSquare}
        />
        <StatCard
          label={adminCopy.dashboard.leads}
          value={loading ? 0 : (stats?.leadsNew ?? 0)}
          suffix={adminCopy.dashboard.new}
          icon={Users}
        />
      </div>
    </div>
  );
}

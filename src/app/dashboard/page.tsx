// app/dashboard/page.tsx
"use client";

import { Charts } from "@/components/Charts";
import { StatsCard } from "@/components/StatsCard";
import { FaUsers, FaDollarSign, FaChartLine } from "react-icons/fa";
import { RecentActivity } from "@/components/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white dark:bg-black">
      <div className="grid w-300 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Users" value={1200} icon={<FaUsers />} />
        <StatsCard title="Revenue" value={45000} icon={<FaDollarSign />} />
        <StatsCard title="Sales Growth" value={25} icon={<FaChartLine />} />
      </div>

      <div className="grid w-300 grid-cols-1 lg:grid-cols-2 gap-6">
        <Charts />
        <RecentActivity />
      </div>
    </div>
  );
}

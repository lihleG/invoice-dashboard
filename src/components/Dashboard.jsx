// src/components/DashboardCard.jsx
import React from "react";
import StatsCard from "./StatsCard";
import InvoiceTable from "./InvoiceTable";
import RecentTransactions from "./RecentTransactions";
import RevenueChart from "./RevenueChart";


export default function DashboardCard({ title, value }) {
return (
    <div className="p-6 flex-1 overflow-y-auto">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Revenue" value="R35,000" />
        <StatsCard title="Invoices" value="120" />
        <StatsCard title="Clients" value="45" />
      </div>

      {/* Invoice Table */}
      <InvoiceTable />

      {/* Recent Transactions */}
      <RecentTransactions />

      {/*RevenueChart */}
      <RevenueChart/>
    </div>
  );
}
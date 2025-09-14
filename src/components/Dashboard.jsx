// src/components/DashboardCard.jsx
import React, { useState } from "react";
import StatsCard from "./StatsCard";
import InvoiceTable from "./InvoiceTable";
import RecentTransactions from "./RecentTransactions";
import RevenueChart from "./RevenueChart";
import InvoiceForm from "./invoices/InvoiceForm";

export default function DashboardCard() {
  const [invoices, setInvoices] = useState([]);

  // Function to handle adding new invoice
  const handleAddInvoice = (newInvoice) => {
    setInvoices([...invoices, newInvoice]);
  };

  return (
    <div className="p-6 flex-1 overflow-y-auto space-y-6">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Revenue" value="R35,000" />
        <StatsCard title="Invoices" value={invoices.length} />
        <StatsCard title="Clients" value="45" />
      </div>

      {/* Invoice Form */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Create New Invoice</h2>
        <InvoiceForm onAddInvoice={handleAddInvoice} />
      </div>

      {/* Invoice Table */}
      <InvoiceTable invoices={invoices} />

      {/* Recent Transactions */}
      <RecentTransactions />

      {/* Revenue Chart */}
      <RevenueChart />
    </div>
  );
}

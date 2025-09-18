// src/components/DashboardCard.jsx
import React, {useState} from "react";
import StatsCard from "./StatsCard";
import InvoiceTable from "./invoices/InvoiceTable";
import RecentTransactions from "./RecentTransactions";
import RevenueChart from "./RevenueChart";
import InvoiceForm from "./invoices/InvoiceForm";

export default function DashboardCard() {
  const [invoices, setInvoices] = useState([]);

//Add new invoice to state
const handleSaveInvoice = (newInvoice) => {
  setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
};

  return (
    <div className="p-6 flex-1 overflow-y-auto space-y-6">
      {/* stats Setion */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Revenue" value={`R${invoices.reduce((sum, inv) => sum + inv.total, 0).toFixed(2)}`} />
        <StatsCard title="Invoices" value={invoices.length} />
        <StatsCard title="Clients" value={new Set(invoices.map(inv => inv.clientName)).size} />
    </div>

    {/* Invoice Form */}
    <div className="bg-white p-6 rounded-lg shadow">
      <InvoiceForm onSave={handleSaveInvoice} />
    </div>

    {/* Invoice table */}
    <InvoiceTable invoices={invoices} />

    {/*Recent Transactions */}
    <RecentTransactions />

    {/*Revenu Chart */}
    <RevenueChart />
    </div>
  );
}
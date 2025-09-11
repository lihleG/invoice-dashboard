// src/components/InvoiceTable.jsx
import React from "react";

const invoices = [
  { id: 1, client: "John Doe", amount: "R1500", status: "Paid", date: "2025-09-01" },
  { id: 2, client: "Jane Smith", amount: "R3000", status: "Pending", date: "2025-09-03" },
  { id: 3, client: "Mike Johnson", amount: "R2500", status: "Overdue", date: "2025-09-04" },
];

export default function InvoiceTable() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Invoices</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4">Invoice ID</th>
            <th className="py-2 px-4">Client</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{invoice.id}</td>
              <td className="py-2 px-4">{invoice.client}</td>
              <td className="py-2 px-4">{invoice.amount}</td>
              <td
                className={`py-2 px-4 font-medium ${
                  invoice.status === "Paid"
                    ? "text-green-500"
                    : invoice.status === "Pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {invoice.status}
              </td>
              <td className="py-2 px-4">{invoice.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

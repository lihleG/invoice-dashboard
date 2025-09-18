// src/components/InvoiceTable.jsx
import React from "react";

export default function InvoiceTable({ invoices }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Invoices</h2>

      {invoices.length === 0 ? (
        <p className="text-gray-500">No invoices yet. Create one using the form above.</p>
      ) : (
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
                <td className="py-2 px-4">{invoice.clientName}</td>
                <td className="py-2 px-4">R{invoice.total.toFixed(2)}</td>
                <td
                  className={`py-2 px-4 font-medium ${
                    invoice.status === "Paid"
                      ? "text-green-500"
                      : invoice.status === "Pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {invoice.status || "Pending"}
                </td>
                <td className="py-2 px-4">{invoice.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}



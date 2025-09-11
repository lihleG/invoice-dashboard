// src/components/RecentTransactions.jsx
import React from "react";

const transactions = [
  { id: 1, description: "Website Design", amount: "-R800", date: "2025-09-05" },
  { id: 2, description: "Payment Received", amount: "+R1200", date: "2025-09-06" },
  { id: 3, description: "Hosting Fee", amount: "-R200", date: "2025-09-07" },
];

export default function RecentTransactions() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between py-2 border-b last:border-none"
          >
            <span>{transaction.description}</span>
            <span
              className={`font-medium ${
                transaction.amount.startsWith("+")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {transaction.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

 
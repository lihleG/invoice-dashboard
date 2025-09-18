// src/components/RecentOrders.jsx
import React from "react";

const orders = [
  { name: "iPhone 14 Pro Max", price: "$2400 x 3", status: "Pending" },
  { name: "Airdot", price: "$49 x 1", status: "Completed" },
  { name: "Headphone", price: "$153 x 2", status: "Completed" },
];

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold mb-3">Recent Orders</h3>
      <ul className="space-y-3">
        {orders.map((order, index) => (
          <li key={index} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{order.name}</p>
              <p className="text-sm text-gray-500">{order.price}</p>
            </div>
            <span
              className={`px-3 py-1 text-xs rounded-full ${
                order.status === "Completed"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {order.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// src/components/DashboardCard.jsx
import React from "react";

export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start justify-between border-l-8 border-gradientOrangeStart">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-2xl text-gray-500 font-bold">{value}</p>
    </div>
  );
}

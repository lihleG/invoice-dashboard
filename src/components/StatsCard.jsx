// src/components/StatsCard.jsx
import React from "react";

export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      {/* Value */}
      <p className="text-2xl font-bold text-orange-500 mt-2">{value}</p>
    </div>
  );
}

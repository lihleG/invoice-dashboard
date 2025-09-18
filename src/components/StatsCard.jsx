import React from "react";

export default function StatsCard({ title, value, subText, icon, color }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h2 className="text-xl font-bold">{value}</h2>
          {subText && (
            <p className={`text-sm font-medium ${color}`}>{subText}</p>
          )}
        </div>
        <div className="text-purple-600 text-2xl">{icon}</div>
      </div>
      </div>
  );
}

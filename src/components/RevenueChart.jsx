import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Marketing", value: 400 },
  { name: "CRM", value: 300 },
  { name: "Taxes", value: 200 },
  { name: "Debt", value: 278 },
  { name: "Insurance", value: 189 },
  { name: "Others", value: 239 },
];

const COLORS = ["#4CAF50", "#FF9800", "#FFC107", "#F44336", "#2196F3", "#9C27B0"];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold mb-6 text-gray-700 text-center">Budget Breakdown</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Chart */}
        <ResponsiveContainer width={300} height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* Custom Legend */}
        <div className="flex flex-col gap-3">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span className="text-gray-600 text-sm">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

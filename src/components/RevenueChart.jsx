import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
     { name: "Housing", value: 400 },
  { name: "Transportation", value: 300 },
  { name: "Taxes", value: 200 },
  { name: "Debt", value: 278 },
  { name: "Insurance", value: 189 },
  { name: "Others", value: 239 },
];

const COLORS = ["#4CAF50", "#FF9800", "#FFC107", "#F44336", "#2196F3", "#9C27B0"];

export default function RevenueChart() {
    return(
        <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold mb-4">Budget Breakdown</h2>
            <PieChart
               data={data}
               cx="50%"
               cy="50%"
               labelLine={false}
               outerRadius={120}
               fill="#8884d8"
               datakey="value"
               label
               >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />

            ))}
            </Pie>
            <Tooltip />
            <Legend />
            </PieChart>
           </div>
    );
}

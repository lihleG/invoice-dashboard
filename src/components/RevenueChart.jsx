import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, } from "recharts";

const data = [
  { name: "Jan", revenue: 20000 },
  { name: "Feb", revenue: 25000 },
  { name: "Mar", revenue: 28000 },
  { name: "Apr", revenue: 30000 },
  { name: "May", revenue: 35000 },
  { name: "Jun", revenue: 40000 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold mb-3">Revenue Statements</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#6b46c1" />
          </BarChart>
      </ResponsiveContainer>
      </div>
  );
}
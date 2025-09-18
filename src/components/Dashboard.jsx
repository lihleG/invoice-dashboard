import React from "react";
import { FaBox, FaDollarSign, FaChartLine } from "react-icons/fa";
import StatsCard from "../components/StatsCard";
import RevenuChart from "../components/RevenueChart";
import RecentOrders from "./RecenterOrders";

export default function Dashboard() {
  return (
    <div className="p-6 space=y-6">
      <h1 className="text-2xl font-bold">My Dashboard</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
        title="Total Products"
        value="8,98,979"
        subText="+1500 New Added"
        color="text-green-500"
        icon={<FaBox />}
        />
        <StatsCard
          title="Total Sales"
          value="$32,000.89"
          subText="7.8% Growth"
          color="text-green-500"
          icon={<FaDollarSign />}
        />
        <StatsCard
          title="Total Profit"
          value="$5,000.15"
          subText="5.4% Increase"
          color="text-green-500"
          icon={<FaChartLine />}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <RecentOrders />
      </div>
    </div>
  );
}


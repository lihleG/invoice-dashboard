import React from "react";
import AnalyticsOverview from "../pages/AnalyticsOverview";

export default function Analytics() {
    return (
        <div className="p-6">
            {/* Header Section */}
        <div className="flex justify-between-items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orabge-600">
            Download Report
            </button>
            </div>

            {/* Analytics Overview (cards + charts ) */ }
            <AnalyticsOverview />

            {/* Extra Section for Future Expansion */ }
            <div className="mt-8 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Insights</h2>
            <p className="text-gray-600">
                here you can add more details, such as predictions, upcoming invoices,
                insights to help users make better decisions.</p>
            </div>
           </div>
    );
}
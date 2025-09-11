import React from "react";

export default function Sidebar() {
    return(
        <div className="w-64 bg-white h-screen shadow-md p-4">
            <ul className="space-y-4">
            <li className="text-gray-700 hover:text-orange-500 
            cursor-pointer">Dashboard</li>
            <li className="text-gray-700 hover:text-orange-500 
            cursor-pointer">Invoices</li>
            <li className="text-gray-700 hover:text-orange-500 
            cursor-pointer">Transactions</li>
            <li className="text-gray-700 hover:text-orange-500 
            cursor-pointer">Clients</li>
         </ul>
        </div>
    )
}
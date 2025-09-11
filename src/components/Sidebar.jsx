import React from "react";
import {FiHome, FiFileText, FiRepeat, FiUsers } from "react-icons/fi";

export default function Sidebar() {
    const menuItems = [
    { name: "Dashboard", icon: <FiHome size={20} /> },
    { name: "Invoices", icon: <FiFileText size={20} /> },
    { name: "Transactions", icon: <FiRepeat size={20} /> },
    { name: "Clients", icon: <FiUsers size={20} /> },
    ];

    return(
        <div className="w-64 bg-white h-screen shadow-md p-4">
            <ul className="space-y-4">
                {menuItems.map((item) => (
                    <li
            key={item.name}
            className="flex items-center gap-3 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors duration-200"
          >
            {item.icon}
            <span className="text-base">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
                    
           
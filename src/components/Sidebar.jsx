// src/components/Sidebar.jsx
import React from "react";
import { FaTachometerAlt, FaChartBar, FaShoppingCart, FaUsers, FaComments, FaBell, FaRocket, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
  { name: "Analytics", icon: <FaChartBar />, path: "/analytics" },
  { name: "Orders", icon: <FaShoppingCart />, path: "/orders" },
  { name: "Customers", icon: <FaUsers />, path: "/customers" },
  { name: "Messages", icon: <FaComments />, path: "/messages" },
  { name: "Notification", icon: <FaBell />, path: "/notifications" },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen shadow-md flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-purple-700 p-6">SaasCa.</h1>
        <ul className="space-y-2 px-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 
                   ${
                     isActive
                       ? "bg-purple-100 text-purple-700 font-semibold"
                       : "text-gray-700 hover:bg-purple-50"
                   }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-t">
        <button className="flex items-center justify-center w-full gap-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
          <FaRocket />
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
}


     
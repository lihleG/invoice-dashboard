import React from "react";
import { FaSearch, FaCog } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-3">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/3">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search Anything"
          className="bg-transparent px-2 w-full outline-none"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <FaCog className="text-gray-500 hover:text-purple-600 cursor-pointer" />
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">S. Datta</p>
            <p className="text-sm text-gray-500">
              uixsantusdatta@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

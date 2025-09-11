import React from "react";

export default function Navbar() {
    return(
        <nav className="bg-gradient-to-r from gradientOrangeStart
        to-gradientOrangeEnd p-4 text-gray flex justify-between items-center
        shadow-md">
            <h1 className="text-2xl font-bold">Invoice Dashboard</h1>
            <div>User</div>
        </nav>
    )
}
import React, { useState } from "react";
import InvoiceForm from "../components/invoices/InvoiceForm";
import InvoiceTable from "../components/invoices/InvoiceTable";


export default function Invoices() {
    const [invoices, setInvoices] = useState([]);

    const handleSaveInvoice = (newInvoice) => {
        const invoiceWithDate = {
            ...newInvoice,
            date: new Date().toIS0String().split("T")[0],
            status: "Pending",
        };
        setInvoices([...invoices, invoiceWithDate]);
    };

    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Invoices</h1>
        <InvoiceForm onSave={handleSaveInvoice} />
        <InvoiceTable invoices={invoices} />
        </div>
    );

}
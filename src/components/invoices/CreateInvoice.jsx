// src/components/invoices/CreateInvoice.jsx
import React, { useState } from "react";

export default function CreateInvoice() {
  const [invoice, setInvoice] = useState({
    clientName: "",
    clientEmail: "",
    address: "",
    invoiceNumber: `INV-${Math.floor(Math.random() * 10000)}`,
    invoiceDate: "",
    dueDate: "",
    items: [{ description: "", quantity: 1, price: 0 }],
    notes: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  // Handle item changes
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoice.items];
    updatedItems[index][field] = value;
    setInvoice({ ...invoice, items: updatedItems });
  };

  // Add new item row
  const addItem = () => {
    setInvoice({
      ...invoice,
      items: [...invoice.items, { description: "", quantity: 1, price: 0 }],
    });
  };

  // Calculate total
  const calculateTotal = () =>
    invoice.items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Invoice Data:", invoice);
    alert("Invoice Created Successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Invoice</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Client Info */}
        <div>
          <label className="block text-gray-600">Client Name</label>
          <input
            type="text"
            name="clientName"
            value={invoice.clientName}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="Enter client name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Client Email</label>
          <input
            type="email"
            name="clientEmail"
            value={invoice.clientEmail}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="Enter client email"
            required
          />
        </div>

        {/* Invoice Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">Invoice Date</label>
            <input
              type="date"
              name="invoiceDate"
              value={invoice.invoiceDate}
              onChange={handleChange}
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block text-gray-600">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={invoice.dueDate}
              onChange={handleChange}
              className="border rounded w-full p-2"
            />
          </div>
        </div>

        {/* Invoice Items */}
        <h3 className="text-lg font-bold mt-4">Invoice Items</h3>
        {invoice.items.map((item, index) => (
          <div key={index} className="grid grid-cols-4 gap-2 mb-2">
            <input
              type="text"
              placeholder="Description"
              value={item.description}
              onChange={(e) =>
                handleItemChange(index, "description", e.target.value)
              }
              className="border p-2 col-span-2 rounded"
            />
            <input
              type="number"
              placeholder="Qty"
              value={item.quantity}
              min="1"
              onChange={(e) =>
                handleItemChange(index, "quantity", Number(e.target.value))
              }
              className="border p-2 rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) =>
                handleItemChange(index, "price", Number(e.target.value))
              }
              className="border p-2 rounded"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          + Add Item
        </button>

        {/* Total */}
        <div className="text-right text-lg font-bold">
          Total: R{calculateTotal()}
        </div>

        {/* Notes */}
        <div>
          <label className="block text-gray-600">Notes</label>
          <textarea
            name="notes"
            value={invoice.notes}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="Additional notes or terms"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Create Invoice
        </button>
      </form>
    </div>
  );
}



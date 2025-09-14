// src/components/InvoiceForm.jsx
import React, { useState } from "react";

export default function InvoiceForm({ onSave }) {
  const [clientName, setClientName] = useState("");
  const [items, setItems] = useState([{ description: "", quantity: 1, price: 0 }]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, price: 0 }]);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      id: Date.now(),
      clientName,
      items,
      total: calculateTotal(),
    };
    onSave(newInvoice);
    setClientName("");
    setItems([{ description: "", quantity: 1, price: 0 }]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">Create New Invoice</h2>

      {/* Client Name */}
      <input
        type="text"
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />

      {/* Items */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Invoice Items</h3>
        {items.map((item, index) => (
          <div key={index} className="flex space-x-2 mb-2">
            <input
              type="text"
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleItemChange(index, "description", e.target.value)}
              className="border p-2 flex-1 rounded"
              required
            />
            <input
              type="number"
              placeholder="Quantity"
              value={item.quantity}
              min="1"
              onChange={(e) => handleItemChange(index, "quantity", parseInt(e.target.value))}
              className="border p-2 w-20 rounded"
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              min="0"
              onChange={(e) => handleItemChange(index, "price", parseFloat(e.target.value))}
              className="border p-2 w-24 rounded"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          + Add Item
        </button>
      </div>

      {/* Total */}
      <div className="text-right font-bold text-xl">
        Total: R{calculateTotal().toFixed(2)}
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
      >
        Save Invoice
      </button>
    </form>
  );
}

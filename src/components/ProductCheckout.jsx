// src/components/ProductCheckout.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCheckbox } from '../features/CartSlice';

const ProductCheckout = ({ item, handleAddOneQuantity, handleDeleteOneQuantity, handleDeleteOneItem, handleUpdateQuantity }) => {
  const [quantityInput, setQuantityInput] = useState(item.quantity);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    // Dispatch the toggleCheckbox action to update the checkbox state
    dispatch(toggleCheckbox({ id: item.id }));
  };

  const handleQuantityInputChange = (e) => {
    const inputText = e.target.value.trim();
    const newQuantity = parseInt(inputText, 10);

    if (inputText === "" || isNaN(newQuantity) || newQuantity < 1) {
      setQuantityInput("");
      handleUpdateQuantity(item, 1);

      if (newQuantity < 1) {
        handleDeleteOneItem(item);
      }
    } else {
      setQuantityInput(newQuantity);
      handleUpdateQuantity(item, newQuantity);
    }
  }

  return (
    <div className="card mb-4 p-3 flex items-center bg-slate-200 rounded" key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={handleCheckboxChange}
      />
      {/* Render the quantity and price based on the checked property */}
      <img
        className="object-cover w-[30%] h-32"
        src={item.img}
        alt={item.namaBarang}
      />
      <div className="bodycard ms-3">
        <h3 className="font-bold">{item.namaBarang}</h3>
        <p>Harga: Rp {item.hargaBarang.toLocaleString()}</p>
      </div>
      <div className="totalbarang ms-auto">
        {item.checked ? (
          <>
            <p>Total Barang: {item.quantity}</p>
            <p>
              Total Harga: Rp{" "}
              {(item.hargaBarang * item.quantity).toLocaleString()}
            </p>
          </>
        ) : (
          <>
            <p>Total Barang: 0</p>
            <p>
              Total Harga: Rp 0
            </p>
          </>
        )}
        <div className="flex">
          <button
            className="bg-blue-300 me-2 p-1 rounded"
            onClick={handleAddOneQuantity}
          >
            + 1
          </button>
          <input
            type="number"
            className="w-10 me-2"
            value={quantityInput}
            onChange={handleQuantityInputChange}
          />
          <button
            className="bg-blue-300 p-1 me-2 rounded"
            onClick={handleDeleteOneQuantity}
          >
            - 1
          </button>
          <button
            className="bg-blue-300 p-1 rounded"
            onClick={handleDeleteOneItem}
          >
            hapus
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCheckout
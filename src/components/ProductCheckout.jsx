// src/components/ProductCheckout.jsx
import React, { useState } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
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
        className='me-2'
        type="checkbox"
        checked={item.checked}
        onChange={handleCheckboxChange}
      />
      {/* Render the quantity and price based on the checked property */}
      <img
        className="object-cover w-20 h-20"
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
            className="bg-blue-300 me-2 px-2 rounded"
            onClick={handleAddOneQuantity}
          >
            +
          </button>
          <input
            type="number"
            className="w-10 me-2"
            value={quantityInput}
            onChange={handleQuantityInputChange}
          />
          <button
            className="bg-blue-300 me-2 px-2 rounded"
            onClick={handleDeleteOneQuantity}
          >
            -
          </button>
          <button
            className="bg-blue-300 px-2 rounded"
            onClick={handleDeleteOneItem}
          >
            <BsFillTrash3Fill />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCheckout
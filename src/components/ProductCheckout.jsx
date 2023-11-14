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

  const ConditionalDetails = () => {
    const totalBarang = item.checked ? item.quantity : "0";
    const totalHarga = item.checked ? (item.hargaBarang * item.quantity).toLocaleString() : "Rp 0";

    return (
      <>
        <p>Total Barang: {totalBarang}</p>
        <p>Total Harga: {totalHarga}</p>
      </>
    );
  };

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
        className="object-cover w-24 h-24"
        src={item.img}
        alt={item.namaBarang}
      />
      <div className="bodycard ms-3">
        <p className="font-bold text-xl">{item.namaBarang}</p>
        <div className='text-xs'>
          <p>Harga: Rp {item.hargaBarang.toLocaleString()}</p>
          <ConditionalDetails />
        </div>
      </div>
      <div className="totalbarang ms-auto">
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
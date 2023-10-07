import React, { useState } from "react";
import items from "../data/Item";

const Card = () => {
  const [itemBarang] = useState(items);

  // tambah ke localStorage
  const tambahkanKeKeranjang = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item already exists in the cart, increment its quantity by 1
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      // If the item doesn't exist in the cart, add it with a quantity of 1
      item.quantity = 1;
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="container mx-auto py-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {itemBarang.map((item) => (
          <div
            key={item.id}
            className="card max-w-sm rounded overflow-hidden shadow-lg mx-auto"
          >
            <img
              className="w-[300px] h-64 object-cover"
              src={item.img}
              alt={item.barang}
            />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl">{item.barang}</div>
              <p className="text-gray-700 text-base my-2">
                Harga: Rp {item.harga.toLocaleString()}
              </p>
              <button
                className="py-1 px-2 font-bold rounded bg-slate-500 text-white transition 
              duration-300 hover:bg-slate-200 hover:text-black"
                onClick={() => tambahkanKeKeranjang(item)}
              >
                tambahkan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
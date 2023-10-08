// import items from "../data/Item";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../features/CartSlice";

const Card = () => {
  const {products} = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };


  return (
    <div className="container mx-auto py-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {products.map((item) => (
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
              onClick={() => handleAddToCart(item)}
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
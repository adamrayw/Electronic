import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addOneItem, deleteOneItem } from "../features/CartSlice";

const Checkout = ({ isCheckedOut }) => {
  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleAddOneItem = (item) => {
    dispatch(addOneItem(item));
  };

  const handleDeleteOneItem = (item) => {
    dispatch(deleteOneItem(item));
  };

  const checkoutClassName = isCheckedOut ? "right-0 inline-block" : "hidden";

  console.log(cartItems);

  return (
    <div
      className={`sectionCheckout overflow-scroll absolute top-full ${checkoutClassName} h-[500px] lg:w-1/2 md:w-full sm:w-full bg-slate-300 transition-right duration-500 ease-in-out`}
    >
      <div className="container p-5 h-full">
        {cartItems.length === 0 ? (
          <div className="h-[50%] flex justify-center items-end">
            <p className="text-center font-bold text-xl">Cart masih kosong</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                className="card mb-4 p-3 flex items-center bg-slate-200 rounded"
                key={item.id}
              >
                <img
                  className="object-cover w-[30%] h-[30%]"
                  src={item.img}
                  alt={item.barang}
                />
                <div className="bodycard ms-3">
                  <h3 className="font-bold">{item.barang}</h3>
                  <p>Harga: Rp {item.harga.toLocaleString()}</p>
                </div>
                <div className="totalbarang ms-auto">
                  <p>Total Barang: {item.quantity}</p>
                  <p>
                    Total Harga: Rp{" "}
                    {(item.harga * (item.quantity)).toLocaleString()}
                  </p>
                  <div className="flex">
                    <button
                      className="bg-blue-300 p-1 rounded"
                      onClick={() => handleAddOneItem(item)}
                    >
                      tambah 1
                    </button>
                    <button
                      className="bg-blue-300 p-1 mx-2 rounded"
                      
                      onClick={() => handleDeleteOneItem(item)}
                    >
                      kurangi 1
                    </button>
                    <button
                      className="bg-blue-300 p-1 rounded"
                    >
                      hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="totalharga pb-5 flex flex-col items-end">
              <div className="text-center">
                <h3 className="font-bold">Total Harga</h3>
                <p className="my-2">Rp ???</p>
                <button className="px-3 py-2 bg-blue-300 rounded">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
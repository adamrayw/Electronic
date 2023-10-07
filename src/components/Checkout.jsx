import React, { useState, useEffect } from "react";

const Checkout = ({ isCheckedOut }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Memuat item dari local storage saat komponen dipasang
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);

    // Menghitung total harga dan total kuantitas
    const total = savedCart.reduce(
      (acc, item) => acc + item.harga * (item.quantity || 1),
      0
    );
    const quantity = savedCart.reduce(
      (acc, item) => acc + (item.quantity || 1),
      0
    );

    setTotalPrice(total);
    setTotalQuantity(quantity);
    console.log(cartItems);
  }, []);

  const checkoutClassName = isCheckedOut ? "right-0 inline-block" : "hidden";

  const tambahSatu = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: (item.quantity || 0) + 1,
        };
      }
      return item;
    });

    setCartItems(updatedCart);
    updateTotal(updatedCart);
  };

  const kurangiSatu = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        const newQuantity = (item.quantity || 1) - 1;
        if (newQuantity <= 0) {
          return null; // Menghapus item jika kuantitasnya menjadi 0
        }
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });

    // Memfilter nilai null (item yang dihapus)
    const filteredCart = updatedCart.filter((item) => item !== null);

    setCartItems(filteredCart);
    updateTotal(filteredCart);
  };

  const hapusItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    updateTotal(updatedCart);
  };

  const updateTotal = (updatedCart) => {
    const total = updatedCart.reduce(
      (acc, item) => acc + item.harga * (item.quantity || 1),
      0
    );
    const quantity = updatedCart.reduce(
      (acc, item) => acc + (item.quantity || 1),
      0
    );

    setTotalPrice(total);
    setTotalQuantity(quantity);

    // Memperbarui local storage dengan keranjang yang diperbarui
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

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
                  <p>Total Barang: {item.quantity || 1}</p>
                  <p>
                    Total Harga: Rp{" "}
                    {(item.harga * (item.quantity || 1)).toLocaleString()}
                  </p>
                  <div className="flex">
                    <button
                      className="bg-blue-500 p-1 rounded"
                      onClick={() => tambahSatu(item.id)}
                    >
                      tambah 1
                    </button>
                    <button
                      className="bg-blue-500 p-1 mx-2 rounded"
                      onClick={() => kurangiSatu(item.id)}
                    >
                      kurangi 1
                    </button>
                    <button
                      className="bg-blue-500 p-1 rounded"
                      onClick={() => hapusItem(item.id)}
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
                <p className="my-2">Rp {totalPrice.toLocaleString()}</p>
                <button className="px-3 py-2 bg-blue-500 rounded">
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
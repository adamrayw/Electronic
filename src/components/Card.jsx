import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../features/CartSlice";
import { allProducts } from "../data/Item";

const Card = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const products = await allProducts(); // Use await to fetch data
      setData(products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {

    fetchData(); 
  }, []); 

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className="container mx-auto py-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="card max-w-sm rounded overflow-hidden shadow-lg mx-auto"
          >
            <img
              className="w-[300px] h-64 object-cover"
              src={item.img}
              alt={item.namaBarang}
            />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl">{item.namaBarang}</div>
              <p className="text-gray-700 text-base my-2">
                Harga: Rp {item.hargaBarang.toLocaleString()}
              </p>
              <button
                className="py-1 px-2 font-bold rounded bg-slate-500 text-white transition 
              duration-300 hover-bg-slate-200 hover-text-black"
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

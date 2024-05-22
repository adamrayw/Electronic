// src/components/Card.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../features/CartSlice";
import { allProducts } from "../services/apiServices";
import ProductCard from "./ProductCard";
import { selectSearchInput } from "../features/searchSlice";

const Card = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector(selectSearchInput);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const allProductsData = await allProducts();
      setProducts(allProductsData.data);
      console.log(allProductsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.namaBarang.toLowerCase().startsWith(searchInput.toLowerCase())
  );


  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className="container mx-auto py-[100px]">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} onAddToCart={() => handleAddToCart(item)} />
          ))}
        </div>
      ) : (
        <div className="flex mt-52 justify-center h-screen w-full">
          <p className="font-bold text-xl">Barang tidak ada</p>
        </div>
      )}
    </div>
  );
};

export default Card;

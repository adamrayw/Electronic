// src/components/Card.jsx
import React, { useEffect, useState } from "react";
import {useDispatch } from "react-redux";
import { addItemToCart } from "../features/CartSlice";
import { allProducts } from "../data/Item";
import ProductCard from "./ProductCard";

const Card = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    try {
      const products = await allProducts();
      setProduct(products);
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
        {product.map((item) => (
          <ProductCard key={item.id} item={item} onAddToCart={() => handleAddToCart(item)} />
        ))}
      </div>
    </div>
  );
};

export default Card;

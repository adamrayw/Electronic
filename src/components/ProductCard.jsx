import React, { useState, useEffect } from 'react';
import { allProducts } from '../data/Item';

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('');

  const fetchData = async () => {
    try {
      const allProductsData = await allProducts();
      setProducts(allProductsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      // Assuming products is an array and the first item has the image URL
      setBackgroundImage(`url(${products[0].img})`);
    }
  }, [products]);

  return (
    <div className='w-full m-auto relative h-screen top-20'>
      <div style={{ backgroundImage }} className='w-full h-full rounded-2xl bg-cover bg-center'></div>
    </div>
  )
}

export default Hero;

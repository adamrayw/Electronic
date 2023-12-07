import React, { useState, useEffect } from 'react';
import { allProducts } from '../data/Item';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Hero = () => {
    const [products, setProducts] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    const backgroundImageStyle = {
        backgroundImage: products.length > 0 ? `url(${products[currentImageIndex].img})` : ''
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    };

    return (
        <div className='w-full m-auto relative h-screen top-16'>
            <div style={backgroundImageStyle} className='w-full h-full rounded-2xl bg-cover bg-center'></div>
            <div className='absolute top-[50%] left-0' onClick={prevImage}>
                <FaArrowAltCircleLeft size={30} />
            </div>
            <div className='absolute top-[50%] right-0' onClick={nextImage}>
                <FaArrowAltCircleRight size={30} />
            </div>
        </div>
    )
}

export default Hero;

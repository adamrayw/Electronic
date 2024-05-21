import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { allProducts } from '../services/apiServices';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const SwiperHero = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const allProductsData = await allProducts();
            setProducts(allProductsData.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} >
                {products.map(product => (
                    <SwiperSlide key={product.id}>
                        <img className='w-full h-full object-cover' src={product.img} alt={`Slide`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default SwiperHero;

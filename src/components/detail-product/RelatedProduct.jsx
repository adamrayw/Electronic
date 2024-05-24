import { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { allProducts } from '../../services/apiServices';
import { Link } from 'react-router-dom';

const RelatedProduct = ({ category }) => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await allProducts();
            const filteredProducts = response.data.filter(product => product.kategori === category);
            setProducts(filteredProducts);
            console.log(filteredProducts);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [category]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='my-14'>
            <p className='text-lg font-bold'>Produk Sesuai Kategori</p>
            <div className='bg-slate-500 py-5 px-6 rounded-md'>
                <Slider {...settings}>
                    {products.map((product) => (
                        <Link to={`/detail/${product.id}`} key={product.id} className='border bg-white border-gray-600 rounded overflow-hidden'>
                            <div>
                                <img className='related-img' src={product.img} alt={product.namaBarang} />
                            </div>
                            <div className='p-1'>
                                <p className='font-bold'>{product.namaBarang}</p>
                                <p className='font-semibold'>{product.deskripsiBarang}</p>
                                <p className='text-slate-600'>Rp {product.hargaBarang - product.hargaBarang * product.diskon / 100}</p>
                                <p className='text-sm'><span className='text-red-500'>{product.diskon}%</span> <span className='line-through text-slate-400'>Rp {product.hargaBarang}</span></p>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default RelatedProduct;

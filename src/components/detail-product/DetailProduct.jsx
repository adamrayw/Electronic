import { useState, useRef, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import RelatedProduct from './RelatedProduct';
import CheckoutFooter from './CheckoutFooter';
import { getDetailProduct } from '../../services/apiServices';

const DetailProduct = () => {
    const { id } = useParams();
    const [detailProduct, SetDetailProduct] = useState(null);
    const [zoomStyle, setZoomStyle] = useState({ transform: 'scale(1)' });
    const imgRef = useRef(null);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getDetailProduct(id)
                console.log(response);
                SetDetailProduct(response.data.data)
            } catch (error) {
                console.error("error fetching detail product", error)
            }
        }

        fetchProduct();
    }, [id])



    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const handleMouseMove = (e) => {
        const img = imgRef.current;
        const x = e.clientX - img.offsetLeft;
        const y = e.clientY - img.offsetTop;

        if (window.innerWidth > 1023) {
            setZoomStyle({
                transformOrigin: `${x}px ${y}px`,
                transform: 'scale(2)',
            });
        }

    };

    const handleMouseLeave = () => {
        setZoomStyle({ transform: 'scale(1)' });
    };

    if (!detailProduct) {
        return <div>Loading...</div>; // or a placeholder UI
    }

    return (
        <>
            <div className="container mx-auto max-w-[73rem] mt-[6rem] pb-20 overflow-hidden">
                <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-4 mb-10'>
                    <div className="img-detail overflow-hidden lg:h-60 w-full"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        ref={imgRef}>
                        <img src={detailProduct.img}
                            className='object-cover lg:h-60 w-full cursor-zoom-in'
                            style={zoomStyle} />
                    </div>
                    <div className="detail-spec w-full col-span-2">
                        <h2 className='font-bold'>{detailProduct.namaBarang}</h2>
                        <p className='text-slate-500'>bababoey</p>
                        <p>Terjual 200+</p>
                        <p className='mt-3 border-t-2 text-slate-700 font-bold text-2xl mb-2'>Rp. 500.000</p>
                        <p><span className='line-through mr-2 font-semibold'>Rp. 1.000.000</span>
                            <span className='p-1 bg-sky-300 rounded-sm text-sky-700 font-semibold'>diskon 50%</span></p>
                        <p className='mt-3 border-t-2 mb-2'><span className='border-solid border-b-2 border-slate-700 text-slate-700 font-semibold'>Spesifikasi</span></p>
                        <p className='font-bold'>UMUM</p>
                        <p className='text-slate-500'>Size: </p>
                        <p className='text-slate-500'>Color:</p>
                        <p className='text-slate-500'>Berat: </p>
                        <p className='text-slate-500'>Features: </p>
                        <p className='text-slate-500'>Capacity: </p>
                        <p className='text-slate-500'>Power Consumption: </p>
                        <p className='text-slate-500'>Voltase: </p>
                        <p className='font-bold mt-2'>DIMENSI</p>
                        <p className='text-slate-500'>29.4cm X 84.8cm X 20.4cm</p>
                        <p className='font-bold mt-2'>BERAT</p>
                        <p className='text-slate-500'>10000 gr</p>
                    </div>
                    <div className="detail-cart justify-self-center w-full">
                        <div className='p-5 rounded border-solid border-2 border-slate-600'>
                            <button className='text-slate-700 flex justify-center items-center my-auto w-full mb-2 border-solid border-2 border-slate-600 p-1 rounded'>
                                <BsCart4 className='me-2' />
                                Keranjang
                            </button>
                            <button className='bg-slate-600 text-white w-full p-1 rounded mb-2'>Beli</button>
                            <div className='flex justify-around p-1'>
                                <button onClick={toggleFavorite} className='flex items-center'> {isFavorite ? <MdFavorite className='me-2' size={20} /> : <MdFavoriteBorder className='me-2' size={20} />} Wishlist</button>
                                <button className='flex items-center'><CiShare2 className='me-2' size={20} /> Share</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='font-bold mb-2'>Produk Terkait</div>
                <RelatedProduct />
                <div className='lg:hidden md:static mt-5'>
                    <CheckoutFooter toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
                </div>
            </div>
        </>
    )
}

export default DetailProduct
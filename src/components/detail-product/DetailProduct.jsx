import { useState, useRef, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import RelatedProduct from './RelatedProduct';
import CheckoutFooter from './CheckoutFooter';
import { addOneCartProduct, getDetailProduct } from '../../services/apiServices';

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

    const handleAddToCart = async () => {
        try {
            const userId = localStorage.getItem('userid');
            const productId = detailProduct.id;
            const response = await addOneCartProduct({ userId, productId });
            console.log(response);
        } catch (error) {
            console.error("error fetching addOneCartProduct api", error)
        }
    }

    if (!detailProduct) {
        return <div>Loading...</div>; // or a placeholder UI
    }

    return (
        <>
            <div className="container mx-auto px-5 mt-[6rem] pb-20 overflow-hidden">
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
                        <h2 className='font-bold text-2xl'>{detailProduct.namaBarang}</h2>
                        <p className='text-slate-500'>{detailProduct.kategori}</p>
                        <p>Terjual 200+</p>
                        <p className='mt-3 border-t-2 text-slate-700 font-bold text-2xl mb-2'>Rp{detailProduct.hargaBarang * detailProduct.diskon / 100}</p>
                        <p><span className='line-through mr-2 font-semibold'>Rp{detailProduct.hargaBarang}</span>
                            <span className='p-1 bg-sky-300 rounded-sm text-sky-700 font-semibold'>diskon {detailProduct.diskon}%</span></p>
                        <p className='mt-3 border-t-2 mb-2'><span className='border-solid border-b-2 border-slate-700 text-slate-700 font-semibold'>Spesifikasi</span></p>
                        <p className='font-bold'>UMUM</p>
                        <p className='text-slate-500'>Size: {detailProduct.size}</p>
                        <p className='text-slate-500'>Color: {detailProduct.color}</p>
                        <p className='text-slate-500'>Berat: {detailProduct.berat}</p>
                        <p className='text-slate-500'>Features: {detailProduct.features}</p>
                        <p className='text-slate-500'>Capacity: {detailProduct.capacity}</p>
                        <p className='text-slate-500'>Power Consumption: {detailProduct.powerConsumption}</p>
                        <p className='font-bold mt-2'>DIMENSI</p>
                        <p className='text-slate-500'>{detailProduct.dimensi}</p>
                        <p className='font-bold mt-2'>BERAT</p>
                        <p className='text-slate-500'>{detailProduct.berat}</p>
                    </div>
                    <div className="detail-cart justify-self-center w-full">
                        <div className='p-5 rounded border-solid border-2 border-slate-600'>
                            <button onClick={handleAddToCart}
                                className='text-slate-700 flex justify-center items-center my-auto w-full mb-2 border-solid border-2 border-slate-600 p-1 rounded'>
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
                <div className='my-10'>
                    <p className='font-bold'>Deskripsi Barang:</p>
                    <p>{detailProduct.deskripsiBarang}</p>
                </div>
                <div className='font-bold mb-2'>Produk Terkait</div>
                <RelatedProduct category={detailProduct.kategori} />
                <div className='lg:hidden md:static mt-5'>
                    <CheckoutFooter toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
                </div>
            </div>
        </>
    )
}

export default DetailProduct
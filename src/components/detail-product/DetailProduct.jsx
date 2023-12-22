import { useState, useRef } from 'react'
import { BsCart4 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";

const DetailProduct = () => {

    const [zoomStyle, setZoomStyle] = useState({ transform: 'scale(1)' });
    const imgRef = useRef(null);

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
    return (
        <>
            <div className="container lg:mx-10 max-w-[73rem]  grid lg:grid-cols-3 md:grid-cols-1 gap-4 mt-[5rem] pb-20">
                <div className="img-detail overflow-hidden lg:h-60"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    ref={imgRef}>
                    <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1767&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="gambar product"
                        className='object-cover cursor-zoom-in'
                        style={zoomStyle} />
                </div>
                <div className="detail-spec">
                    <h2 className='font-bold'>Mouse Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus veritatis?</h2>
                    <p>Terjual 200+</p>
                    <p className='mt-3 border-t-2 text-slate-700'>Rp. 500.000</p>
                    <p><span className='line-through mr-2'>Rp. 1.000.000</span>
                        <span className='p-1 bg-sky-300 rounded-sm text-sky-700 font-semibold'>diskon 50%</span></p>
                    <p className='mt-3 border-t-2 mb-2'><span className='border-solid border-b-2 border-slate-700 text-slate-700 font-semibold'>Spesifikasi</span></p>
                    <p className='font-bold'>UMUM</p>
                    <p>Size: </p>
                    <p>Color:</p>
                    <p>Berat: </p>
                    <p>Features: </p>
                    <p>Capacity: </p>
                    <p>Power Consumption: </p>
                    <p>Voltase: </p>
                    <p className='font-bold mt-2'>DIMENSI</p>
                    <p>29.4cm X 84.8cm X 20.4cm</p>
                    <p className='font-bold mt-2'>BERAT</p>
                    <p>10000 gr</p>
                </div>
                <div className="detail-cart justify-self-center w-full">
                    <div className='p-5 rounded border-solid border-2 border-slate-600'>
                        <button className='text-slate-700 flex justify-center items-center my-auto w-full mb-2 border-solid border-2 border-slate-600 p-1 rounded'>
                            <BsCart4 className='me-2' />
                            Keranjang
                        </button>
                        <button className='bg-slate-600 text-white w-full p-1 rounded mb-2'>Beli</button>
                        <div className='flex justify-around p-1'>
                            <button className='flex items-center'><MdFavoriteBorder className='me-2' size={20} /> Wishlist</button>
                            <button className='flex items-center'><CiShare2 className='me-2' size={20} /> Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct
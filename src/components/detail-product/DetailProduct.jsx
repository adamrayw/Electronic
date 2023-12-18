import React from 'react'
import { BsCart4 } from "react-icons/bs";

const DetailProduct = () => {
    return (
        <>
            <div className="container lg:mx-10 max-w-[73rem]  grid lg:grid-cols-3 md:grid-cols-1 gap-4 mt-[5rem] ">
                <div className="img-detail">
                    <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1767&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="detail-spec">
                    <h2 className='font-bold'>Mouse Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus veritatis?</h2>
                    <p>Terjual 200+</p>
                    <p className='mt-3 border-t-2 text-sky-700'>Rp. 500.000</p>
                    <p><span className='line-through mr-2'>Rp. 1.000.000</span>
                        <span className='p-1 bg-sky-300 rounded-sm text-sky-700 font-semibold'>diskon 50%</span></p>
                    <p className='mt-3 border-t-2 mb-2'><span className='border-solid border-b-2 border-sky-700 text-sky-700 font-semibold'>Spesifikasi</span></p>
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
                    <div className='p-5 rounded border-solid border-2 border-slate-400'>
                        <button className='flex justify-center items-center my-auto w-full mb-2 border-solid border-2 p-1 rounded'>
                            <BsCart4 className='me-2' />
                            Keranjang
                        </button>
                        <button className='bg-sky-700 text-white w-full p-1 rounded'>Beli</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct
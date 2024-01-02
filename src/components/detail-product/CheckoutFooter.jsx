import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";

const CheckoutFooter = ({ toggleFavorite, isFavorite }) => {
    return (
        <>
            <div className='flex gap-4 justify-center'>
                <CiShare2 size={40} />
                <button className='text-slate-700 flex justify-center items-center mb-2 w-full border-solid border-2 border-slate-600 p-1 rounded'>
                    <BsCart4 className='me-2' />
                    Keranjang
                </button>
                <button className='bg-slate-600 justify-center items-center text-white w-full p-1 rounded mb-2'>Beli</button>
                <button onClick={toggleFavorite} >
                    {isFavorite ? <MdFavorite size={40} /> : <MdFavoriteBorder size={40} />}
                </button>
            </div>
        </>
    )
}

export default CheckoutFooter
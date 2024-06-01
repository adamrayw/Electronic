import React from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const CartComponent = () => {
    return (
        <div className='container mx-auto px-8'>
            <div className='py-[6rem]'>
                <p className='font-bold text-2xl'>Keranjang</p>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='kiri col-span-2'>
                        <div className='flex items-center gap-3 px-5 bg-white py-3 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <p className='font-semibold'>Pilih Semua</p>
                        </div>
                        <div className='flex flex-col gap-3 bg-white py-3 px-5 rounded-md my-4'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" name="" id="" />
                                <p className='font-semibold'>Toko Cihuy</p>
                            </div>
                            <div className='flex gap-3'>
                                <input type="checkbox" name="" id="" />
                                <div className=''>
                                    <img className='max-w-[120px] rounded' src="src\assets\camera.jpg" alt="" />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-row-reverse justify-between w-full gap-3'>
                                        <p>$99</p>
                                        <p>camera Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, error.</p>
                                    </div>
                                    <div className='flex flex-row-reverse my-3'>
                                        <p className='line-through'>$80</p>
                                    </div>
                                    <div className='flex flex-row-reverse items-center gap-8'>
                                        <div class="flex items-center rounded-md border-2 border-slate-500">
                                            <button class="bg-gray-300 text-gray-700rounded-md hover:bg-gray-400 px-4 py-2 rounded-l">-</button>
                                            <input id="number-input" type="number" class="text-center w-16 border border-gray-300 py-2" />
                                            <button class="bg-gray-300 text-gray-700rounded-md hover:bg-gray-400 px-4 py-2 rounded-r">+</button>
                                        </div>
                                        <div className='gap-3 flex'>
                                            <MdOutlineFavoriteBorder size={20} />
                                            <FaRegTrashAlt size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 bg-white py-3 px-5 rounded-md my-4'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" name="" id="" />
                                <p className='font-semibold'>Mafia Elektronik</p>
                            </div>
                            <div className='flex gap-3'>
                                <input type="checkbox" name="" id="" />
                                <div className=''>
                                    <img className='max-w-[120px] rounded' src="src\assets\laptop.jpg" alt="" />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-row-reverse justify-between gap-3'>
                                        <p>$99</p>
                                        <p>laptop Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, error.</p>
                                    </div>
                                    <div className='flex flex-row-reverse my-3'>
                                        <p className='line-through'>$80</p>
                                    </div>
                                    <div className='flex flex-row-reverse items-center gap-8'>
                                        <div class="flex items-center rounded-md border-2 border-slate-500">
                                            <button class="bg-gray-300 text-gray-700rounded-md hover:bg-gray-400 px-4 py-2 rounded-l">-</button>
                                            <input id="number-input" type="number" class="text-center w-16 border border-gray-300 py-2" />
                                            <button class="bg-gray-300 text-gray-700rounded-md hover:bg-gray-400 px-4 py-2 rounded-r">+</button>
                                        </div>
                                        <div className='gap-3 flex'>
                                            <MdOutlineFavoriteBorder size={20} />
                                            <FaRegTrashAlt size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='kanan my-4'>
                        <div className='bg-white sticky top-[7rem] p-3 rounded-md'>
                            <p className='font-semibold'>Ringkasan Belanja</p>
                            <div className='flex justify-between my-5'>
                                <p className='text-slate-600 font-semibold'>Total</p>
                                <p className=''>$900</p>
                            </div>
                            <div className='text-center'>
                                <button className='text-white bg-slate-600 w-full py-1 rounded-md'>Beli</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComponent
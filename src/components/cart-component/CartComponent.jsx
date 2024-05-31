import React from 'react'

const CartComponent = () => {
    return (
        <div className='container mx-auto px-8'>
            <div className='py-[6rem]'>
                <p className='font-bold text-2xl'>Keranjang</p>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='kiri col-span-2'>
                        <div className='flex items-center gap-3 bg-white py-3 px-1 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <p className='font-semibold'>Pilih Semua</p>
                        </div>
                        <div className='flex items-center gap-3 bg-white py-3 px-1 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <div>
                                <p className='font-semibold'>Toko Cihuy</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 bg-white py-3 px-1 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <div>
                                <p className='font-semibold'>mafia elektronik</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 bg-white py-3 px-1 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <p className='font-semibold'>Pilih Semua</p>
                        </div>
                        <div className='flex items-center gap-3 bg-white py-3 px-1 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <div>
                                <p className='font-semibold'>Toko Cihuy</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 bg-white py-3 px-1 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <div>
                                <p className='font-semibold'>mafia elektronik</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 bg-white py-3 px-1 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <p className='font-semibold'>Pilih Semua</p>
                        </div>
                        <div className='flex items-center gap-3 bg-white py-3 px-1 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <div>
                                <p className='font-semibold'>Toko Cihuy</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 bg-white py-3 px-1 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <div>
                                <p className='font-semibold'>mafia elektronik</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 bg-white py-3 px-1 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <p className='font-semibold'>Pilih Semua</p>
                        </div>
                        <div className='flex items-center gap-3 bg-white py-3 px-1 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <div>
                                <p className='font-semibold'>Toko Cihuy</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 bg-white py-3 px-1 rounded-md my-4'>
                            <input type="checkbox" name="" id="" />
                            <div>
                                <p className='font-semibold'>mafia elektronik</p>
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
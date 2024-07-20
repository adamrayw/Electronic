import React, { useState, useEffect } from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { getOneCart } from '../../services/apiServices';
import { formatter } from '../../utils/formatIDR';
import { Link } from 'react-router-dom';

const CartComponent = () => {
    const [favorite, setFavorite] = useState(false)
    const [products, setProducts] = useState([])
    const [checked, setChecked] = useState(false)
    const [checkAllProduct, setCheckAllProduct] = useState(false)
    const [checkOneProduct, setCheckOneProduct] = useState(false)

    const userid = localStorage.getItem('userid')

    const fetchData = async () => {
        try {
            const response = await getOneCart()
            console.log(response);
            const cartItems = response.data.cart;
            const filteredCart = cartItems.filter(item => item.userId === userid);
            setProducts(filteredCart);
        } catch (error) {
            console.error('error fetching data. ', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleFavorite = () => {
        setFavorite(!favorite)
    }

    const handleIncrement = (id) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        ));
    }

    const handleDecrement = (id) => {
        setProducts(products.map(product =>
            product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
        ));
    }

    const handleQuantityChange = (id, newQuantity) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, quantity: newQuantity } : product
        ));
    }


    const calculateTotal = () => {
        return products.reduce((total, item) => {
            const itemTotal = (item.product.hargaBarang - item.product.hargaBarang * item.product.diskon / 100) * item.quantity;
            return total + itemTotal;
        }, 0);
    }

    const handleChecked = () => {
        setChecked(!checked)
    }
    console.log("isi checked", checked);

    const handleCheckedAll = () => {
        setCheckAllProduct(!checkAllProduct)
    }
    console.log("isi checkall", checkAllProduct);

    const handleCheckedOneProduct = () => {
        setCheckOneProduct(!checkOneProduct)
    }
    console.log("isi checkAllProduct", checkAllProduct);

    return (
        <div className='container mx-auto px-8'>
            <div className='py-[6rem]'>
                <p className='font-bold text-2xl'>Keranjang</p>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='kiri col-span-2'>
                        <div className='flex items-center gap-3 px-5 bg-white py-3 rounded-md my-4'>
                            <input defaultChecked={checked} onChange={handleChecked} type="checkbox" name="" id="" />
                            <p className='font-semibold'>Pilih Semua</p>
                        </div>
                        {products.map((item) => (
                            <div key={item.id} className='flex flex-col gap-3 bg-white py-3 px-5 rounded-md my-4'>
                                <div className='flex items-center gap-3'>
                                    <input type="checkbox" name="" id="" defaultChecked={checkAllProduct} onChange={handleCheckedAll} />
                                    <p className='font-semibold'>{item.product.user.username}</p>
                                </div>
                                <div className='flex gap-3'>
                                    <input type="checkbox" name="" id="" />
                                    <div className=''>
                                        <img className='max-w-[120px] rounded' src={item.product.img} alt="" />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <div className='flex flex-row-reverse justify-between w-full gap-3'>
                                            <p>{formatter.format((item.product.hargaBarang - item.product.hargaBarang * item.product.diskon / 100) * item.quantity)}</p>
                                            <p>{item.product.deskripsiBarang}</p>
                                        </div>
                                        <div className='flex flex-row-reverse my-3'>
                                            <p className='line-through'>{formatter.format(item.product.hargaBarang)}</p>
                                        </div>
                                        <div className='flex flex-row-reverse items-center gap-8'>
                                            <div className="flex items-center rounded-md border-2 border-slate-500">
                                                <button onClick={() => handleDecrement(item.id)} className="bg-gray-300 text-gray-700rounded-md hover:bg-gray-400 px-4 py-2 rounded-l">-</button>
                                                <input
                                                    id="number-input"
                                                    type="number"
                                                    value={item.quantity}
                                                    className="text-center w-16 border border-gray-300 py-2"
                                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                                />
                                                <button onClick={() => handleIncrement(item.id)} className="bg-gray-300 text-gray-700rounded-md hover:bg-gray-400 px-4 py-2 rounded-r">+</button>
                                            </div>
                                            <div className='gap-3 flex'>
                                                <button onClick={handleFavorite}>
                                                    {favorite ? <MdOutlineFavorite size={20} /> : <MdOutlineFavoriteBorder size={20} />}
                                                </button>
                                                <FaRegTrashAlt size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='kanan my-4'>
                        <div className='bg-white sticky top-[7rem] p-3 rounded-md'>
                            <p className='font-semibold'>Ringkasan Belanja</p>
                            <div className='flex justify-between my-5'>
                                <p className='text-slate-600 font-semibold'>Total</p>
                                <p className=''>{formatter.format(calculateTotal())}</p>
                            </div>
                            <div className='text-center'>
                                <Link to='/checkout'>
                                    <button className='text-white bg-slate-600 w-full py-1 rounded-md'>
                                        Beli
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComponent

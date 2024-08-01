import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchProduct } from '../../services/apiServices';

const SearchProduct = () => {
    const [products, setProducts] = useState([]);
    const [jenisBarang, setJenisBarang] = useState(false);
    const [jenisToko, setJenisToko] = useState(false);
    const [jenisHarga, setJenisHarga] = useState(false);
    const [nullProduct, setNullProduct] = useState([])
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productData = await searchProduct(query);
                setProducts(productData.data);
                setNullProduct(productData.data.message);
                console.log(productData);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        if (query) {
            fetchProducts();
        }

        if (!query) {
            setNullProduct("lu ga input nama produknya kocak")
        }
    }, [query]);

    const handleClickJenisBarang = () => {
        setJenisBarang(!jenisBarang);
    }

    const handleClickJenisToko = () => {
        setJenisToko(!jenisToko);
    }

    const handleClickJenisHarga = () => {
        setJenisHarga(!jenisHarga);
    }

    return (
        <div className='search-page-component py-[100px]'>
            <div className='grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 h-screen'>
                <div className='mb-8 justify-self-center'>
                    <p className='font-bold mb-4 lg:block md:flex sm:flex'>Filter</p>
                    <div className='flex lg:flex-col flex-wrap justify-center gap-1'>
                        <div className='filter-dropdown'>
                            <div onClick={handleClickJenisBarang} className='bg-slate-500 text-white w-32 h-8 text-center flex items-center justify-center rounded cursor-pointer'>
                                <span className='font-semibold'>Jenis Barang</span>
                            </div>
                            <ul className={`bg-white text-black mt-2 rounded p-2 w-32 ${jenisBarang ? 'block' : 'hidden'}`}>
                                <div className='flex items-center justify-between'>
                                    <li>Terlaris</li>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className='flex items-center justify-between my-3'>
                                    <li>Termurah</li>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <li>Termahal</li>
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </ul>
                        </div>
                        <div className='filter-dropdown'>
                            <div onClick={handleClickJenisToko} className={`bg-slate-500 text-white w-32 h-8 text-center flex items-center justify-center rounded cursor-pointer`}>
                                <span className='font-semibold'>Jenis Toko</span>
                            </div>
                            <ul className={`bg-white text-black mt-2 rounded p-2 w-32 ${jenisToko ? 'block' : 'hidden'}`}>
                                <div className='flex items-center justify-between'>
                                    <li>Official</li>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className='flex items-center justify-between my-3'>
                                    <li>Individu Star</li>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <li>Individu</li>
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </ul>
                        </div>
                        <div className='filter-dropdown'>
                            <div onClick={handleClickJenisHarga} className={`bg-slate-500 text-white w-32 h-8 text-center flex items-center justify-center rounded cursor-pointer`}>
                                <span className='font-semibold'>Harga</span>
                            </div>
                            <ul className={`bg-white text-black mt-2 rounded p-2 w-32 ${jenisHarga ? 'block' : 'hidden'}`}>
                                <div className='flex items-center justify-between'>
                                    <li>Termurah</li>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className='flex items-center justify-between my-3'>
                                    <li>Termahal</li>
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-3 lg:md:justify-self-start md:justify-self-center sm:justify-self-center'>
                    <p className='font-bold mb-4'>Produk</p>
                    <div className='container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                        {products.length > 0 ? (
                            products.map((item) => (
                                <div className="card-search-product mb-4 rounded" key={item.id}>
                                    <div>
                                        <img src={item.img} alt={item.namaBarang} className='w-full sm:h-[250px] lg:h-[140px] md:h-[150px] object-cover rounded' />
                                    </div>
                                    <div className='p-2'>
                                        <p className='font-semibold text-lg'>{item.namaBarang}</p>
                                        <p className='text-slate-600 font-semibold text-sm'>{item.deskripsiBarang}</p>
                                        <p>Rp. {Number(item.hargaBarang).toLocaleString('id-ID')}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='col-span-4'>
                                <p>{nullProduct}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchProduct;

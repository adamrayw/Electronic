import React from 'react'
import { Dropdown } from "flowbite-react";
import { allProducts } from '../../services/apiServices';
import { useState, useEffect } from 'react';

const SearchProduct = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const getAllProducts = await allProducts();
            setProducts(getAllProducts.data);
            // console.log(getAllProducts);
        } catch (error) {
            console.error("error fetching data", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className='search-page-component py-[100px]'>
            <div className='grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1'>
                <div className='mb-8 justify-self-center'>
                    <p className='font-bold mb-4 lg:block md:flex sm:flex'>Filter</p>
                    <div className='flex lg:flex-col flex-wrap justify-center gap-1'>
                        <Dropdown label="Large dropdown" size="lg" color="light">
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                        </Dropdown>
                        <Dropdown label="Large dropdown" size="lg" color="light">
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                        </Dropdown>
                        <Dropdown label="Large dropdown" size="lg" color="light">
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                        </Dropdown>
                        <Dropdown label="Large dropdown" size="lg" color="light">
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
                <div className='lg:col-span-3 lg:md:justify-self-start md:justify-self-center sm:justify-self-center'>
                    <p className='font-bold mb-4'>Produk</p>
                    <div className='container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                        {products.map((item) => (
                            <div className="card-search-product mb-4 rounded">
                                <div>
                                    <img src={item.img} alt={item.namaBarang} className='w-full sm:h-[250px] lg:h-[140px] md:h-[150px] object-cover rounded' />
                                </div>
                                <div className='p-2'>
                                    <p className='font-semibold text-lg'>{item.namaBarang}</p>
                                    <p className='text-slate-600 font-semibold text-sm'>{item.deskripsiBarang}</p>
                                    <p>Rp. {Number(item.hargaBarang).toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchProduct
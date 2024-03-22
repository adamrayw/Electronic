import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
import { Table } from 'flowbite-react';

const CheckoutBarang = () => {
    return (
        <div className='py-[100px] container mx-auto'>
            <div className='alamat bg-slate-50 rounded p-5 mb-4'>
                <div className='flex mb-4'>
                    <IoLocationOutline size={25} />
                    <p className='font-bold'>Alamat Pengiriman</p>
                </div>
                <div>
                    <button className=' text-blue-400 rounded p-1 font-semibold'>tambah alamat</button>
                </div>
            </div>
            <div className='produk-dipesan bg-slate-50 rounded'>
                <div className='p-6'>
                    <p className='font-bold mb-3'>Produk Dipesan</p>
                    <div className='flex'>
                        <p className='font-semibold me-4'>nama toko</p>
                        <span className='flex text-blue-400'><TiMessage size={25} /> <p className='font-semibold'>chat sekarang</p></span>
                    </div>
                </div>
                <div className="overflow-x-hidden">
                    <Table>
                        <Table.Head className='text-left'>
                            <Table.HeadCell>Product name</Table.HeadCell>
                            <Table.HeadCell>Color</Table.HeadCell>
                            <Table.HeadCell>Category</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {'Apple MacBook Pro 17"'}
                                </Table.Cell>
                                <Table.Cell>Sliver</Table.Cell>
                                <Table.Cell>Laptop</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Microsoft Surface Pro
                                </Table.Cell>
                                <Table.Cell>White</Table.Cell>
                                <Table.Cell>Laptop PC</Table.Cell>
                                <Table.Cell>$1999</Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
                                <Table.Cell>Black</Table.Cell>
                                <Table.Cell>Accessories</Table.Cell>
                                <Table.Cell>$99</Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default CheckoutBarang
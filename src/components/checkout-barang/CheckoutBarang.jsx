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
            <div className='produk-dipesan bg-slate-50 rounded mb-4'>
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
                            <Table.HeadCell>Produk</Table.HeadCell>
                            <Table.HeadCell>Variasi</Table.HeadCell>
                            <Table.HeadCell>Harga Satuan</Table.HeadCell>
                            <Table.HeadCell>Jumlah</Table.HeadCell>
                            <Table.HeadCell>Total</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {'Apple MacBook Pro 17"'}
                                </Table.Cell>
                                <Table.Cell>Sliver</Table.Cell>
                                <Table.Cell>Laptop</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                            </Table.Row>
                            <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Microsoft Surface Pro
                                </Table.Cell>
                                <Table.Cell>White</Table.Cell>
                                <Table.Cell>Laptop PC</Table.Cell>
                                <Table.Cell>$1999</Table.Cell>
                                <Table.Cell>$1999</Table.Cell>
                            </Table.Row>
                            <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
                                <Table.Cell>Black</Table.Cell>
                                <Table.Cell>Accessories</Table.Cell>
                                <Table.Cell>$99</Table.Cell>
                                <Table.Cell>$99</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
            <div className='catatan-pelanggan bg-slate-50 rounded p-5'>
                <div className='grid grid-cols-3 mb-10'>
                    <div className='pesan'>
                        <form>
                            <label htmlFor="text" className='me-3 font-semibold'>Pesan:</label>
                            <input type="text" placeholder='(opsional)' className='rounded-sm' />
                        </form>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex justify-between'>
                            <p className='font-semibold'>Opsi Pengiriman:</p>
                            <p>Hemat</p>
                            <button>Ubah</button>
                            <p>$2</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <p className='me-4'>Total Pesanan (3 produk):</p>
                    <p className='text-slate-600 font-semibold'>$99999</p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutBarang
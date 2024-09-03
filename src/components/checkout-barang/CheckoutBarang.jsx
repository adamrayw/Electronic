import { useState, useEffect, useContext } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
import { Modal, Table } from 'flowbite-react';
import { CheckoutContext } from '../../utils/CheckoutContext';
import { formatter } from '../../utils/formatIDR';
import AlamatModal from './AlamatModal';
import { useForm } from 'react-hook-form';
import { createAlamat } from '../../services/apiServices';

const CheckoutBarang = () => {
    const { checkoutProducts, calculateTotalCheckout, alamatPengirim } = useContext(CheckoutContext)
    const [visibleModal, setVisibleModal] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        try {
            const response = await createAlamat(data);
            reset();
            setVisibleModal(false);
            console.log(response);

        } catch (error) {
            console.error('Failed to create address:', error);
        }

    };

    const handelVisibleModal = (e) => {
        e.preventDefault();
        setVisibleModal(!visibleModal)
    }

    return (
        <div className='py-[100px] container mx-auto'>
            <div className='alamat-checkout bg-white rounded p-5 mb-4'>
                <div className='flex mb-4'>
                    <IoLocationOutline size={25} />
                    <button className='text-blue-400 font-semibold ms-2 text-xl' onClick={handelVisibleModal}>Pilih Alamat</button>
                </div>
                <div className={`${visibleModal ? 'absolute' : 'hidden'} bg-slate-600 w-[500px] h-[400px] overflow-auto z-10 rounded border-2 border-slate-800 left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2`}>
                    <div className='text-end px-4 py-2'>
                        <button onClick={handelVisibleModal} className='font-bold py-1 px-3 text-white rounded-full border-2 border-white '>X</button>
                    </div>
                    <div className='mb-6 mx-5 card-alamat'>
                        <div className='mb-4 py-2 rounded flex justify-center bg-slate-100 border-2 border-slate-500'>
                            <button className='font-semibold'>Tambah Alamat Baru</button>
                        </div>
                        {alamatPengirim.map((data) => (
                            <div key={data.id} className='p-3 rounded border-2 border-slate-500 bg-slate-100 mb-3'>
                                <div>
                                    <p className='font-semibold'>{data.User.username}</p>
                                    <p className='my-1'>{data.User.no_telp}</p>
                                    <p className='text-sm'>{data.alamat} {data.provinsi} {data.kota} {data.kodePos}</p>
                                </div>
                                <div className='flex items-center space-x-3 font-semibold mb-2 mt-8'>
                                    <div className='flex items-center'>
                                        <input className='me-2' type="checkbox" />
                                        <label className='me-7' >Pilih</label>
                                        <button>Ubah Alamat</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='text-white hidden'>
                        <div className='text-end px-3 py-2'>
                            <button className='font-bold text-white border-2 border-white rounded-full px-2' onClick={handelVisibleModal}>X</button>
                        </div>
                        <div className='grid grid-cols-5 items-center p-2'>
                            <label className='me-2 font-semibold text-lg'>Provinsi:</label>
                            <input
                                {...register('provinsi', { required: true })}
                                type="text"
                                className='rounded col-span-4 border-2 border-slate-800 text-black'
                            />
                        </div>
                        <div className='grid grid-cols-5 items-center p-2'>
                            <label className='me-2 font-semibold text-lg'>Kota:</label>
                            <input
                                {...register('kota', { required: true })}
                                type="text"
                                className='rounded col-span-4 border-2 border-slate-800 text-black'
                            />
                        </div>
                        <div className='grid grid-cols-5 items-center p-2'>
                            <label className='me-2 font-semibold text-lg'>Kode Pos:</label>
                            <input
                                {...register('kodePos', { required: true })}
                                type="text"
                                className='rounded col-span-4 border-2 border-slate-800 text-black'
                            />
                        </div>
                        <div className='grid grid-cols-5 items-center p-2'>
                            <label className='me-2 font-semibold text-lg'>Alamat:</label>
                            <input
                                {...register('alamat', { required: true })}
                                type="text"
                                className='rounded col-span-4 border-2 border-slate-800 text-black'
                            />
                        </div>
                        <div className='text-end p-3'>
                            <button className='border-2 border-white text-white font-semibold px-2 py-1 rounded bg-slate-600'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='produk-checkout bg-white rounded mb-4'>
                <div className='p-6'>
                    <p className='font-bold mb-3'>Produk Dipesan</p>
                    <div className='flex'>
                        <p className='font-semibold me-4'>nama toko</p>
                        <span className='flex text-blue-400'><TiMessage size={25} /> <p className='font-semibold'>chat sekarang</p></span>
                    </div>
                </div>
                <div className="overflow-x-scroll">
                    <Table>
                        <Table.Head className='text-left'>
                            <Table.HeadCell>Produk</Table.HeadCell>
                            <Table.HeadCell>Variasi</Table.HeadCell>
                            <Table.HeadCell>Harga Satuan</Table.HeadCell>
                            <Table.HeadCell>Jumlah</Table.HeadCell>
                            <Table.HeadCell>Total</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {checkoutProducts.map((products) => (
                                <Table.Row key={products.product.id} className=" dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {products.product.namaBarang}
                                    </Table.Cell>
                                    <Table.Cell>{products.product.color}</Table.Cell>
                                    <Table.Cell>{formatter.format(products.product.hargaBarang - products.product.hargaBarang * products.product.diskon / 100)}</Table.Cell>
                                    <Table.Cell>{products.quantity}</Table.Cell>
                                    <Table.Cell>
                                        {formatter.format((products.product.hargaBarang - (products.product.hargaBarang * products.product.diskon / 100)) * products.quantity)}
                                    </Table.Cell>

                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </div>

            <div className='catatan-pelanggan bg-white rounded p-5 mb-4'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mb-10'>
                    <div className='pesan mb-6'>
                        <form>
                            <label htmlFor="text" className='me-3 font-semibold'>Pesan:</label>
                            <input type="text" placeholder='(opsional)' className='rounded-sm' />
                        </form>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex justify-between'>
                            <p className='font-semibold'>Opsi Pengiriman:</p>
                            <p>Hemat</p>
                            <button className='text-blue-400 font-semibold'>Ubah</button>
                            <p>$2</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <p className='me-4'>Total Pesanan (3 produk):</p>
                    <p className='text-slate-600 font-semibold'>{formatter.format(calculateTotalCheckout())}</p>
                </div>
            </div>

            <div className='metode-pembayaran p-5 rounded bg-white'>
                <div className='flex justify-between mb-7'>
                    <p className='font-semibold'>Metode Pembayaran</p>
                    <div className='flex'>
                        <p> COD (bayar ditempat)</p>
                        <button className='text-blue-400 font-semibold ms-3'>Ubah</button>
                    </div>
                </div>
                <hr />
                <br />
                <div className='total-perhitungan flex justify-end mb-16'>
                    <div className='pembungkus'>
                        <div className='flex mb-3 text-gray-600 justify-between'>
                            <p className='me-16'>Subtotal untuk produk</p>
                            <p>{formatter.format(calculateTotalCheckout())}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-gray-600 me-16'>Total Pembayaran</p>
                            <p className='font-bold text-2xl text-slate-600'>{formatter.format(calculateTotalCheckout())}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <br />
                <div className='flex justify-end'>
                    <button className='p-3 bg-slate-600 text-white font-semibold rounded px-8'>Buat Pesanan</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutBarang
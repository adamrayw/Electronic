import { useState, useEffect, useContext } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
import { Modal, Table } from 'flowbite-react';
import { CheckoutContext } from '../../utils/CheckoutContext';
import { formatter } from '../../utils/formatIDR';
import AlamatModal from './AlamatModal';
import { useForm } from 'react-hook-form';
import { apiService, createAlamat, deleteAlamat, setAlamat, updateAlamat } from '../../services/apiServices';
import { toast, ToastContainer } from 'react-toastify';
import ProvinsiOption from './ProvinsiOption';
import CityOption from './CityOption';

const CheckoutBarang = () => {
    const { checkoutProducts, calculateTotalCheckout, alamatPengirim } = useContext(CheckoutContext);
    const [visibleModal, setVisibleModal] = useState(false);
    const [visibleCreateAlamat, setVisibleCreateAlamat] = useState(false);
    const [visibleUpdateModal, setVisibleUpdateModal] = useState(false);
    const [selectedAlamat, setSelectedAlamat] = useState(null);
    const [jasaKirim, setJasaKirim] = useState([]);
    const { register: registerCreate, handleSubmit: handleSubmitCreate, reset: resetCreate, setValue: setValueCreate } = useForm();
    const { register: registerUpdate, handleSubmit: handleSubmitUpdate, reset: resetUpdate, setValue: setValueUpdate } = useForm();

    console.log(checkoutProducts)

    const handleCardAlamat = async (data) => {
        try {
            await setAlamat(data);
            toast.success('successfully choose alamat')
            window.location.reload();
        } catch (error) {
            console.error('Failed to set address:', error);
        }
    };

    const onSubmit = async (data) => {
        try {
            await createAlamat(data);
            resetCreate();
            toast.success('successfully create alamat')
            setVisibleModal(false);
            window.location.reload();
        } catch (error) {
            console.error('Failed to create address:', error);
        }
    };

    const handelVisibleModal = (e) => {
        e.preventDefault();
        setVisibleModal(!visibleModal);
    }

    const handleVisibleCreateAlamat = (e) => {
        e.preventDefault();
        setVisibleCreateAlamat(!visibleCreateAlamat);
    }

    const onSubmitUpdate = async (formData) => {

        const updateData = {
            id: selectedAlamat.id,
            provinsiId: formData.provinsiId,
            kotaId: formData.kotaId,
            kodePos: formData.kodePos,
            alamat: formData.alamat,
        };
        try {
            await updateAlamat(updateData);
            setSelectedAlamat(null);
            resetUpdate();
            toast.success('successfully update alamat')
            window.location.reload();
        } catch (error) {
            console.error('failed update alamat', error)
        }
    }

    const handleUpdateAlamat = (data) => {
        setSelectedAlamat(data);
        setValueUpdate('provinsiId', data.provinsiId);
        setValueUpdate('kotaId', data.kotaId);
        setValueUpdate('kodePos', data.kodePos);
        setValueUpdate('alamat', data.alamat);
        setVisibleUpdateModal(!visibleUpdateModal);
    }

    const handleDeleteAlamat = async (data) => {
        const id = data.id
        try {
            await deleteAlamat(id)
            toast.success('success delete alamat')
            window.location.reload();
        } catch (error) {
            console.error('failed delete alamat', error)
        }
    }

    const handleSelectService = async (event, products) => {
        const selectedService = event.target.value;
        const selectedProducts = products.product.user.AlamatPengiriman[0];
        console.log('Selected Shipping Method:', selectedService);
        console.log('Selected products:', selectedProducts);
    }

    return (
        <div className='py-[100px] container mx-auto'>
            <ToastContainer />
            <div className='alamat-checkout bg-white rounded p-5 mb-4'>
                <div className='flex mb-4'>
                    <IoLocationOutline size={25} />
                    <button className='text-blue-400 font-semibold ms-2 text-xl' onClick={handelVisibleModal}>Pilih Alamat</button>
                </div>
                <div className={`${visibleModal ? 'absolute' : 'hidden'} alamat-card-container bg-slate-600 w-[500px] h-[400px] overflow-auto z-10 rounded border-2 border-slate-800 left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2`}>
                    <div className='text-end px-4 py-2'>
                        <button onClick={handelVisibleModal} className={`${visibleCreateAlamat ? 'hidden' : 'visible'} font-bold py-1 px-3 text-white rounded-full border-2 border-white `}>X</button>
                    </div>
                    <div className={`mb-6 mx-5 card-alamat ${visibleCreateAlamat ? 'hidden' : 'visible'}`}>
                        <div className='mb-4 py-2 rounded flex justify-center bg-slate-100 border-2 border-slate-500'>
                            <button onClick={handleVisibleCreateAlamat} className='font-semibold'>Tambah Alamat Baru</button>
                        </div>
                        {alamatPengirim.map((data) => (
                            <div key={data.id} className={`card-alamat ${data.isDefault === true ? 'border-green-500' : 'border-slate-400'} p-3 rounded border-4 bg-slate-100 mb-3`}>
                                <div>
                                    <p className='font-semibold'>{data.User.username}</p>
                                    <p className='my-1'>{data.User.no_telp}</p>
                                    <p className='text-sm'>{data.alamat} {data.provinsi} {data.kota} {data.kodePos}</p>
                                </div>
                                <div className='flex items-center space-x-3 font-semibold mb-2 mt-8'>
                                    <div className='flex items-center'>
                                        <button onClick={() => handleCardAlamat(data)} className={`cursor-pointer ${data.isDefault === true ? 'text-green-500' : 'text-black'}`}>{data.isDefault ? 'Default' : 'Pilih'}</button>
                                        <button onClick={() => handleUpdateAlamat(data)} className='mx-4 '>Ubah Alamat</button>
                                        <button onClick={() => handleDeleteAlamat(data)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmitCreate(onSubmit)} className={`text-white ${visibleCreateAlamat ? 'visible' : 'hidden'}`}>
                        <div className='text-end px-3 py-2'>
                            <button className='font-bold text-white border-2 border-white rounded-full px-2' onClick={handleVisibleCreateAlamat}>X</button>
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-bold'>Tambah Alamat</p>
                        </div>
                        <div className='grid grid-cols-5 items-center p-2'>
                            <label className='me-2 font-semibold text-lg'>Provinsi:</label>
                            <select
                                {...registerCreate('provinsi', { required: true })}
                                className='rounded col-span-4 border-2 border-slate-800 text-black'
                            >
                                <option value="" disabled>Pilih Provinsi</option>
                                <ProvinsiOption />
                            </select>
                        </div>
                        <div className='grid grid-cols-5 items-center p-2'>
                            <label className='me-2 font-semibold text-lg'>Kota:</label>
                            <select
                                {...registerCreate('kota', { required: true })}
                                className='rounded col-span-4 border-2 border-slate-800 text-black'
                            >
                                <option value="" disabled>Pilih Kota</option>
                                <CityOption />
                            </select>
                        </div>
                        <div className='grid grid-cols-5 items-center p-2'>
                            <label className='me-2 font-semibold text-lg'>Kode Pos:</label>
                            <input
                                {...registerCreate('kodePos', { required: true })}
                                type="text"
                                className='rounded col-span-4 border-2 border-slate-800 text-black'
                            />
                        </div>
                        <div className='grid grid-cols-5 items-center p-2'>
                            <label className='me-2 font-semibold text-lg'>Alamat:</label>
                            <input
                                {...registerCreate('alamat', { required: true })}
                                type="text"
                                className='rounded col-span-4 border-2 border-slate-800 text-black'
                            />
                        </div>
                        <div className='text-end p-3'>
                            <button className='border-2 border-white text-white font-semibold px-2 py-1 rounded bg-slate-600'>Submit</button>
                        </div>
                    </form>
                </div>
                <form onSubmit={handleSubmitUpdate(onSubmitUpdate)} className={`text-white ${visibleUpdateModal ? 'absolute' : 'hidden'} w-[500px] h-[400px] rounded border-2 border-black bg-slate-600 left-1/2 top-[55%] z-50 transform -translate-x-1/2 -translate-y-1/2`}>
                    <div className='text-end px-3 py-2'>
                        <button className='font-bold text-white border-2 border-white rounded-full px-2' onClick={handleUpdateAlamat}>X</button>
                    </div>
                    <div className='flex justify-center'>
                        <p className='font-bold'>Update Alamat</p>
                    </div>
                    <div className='grid grid-cols-5 items-center p-2'>
                        <label className='me-2 font-semibold text-lg'>Provinsi:</label>
                        <select
                            {...registerUpdate('provinsiId', { required: true })}
                            className='rounded col-span-4 border-2 border-slate-800 text-black'
                        >
                            <option value="" disabled>Pilih Provinsi</option>
                            <ProvinsiOption />
                        </select>
                    </div>
                    <div className='grid grid-cols-5 items-center p-2'>
                        <label className='me-2 font-semibold text-lg'>Kota:</label>
                        <select
                            {...registerUpdate('kotaId', { required: true })}
                            className='rounded col-span-4 border-2 border-slate-800 text-black'
                        >
                            <option value="" disabled>Pilih Kota</option>
                            <CityOption />
                        </select>
                    </div>
                    <div className='grid grid-cols-5 items-center p-2'>
                        <label className='me-2 font-semibold text-lg'>Kode Pos:</label>
                        <input
                            {...registerUpdate('kodePos', { required: true })}
                            type="text"
                            className='rounded col-span-4 border-2 border-slate-800 text-black'
                        />
                    </div>
                    <div className='grid grid-cols-5 items-center p-2'>
                        <label className='me-2 font-semibold text-lg'>Alamat:</label>
                        <input
                            {...registerUpdate('alamat', { required: true })}
                            type="text"
                            className='rounded col-span-4 border-2 border-slate-800 text-black'
                        />
                    </div>
                    <div className='text-end p-3'>
                        <button className='border-2 border-white text-white font-semibold px-2 py-1 rounded bg-slate-600'>Submit</button>
                    </div>
                </form>
            </div>

            <div className='produk-checkout bg-white rounded mb-4'>
                <div className='p-6'>
                    <p className='font-bold mb-3'>Produk Dipesan</p>
                </div>
                {checkoutProducts.map((products) => (
                    <div key={products.id} className="overflow-x-scroll mb-3">
                        <div className='flex ps-6'>
                            <p className='font-semibold me-4 mb-3'>{products.product.user.username}</p>
                            <span className='flex text-blue-400'><TiMessage size={25} /> <p className='font-semibold'>chat sekarang</p></span>
                        </div>
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
                                        {products.product.namaBarang}
                                    </Table.Cell>
                                    <Table.Cell>{products.product.color}</Table.Cell>
                                    <Table.Cell>{formatter.format(products.product.hargaBarang - products.product.hargaBarang * products.product.diskon / 100)}</Table.Cell>
                                    <Table.Cell>{products.quantity}</Table.Cell>
                                    <Table.Cell>
                                        {formatter.format((products.product.hargaBarang - (products.product.hargaBarang * products.product.diskon / 100)) * products.quantity)}
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <div className='ps-6 space-x-3 my-3'>
                            <label className='font-semibold' htmlFor="jasa-pengiriman">Opsi Pengiriman:</label>
                            <select className='w-1/2' defaultValue="" onChange={(event) => handleSelectService(event, products)}>
                                <option value="" disabled>Pilih Pengiriman</option>
                                <option value="jne">JNE</option>
                                <option value="pos">POS</option>
                            </select>
                            <select >
                                <option value="JTR">JNE Trucking</option>
                                <option value="REG">Layanan Reguler</option>
                                <option value="YES">Yakin Esok Sampai</option>
                            </select>
                            <select >
                                <option value="Pos Reguler">Pos Reguler</option>
                                <option value="Pos Nextday">Pos Nextday</option>
                            </select>
                        </div>
                    </div>
                ))}
            </div>

            <div className='catatan-pelanggan bg-white rounded p-5 mb-4'>
                <div className='grid mb-10'>
                    <div className='pesan mb-6'>
                        <form>
                            <label htmlFor="text" className='me-3 font-semibold'>Pesan:</label>
                            <input type="text" placeholder='(opsional)' className='rounded-sm w-[90%]' />
                        </form>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <p className='me-4'>Total Pesanan ({checkoutProducts.length} produk):</p>
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
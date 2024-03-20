import React from 'react'
import { useForm } from 'react-hook-form'
import { forgotPassword } from '../../services/apiServices';

const ResetPassword = () => {
    const { register, handleSubmit, reset } = useForm(); // Perbaikan pada penulisan 'handleSubmit'

    const onSubmit = async (data) => { // Menambahkan parameter 'data'
        try {
            const response = await forgotPassword(data); // Panggil forgotPassword dengan data email
            console.log(response); // Tampilkan data dari respon
            reset();
        } catch (error) {
            console.error("Failed", error);
            // Tindakan lain yang dapat diambil jika gagal
        }
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-slate-600 p-4 rounded shadow-2xl max-w-md'>
                <div className='text-center mb-4'>
                    <p className='font-bold'>Atur ulang kata sandi</p>
                    <p>Masukkan e-mail yang terdaftar. Kami akan mengirimkan kode verifikasi untuk atur ulang kata sandi.
                    </p>
                </div>
                <div>
                    <label htmlFor="email" className='block font-semibold'>Email</label>
                    <input {...register("email")} type="email" className='w-full py-1 border-2 border-slate-300' />
                </div>
                <div className='text-center mt-4 mb-2'>
                    <button type="submit" className='bg-slate-600 rounded p-1 text-white font-semibold w-full'>Submit</button> {/* Tambahkan type="submit" */}
                </div>
            </form>
        </div>
    )
}

export default ResetPassword

import React from 'react'

const ResetPassword = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <form action="submit" className='border-2 border-slate-600 p-4 rounded shadow-2xl max-w-md'>
                <div className='text-center mb-4'>
                    <p className='font-bold'>Atur ulang kata sandi</p>
                    <p>Masukkan e-mail yang terdaftar. Kami akan mengirimkan kode verifikasi untuk atur ulang kata sandi.
                    </p>
                </div>
                <div>
                    <label htmlFor="email" className='block font-semibold'>Email</label>
                    <input type="email" className='w-full py-1 border-2 border-slate-300' />
                </div>
                <div className='text-center mt-4 mb-2'>
                    <button className='bg-slate-600 rounded p-1 text-white font-semibold w-full'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword
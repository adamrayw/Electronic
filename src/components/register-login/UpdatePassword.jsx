import React from 'react'

const UpdatePassword = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <form className='border-2 border-slate-600 p-4 rounded shadow-2xl max-w-md'>
                <div className='text-center mb-4'>
                    <p className='font-bold'>Atur ulang kata sandi</p>
                    <p>masukkan kata sandi baru</p>
                </div>
                <div>
                    <label htmlFor="password" className='block font-semibold'>password</label>
                    <input type="password" className='w-full py-1 border-2 border-slate-300' />
                </div>
                <div className='text-center mt-4 mb-2'>
                    <button type="submit" className='bg-slate-600 rounded p-1 text-white font-semibold w-full'>Submit</button> {/* Tambahkan type="submit" */}
                </div>
            </form>
        </div>
    )
}

export default UpdatePassword
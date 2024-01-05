import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className="container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-screen items-center w-full mx-auto mt-10">
                <div className='mx-auto'>
                    <div className='p-8 flex justify-center items-center rounded-lg bg-slate-600 text-center'>
                        <p className='text-6xl text-white font-bold my-auto'>Electronic</p>
                    </div>
                </div>
                <form className='w-full border-2 rounded-xl border-slate-600 mx-auto p-5 shadow-2xl'>
                    <div className='text-center mb-3'>
                        <p className='font-bold text-2xl'>Daftar Sekarang</p>
                        <p>sudah punya akun? <Link className='text-blue-500 font-semibold' to='/login'>masuk</Link></p>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email' className='block font-semibold'>Email</label>
                        <input type="email" className='w-full py-1 border-2 border-slate-300' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password' className='block font-semibold'>Password</label>
                        <input type="password" className='w-full py-1 border-2 border-slate-300' />
                    </div>
                    <div className='mt-8 mb-2'>
                        <button className='w-full py-2 bg-slate-600 rounded text-white font-semibold'>Register</button>
                    </div>
                    <div className='mx-2 text-end'>
                        <p>Lupa akun? <a href='' className='text-blue-500 font-semibold'>reset password</a></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register
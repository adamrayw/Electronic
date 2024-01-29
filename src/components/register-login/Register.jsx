import { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../../services/apiServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleResetInput = () => {
        setEmail('')
        setPassword('')
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const formData = { email, password };
            const response = await register(formData);
            localStorage.setItem('user', response.data.token);
            handleResetInput()
            console.log('Registration successful:', response);

            toast.success('Registration successful!', { autoClose: 2000 });

            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
        } catch (error) {
            handleResetInput()
            console.error('Registration failed:', error);

            if (error.response && error.response.data && error.response.data.error) {
                toast.error(`Registration failed. ${error.response.data.error}`);
            }
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-screen items-center w-full mx-auto mt-10">
                <div className='mx-auto'>
                    <div className='p-8 flex justify-center items-center rounded-lg bg-slate-600 text-center'>
                        <p className='text-6xl text-white font-bold my-auto'>Electronic</p>
                    </div>
                </div>
                <form className='w-full border-2 rounded-xl border-slate-600 mx-auto p-5 shadow-2xl' onSubmit={handleRegister}>
                    <div className='text-center mb-3'>
                        <p className='font-bold text-2xl'>Daftar Sekarang</p>
                        <p>sudah punya akun? <Link className='text-blue-500 font-semibold' to='/login'>masuk</Link></p>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email' className='block font-semibold'>Email</label>
                        <input
                            type="email"
                            className='w-full py-1 border-2 border-slate-300'
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password' className='block font-semibold'>Password</label>
                        <input
                            type="password"
                            className='w-full py-1 border-2 border-slate-300'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className='mt-8 mb-2'>
                        <button className='w-full py-2 bg-slate-600 rounded text-white font-semibold'>Register</button>
                    </div>
                    <div className='mx-2 text-end'>
                        <p>Lupa akun? <Link to='/forget-password' className='text-blue-500 font-semibold'>reset password</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register

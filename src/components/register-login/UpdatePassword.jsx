import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'; // Import useParams to get the token from the URL
import { updatePassword } from '../../services/apiServices';
import { toast } from 'react-toastify';

const UpdatePassword = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm(); // Use formState to access errors
    const { token } = useParams(); // Get the token from the URL
    const password = watch("password"); // Get the value of the password field

    const onSubmit = async (data) => {
        try {
            const response = await updatePassword(token, data.password); // Pass token and password to the updatePassword function
            console.log(response);
            reset();
            toast.success(response.data.message, { autoClose: 2000 });
            setTimeout(() => {
                window.location.href = '/login';
            }, 2000);
        } catch (error) {
            console.error("Failed", error);
            toast.error(`Failed. ${error.response.data.error}`);
        }
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-slate-600 p-4 rounded shadow-2xl max-w-md'>
                <div className='text-center mb-4'>
                    <p className='font-bold'>Atur ulang kata sandi</p>
                    <p>Masukkan password baru anda
                    </p>
                </div>
                <div>
                    <label htmlFor="password" className='block font-semibold'>Password</label>
                    <input {...register("password")} type="password" className='w-full py-1 border-2 border-slate-300' />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className='block font-semibold'>Konfirmasi Password</label>
                    <input {...register("confirmPassword", {
                        validate: value => value === password || "Passwords tidak sama" // Validation to ensure passwords match
                    })} type="password" className='w-full py-1 border-2 border-slate-300' />
                    {/* Display error message if passwords do not match */}
                    {errors && errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                </div>
                <div className='text-center mt-4 mb-2'>
                    <button type="submit" className='bg-slate-600 rounded p-1 text-white font-semibold w-full'>Submit</button> {/* Tambahkan type="submit" */}
                </div>
            </form>
        </div>
    )
}

export default UpdatePassword

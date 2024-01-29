import React from 'react'

const ResetPassword = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <form action="submit">
                <div>
                    <p>lupa password</p>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                </div>
                <div>
                    <button>submit</button>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword
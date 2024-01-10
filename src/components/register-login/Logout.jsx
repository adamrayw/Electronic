import React from 'react'
import { handleLogout } from '../../services/apiServices'

const Logout = () => {

    return (
        <>
            <button onClick={handleLogout} className="block py-2 px-4 text-white hover:text-gray-200">Logout</button>
        </>
    )
}

export default Logout
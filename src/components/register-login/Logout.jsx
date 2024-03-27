import React from 'react'
import { handleLogout } from '../../services/apiServices'

const Logout = () => {

    return (
        <>
            <button onClick={handleLogout} className="logout transform-text-profile">Logout</button>
        </>
    )
}

export default Logout
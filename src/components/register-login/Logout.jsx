import React from 'react'
import { handleLogout } from '../../services/apiServices'

const Logout = () => {

    return (
        <>
            <button onClick={handleLogout} className="logout">Logout</button>
        </>
    )
}

export default Logout
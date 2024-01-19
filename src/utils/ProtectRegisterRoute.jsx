import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const user = localStorage.getItem('user');

export const ProtectRegisterRoute = () => {
    if (user) {
        return <Navigate to='/' />
    }
    return <Outlet />;
};

export const ProtectRoutes = () => {
    try {

        const decode = jwtDecode(user);

        if (decode && decode.exp) {
            const currentTimestamp = Math.floor(Date.now() / 1000);

            // Compare the 'exp' claim with the current timestamp
            if (decode.exp > currentTimestamp) {
                // Token is still valid
                console.log('Token masih valid');
            } else {
                // Token has expired
                console.log('Token expired');
                localStorage.removeItem('user');
                return <Navigate to='/login' />
            }
        } else {
            // Token does not have an 'exp' claim
            console.log('Token does not have an expiration claim');
        }
    } catch (error) {
        // Handle decoding errors
        console.error('Error decoding token:', error.message);
    }

    if (!user) {
        return <Navigate to='/login' />
    }
    return <Outlet />;
};

import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const user = localStorage.getItem('token');

export const ProtectRegisterRoute = () => {
    if (user) {
        return <Navigate to='/' />
    }
    return <Outlet />;
};

export const ProtectRoutes = () => {
    const location = useLocation();

    try {
        const decode = jwtDecode(user);

        if (decode && decode.exp) {
            const currentTimestamp = Math.floor(Date.now() / 1000);

            if (decode.exp > currentTimestamp) {
                // Token is still valid
                console.log('Token masih valid');
            } else {
                // Token has expired
                console.log('Token expired');
                localStorage.removeItem('token');
                localStorage.removeItem('userid');
                location.reload();
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
        // Store the current location
        localStorage.setItem('redirectAfterLogin', location.pathname);
        return <Navigate to='/login' />;
    }
    return <Outlet />;
};
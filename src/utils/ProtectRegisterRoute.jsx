import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectRegisterRoute = () => {
    const user = localStorage.getItem('user');
    if (user) {
        return <Navigate to='/' />;
    }
    return <Outlet />;
};

export default ProtectRegisterRoute;

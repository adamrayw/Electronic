import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const user = localStorage.getItem('user');

export const ProtectRegisterRoute = () => {
    if (user) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export const ProtectRoutes = () => {
    if (!user) {
        return <Navigate to="/register" />;
    }
    return <Outlet />;
};

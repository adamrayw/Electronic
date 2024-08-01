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
    const token = localStorage.getItem('token');
  
    try {
      if (token) {
        const decode = jwtDecode(token);
        const currentTimestamp = Math.floor(Date.now() / 1000);
  
        if (decode.exp > currentTimestamp) {
          // Token masih valid
          console.log('Token masih valid');
          return <Outlet />;
        } else {
          // Token sudah kedaluwarsa
          console.log('Token expired');
          localStorage.removeItem('token');
          localStorage.removeItem('userid');
          localStorage.setItem('redirectAfterLogin', location.pathname);
          return <Navigate to='/login' />;
        }
      } else {
        // Tidak ada token
        console.log('No token found');
        localStorage.setItem('redirectAfterLogin', location.pathname);
        return <Navigate to='/login' />;
      }
    } catch (error) {
      console.error('Error decoding token:', error.message);
      localStorage.removeItem('token');
      localStorage.removeItem('userid');
      return <Navigate to='/login' />;
    }
  };
import React, { createContext, useState, useEffect } from 'react'
import { getCheckoutProducts } from '../services/apiServices';

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    const [checkoutProducts, setCheckoutProducts] = useState([])

    const fetchData = async () => {
        const response = await getCheckoutProducts();
        console.log('response checkout:', response);
        setCheckoutProducts(response)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <CheckoutContext.Provider value={{ checkoutProducts }}>{children}</CheckoutContext.Provider>
    )
}
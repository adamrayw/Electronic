import React, { createContext, useState, useEffect } from 'react'
import { getCheckoutProducts } from '../services/apiServices';

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    const [checkoutProducts, setCheckoutProducts] = useState([])

    const fetchData = async () => {
        const response = await getCheckoutProducts();
        const data = response.data.checkoutProduct[0].items;
        setCheckoutProducts(data)
        console.log('response checkout:', data);
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <CheckoutContext.Provider value={{ checkoutProducts }}>{children}</CheckoutContext.Provider>
    )
}
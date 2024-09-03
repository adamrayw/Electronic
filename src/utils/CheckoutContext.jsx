import React, { createContext, useState, useEffect } from 'react'
import { getAlamat, getCheckoutProducts } from '../services/apiServices';

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    const [checkoutProducts, setCheckoutProducts] = useState([]);
    const [alamatPengirim, setAlamatPengirim] = useState([]);

    const fetchcheckoutProducts = async () => {
        const response = await getCheckoutProducts();
        const data = response.data.checkoutProduct[0].items;
        setCheckoutProducts(data)
        console.log('response checkout:', data);
    }

    const fetchAlamatPengirim = async () => {
        const response = await getAlamat();
        setAlamatPengirim(response.data.Alamat);
        console.log('alamat pengirim', response.data.Alamat);
    }

    useEffect(() => {
        fetchcheckoutProducts();
        fetchAlamatPengirim();
    }, [])

    const calculateTotalCheckout = () => {
        return checkoutProducts.reduce((total, item) => {
            const itemTotal = (item.product.hargaBarang - item.product.hargaBarang * item.product.diskon / 100) * item.quantity;
            return total + itemTotal;
        }, 0);
    };

    return (
        <CheckoutContext.Provider value={{ checkoutProducts, calculateTotalCheckout, alamatPengirim }}>{children}</CheckoutContext.Provider>
    )
}
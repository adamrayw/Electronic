import React, { createContext, useState, useEffect } from 'react'
import { getAlamat, getCheckoutProducts } from '../services/apiServices';

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    const [checkoutProducts, setCheckoutProducts] = useState([]);
    const [alamatPengirim, setAlamatPengirim] = useState([]);

    const fetchcheckoutProducts = async () => {
        const userid = localStorage.getItem('userid')
        try {
            const response = await getCheckoutProducts();
            const datas = response.data.checkoutProduct[0].items;
            const dataCheckout = datas.filter(data => data.userId === userid);
            setCheckoutProducts(dataCheckout)
            console.log('response checkout:', dataCheckout);
        } catch (error) {
            console.error('failed get checkout products', error);
        }
    }

    const fetchAlamatPengirim = async () => {
        const userid = localStorage.getItem('userid');
        try {
            const response = await getAlamat();
            const alamat = response.data.Alamat;
            const alamatUser = alamat.filter(item => item.userId === userid);
            setAlamatPengirim(alamatUser);
            console.log('alamat pengirim', alamatUser);
        } catch (error) {
            console.error('failed get alamat', error)
        }
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
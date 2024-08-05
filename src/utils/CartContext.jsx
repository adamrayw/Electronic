import React, { createContext, useState, useEffect } from 'react';
import { getOneCart, incrementCartItemQuantity, decrementCartItemQuantity, deleteOneProduct, addOneCartProduct } from '../services/apiServices';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [favorite, setFavorite] = useState(false);

    const userid = localStorage.getItem('userid');

    const fetchData = async () => {
        try {
            const response = await getOneCart();
            const cartItems = response.data.cart;
            const filteredCart = cartItems.filter(item => item.userId === userid);
            setProducts(filteredCart);
            console.log('response', response);

        } catch (error) {
            console.error('error fetching data.', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleFavorite = () => {
        setFavorite(!favorite);
    };

    const handleIncrement = async (id) => {
        try {
            await incrementCartItemQuantity(id);
            setProducts(products.map(product =>
                product.id === id ? { ...product, quantity: product.quantity + 1 } : product
            ));
        } catch (error) {
            console.error('Error incrementing quantity', error);
        }
    };

    const handleDecrement = async (id) => {
        try {
            await decrementCartItemQuantity(id);
            const product = products.find(product => product.id === id);
            if (product.quantity - 1 < 1) {
                await handleDelete(id);
            } else {
                setProducts(products.map(product =>
                    product.id === id ? { ...product, quantity: product.quantity - 1 } : product
                ));
            }
        } catch (error) {
            console.error('Error decrementing quantity', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteOneProduct(id);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    const handleQuantityChange = (id, newQuantity) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, quantity: newQuantity } : product
        ));
    };

    const calculateTotal = () => {
        return products.reduce((total, item) => {
            const itemTotal = (item.product.hargaBarang - item.product.hargaBarang * item.product.diskon / 100) * item.quantity;
            return total + itemTotal;
        }, 0);
    };

    const totalQuantity = products.reduce((total, item) => total + item.quantity, 0);

    const handleAddToCart = async (detailProduct) => {
        try {
            const userId = localStorage.getItem('userid');
            const productId = detailProduct.id;
            const response = await addOneCartProduct({ userId, productId });
            console.log(response);
            fetchData();
            return response.data.message;
        } catch (error) {
            console.error("Error adding product to cart", error);
            throw new Error('Failed to add product to cart');
        }
    };

    return (
        <CartContext.Provider value={{
            products,
            favorite,
            handleFavorite,
            handleIncrement,
            handleDecrement,
            handleDelete,
            handleQuantityChange,
            calculateTotal,
            totalQuantity,
            handleAddToCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

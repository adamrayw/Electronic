import React, { createContext, useState, useEffect } from 'react';
import { getOneCart, incrementCartItemQuantity, decrementCartItemQuantity, deleteOneProduct, addOneCartProduct, getCheckout } from '../services/apiServices';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [favorite, setFavorite] = useState(false);
    const [checkedCart, setCheckedCart] = useState(() => {
        const savedCheckedCart = localStorage.getItem('checkedCart');
        return savedCheckedCart ? JSON.parse(savedCheckedCart) : [];
    });
    const [selectAll, setSelectAll] = useState(false);

    const fetchData = async () => {
        try {
            const userid = localStorage.getItem('userid');
            const response = await getOneCart();
            const cartItems = response.data.cart;
            const filteredCart = cartItems.filter(item => item.userId === userid);
            setProducts(filteredCart);
            console.log('response', response);
            console.log('cartItems', cartItems);


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
        return products.filter(item => checkedCart.includes(item.id)).reduce((total, item) => {
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
            console.log("handleAddToCart", response);
            fetchData();
            return response.data.message;
        } catch (error) {
            console.error("Error adding product to cart", error);
            throw new Error('Failed to add product to cart');
        }
    };

    // checkout
    useEffect(() => {
        localStorage.setItem('checkedCart', JSON.stringify(checkedCart));
        setSelectAll(checkedCart.length === products.length);
    }, [checkedCart, products]);

    const handleOneCart = (id) => {
        setCheckedCart((prevChecked) => prevChecked.includes(id) ? prevChecked.filter((itemId) => itemId !== id) : [...prevChecked, id]);
    };

    const handleSelectAllChange = () => {
        if (selectAll) {
            setCheckedCart([]);
        } else {
            setCheckedCart(products.map(item => item.id));
        }
    };

    const handleCheckout = async () => {
        const selectedItems = products.filter(item => checkedCart.includes(item.id));
        const userId = selectedItems.length > 0 ? selectedItems[0].userId : null;

        if (!userId || selectedItems.length === 0) {
            return console.error('User ID is empty or no items selected');
        }

        try {
            const response = await getCheckout(userId, selectedItems);
            console.log('Success checkout', response);
        } catch (error) {
            console.error('Checkout failed', error);
        }
    };

    return (
        <CartContext.Provider value={{
            products,
            favorite,
            checkedCart,
            selectAll,
            handleFavorite,
            handleIncrement,
            handleDecrement,
            handleDelete,
            handleQuantityChange,
            handleOneCart,
            handleSelectAllChange,
            handleCheckout,
            calculateTotal,
            totalQuantity,
            handleAddToCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

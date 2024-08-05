import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        favorite: false,
        checked: false,
        checkAllProduct: false,
        checkOneProduct: false,
        totalQuantity: 0, // Add totalQuantity to initial state
    },
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
            state.totalQuantity = state.products.reduce((total, item) => total + item.quantity, 0); // Update totalQuantity
        },
        setFavorite(state, action) {
            state.favorite = action.payload;
        },
        setChecked(state, action) {
            state.checked = action.payload;
        },
        setCheckAllProduct(state, action) {
            state.checkAllProduct = action.payload;
        },
        setCheckOneProduct(state, action) {
            state.checkOneProduct = action.payload;
        },
        updateProductQuantity(state, action) {
            const { id, quantity } = action.payload;
            const product = state.products.find(p => p.id === id);
            if (product) {
                product.quantity = quantity;
                state.totalQuantity = state.products.reduce((total, item) => total + item.quantity, 0); // Update totalQuantity
            }
        },
        removeProduct(state, action) {
            state.products = state.products.filter(p => p.id !== action.payload);
            state.totalQuantity = state.products.reduce((total, item) => total + item.quantity, 0); // Update totalQuantity
        },
        incrementQuantity(state, action) {
            const product = state.products.find(p => p.id === action.payload);
            if (product) {
                product.quantity += 1;
                state.totalQuantity += 1; // Increment totalQuantity
            }
        },
        decrementQuantity(state, action) {
            const product = state.products.find(p => p.id === action.payload);
            if (product) {
                if (product.quantity > 1) {
                    product.quantity -= 1;
                    state.totalQuantity -= 1; // Decrement totalQuantity
                } else if (product.quantity === 1) {
                    // Remove product if quantity reaches zero
                    state.products = state.products.filter(p => p.id !== action.payload);
                    state.totalQuantity -= 1; // Decrement totalQuantity
                }
            }
        },
    },
});

export const { setProducts, setFavorite, setChecked, setCheckAllProduct, setCheckOneProduct, updateProductQuantity, removeProduct, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;

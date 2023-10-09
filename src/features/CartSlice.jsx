// src/features/CartSlice.jsx
import { createSlice } from "@reduxjs/toolkit";
import items from "../data/Item";

const initialState = {
  products: items,
  cartItems: [], 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },
    addOneQuantity: (state,action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      
      if (existingItem){
        existingItem.quantity +=1;
      }
    },
    deleteOneQuantity: (state,action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      
      if (existingItem){
        existingItem.quantity -=1;
        if (existingItem.quantity < 1){
          state.cartItems = state.cartItems.filter((item) => item.id !== deleteOneSpecificItem.id);
        }
      }
    },
    deleteOneProduct: (state,action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      
      if (existingItem){
        state.cartItems = state.cartItems.filter((item) => item.id !== deleteOneSpecificProduct.id);
      }
    },
    // dibawah code yang lebih efektif 
    // updateCartItem: (state, action) => {
    //   const { id, quantity } = action.payload;
    //   const existingItem = state.cartItems.find((item) => item.id === id);

    //   if (existingItem) {
    //     existingItem.quantity += quantity;
    //     if (existingItem.quantity < 1) {
    //       state.cartItems = state.cartItems.filter((item) => item.id !== id);
    //     }
    //   }
    // },
  },
});

export const { addItemToCart,addOneQuantity,deleteOneQuantity,deleteOneProduct } = cartSlice.actions;
export default cartSlice.reducer;


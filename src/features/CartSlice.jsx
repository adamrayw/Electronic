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
    addOneItem: (state,action) => {
      const addOneSpecificItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === addOneSpecificItem.id);
      
      if (existingItem){
        existingItem.quantity +=1;
      }
    },
    deleteOneItem: (state,action) => {
      const deleteOneSpecificItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === deleteOneSpecificItem.id);
      
      if (existingItem){
        existingItem.quantity -=1;
        if (existingItem.quantity < 1){
          state.cartItems = state.cartItems.filter((item) => item.id !== deleteOneSpecificItem.id);
        }
      }
    },
  },
});

export const { addItemToCart,addOneItem,deleteOneItem } = cartSlice.actions;
export default cartSlice.reducer;


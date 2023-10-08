// src/features/CartSlice.jsx
import { createSlice } from "@reduxjs/toolkit";
import items from "../data/Item";


const initialState ={
    products: items,
    amount: 0,
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState
})

export default cartSlice.reducer;
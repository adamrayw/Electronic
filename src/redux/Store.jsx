// src/redux/Store.jsx
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/CartSlice';
import searchReducer from '../features/searchSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});

export default store;

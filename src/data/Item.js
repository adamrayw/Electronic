// src/data/Item.js
import axios from 'axios';

const API_URL = 'http://localhost:2000';

export const allProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

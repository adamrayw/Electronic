// src/data/Item.js
import axios from 'axios';

const apiUrl = 'http://localhost:2000';
// Membuat instance axios dengan konfigurasi tertentu
export const apiService = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem('user')}`,
  },
});

export const allProducts = async () => {
  try {
    const response = await apiService.get(`/products`);
    return response;
  } catch (error) {
    throw error;
  }
};

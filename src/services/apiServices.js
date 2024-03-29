import axios from "axios";

const apiUrl = 'http://localhost:2000';
// Membuat instance axios dengan konfigurasi tertentu
const apiService = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem('user')}`,
  },
});


export const register = async (newUser) => {
  try {
    const response = await apiService.post("/register", newUser);
    return response;
  } catch (error) {
    console.error("Register Failed", error);
    throw error;
  }
};

export const login = async (user) => {
  try {
    const response = await apiService.post("/login", user);
    return response;
  } catch (error) {
    console.error("login Failed", error);
    throw error;
  }
};

export const handleLogout = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
};
export const forgotPassword = async (email) => {
  try {
    const response = await apiService.post("/forgot-password", email);
    return response;
  } catch (error) {
    console.error("Failed", error);
    throw error;
  }
};


export const checkToken = async (token) => {
  try {
    const response = await apiService.post("/check-token", { token });
    return response;
  } catch (error) {
    console.error("failed", error);
    throw error;
  }
};

export const updatePassword = async (token, password) => {
  try {
    const response = await apiService.post(`/update-password/${token}`, { password });
    return response;
  } catch (error) {
    console.error("failed", error);
    throw error;
  }
};

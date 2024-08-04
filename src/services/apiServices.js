import axios from "axios";

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

export const getProductCart = async () => {
  try {
    const response = await apiService.get(`/getcarts`);
    return response;
  } catch (error) {
    throw error;
  }
}

export const getDetailProduct = async (id) => {
  try {
    const response = await apiService.get(`/products/${id}`)
    return response
  } catch (error) {
    throw error;
  }
}

export const addOneCartProduct = async (data) => {
  try {
    const response = await apiService.post(`/addToCart`, data)
    return response
  } catch (error) {
    throw error;
  }
}

export const getOneCart = async () => {
  try {
    const response = await apiService.get(`/getcarts`)
    return response
  } catch (error) {
    throw error;
  }
}

export const incrementCartItemQuantity = async (id) => {
  try {
    const response = await apiService.patch(`/cart/increment/${id}`)
    return response
  } catch (error) {
    throw error;
  }
}

export const decrementCartItemQuantity = async (id) => {
  try {
    const response = await apiService.patch(`/cart/decrement/${id}`)
    return response;
  } catch (error) {
    throw error;
  }
}

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
  localStorage.removeItem("token");
  localStorage.removeItem("userid");
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

export const searchProduct = async (product) => {
  try {
    const response = await apiService.get(`/products/search?query=${encodeURIComponent(product)}`)
    console.log("res : " + response)
    return response
  } catch (error) {
    console.error('failed get searched product', error)
    throw error
  }
}
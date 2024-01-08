import axios from "axios";

const API_URL = 'http://localhost:2000';

export const register = async (newUser) => {
    try {
      const response = await axios.post(`${API_URL}/register`, newUser);
      return response;
    } catch (error) {
        console.error("Register Failed", error);
        throw error
   }
  };
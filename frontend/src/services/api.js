import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // Change to your API URL

// Sign Up API call
export const signUp = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

// Login API call
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

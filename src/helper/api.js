// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your API's base URL
  timeout: 10000, // Adjust the timeout as needed
});

const api = {
  get: async (endpoint) => {
    try {
      const response = await instance.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  post: async (endpoint, data) => {
    try {
      const response = await instance.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  put: async (endpoint, data) => {
    try {
      const response = await instance.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  delete: async (endpoint) => {
    try {
      const response = await instance.delete(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // Add more methods as needed
};

export default api;

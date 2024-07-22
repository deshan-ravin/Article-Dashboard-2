import axios from 'axios';

// Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', 
  timeout: 10000, //timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

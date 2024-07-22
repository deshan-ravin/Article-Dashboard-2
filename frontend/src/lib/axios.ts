import axios from 'axios';

// Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your API base URL
  timeout: 10000, //timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

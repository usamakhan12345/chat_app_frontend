import axios from 'axios'



export default axios.create({
  baseURL: 'https://api.example.com', // Base URL for API requests
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json', // Default content type for requests
    'Authorization': 'Bearer <your_access_token>' // Example authorization header
  }
});
import axios from "axios";

console.log("API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
});

export default api;

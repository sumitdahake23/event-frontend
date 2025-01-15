import axios from "axios";

const API_URL = "https://event-backend-5fv4.onrender.com" || "http://localhost:5000";

const api = axios.create({
  baseURL: `${API_URL}/api`,
});

export default api;
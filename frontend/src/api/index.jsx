import axios from "axios";

// Use REACT_APP_API_URL if provided (recommended for deployments),
// otherwise fall back to the development proxy '/api'.
const getBaseURL = () => {
  const env = process.env.REACT_APP_API_URL;
  if (env && env.length > 0) return `${env.replace(/\/$/, '')}/api`;
  return '/api';
}

const api = axios.create({
  baseURL: getBaseURL(),
});

export default api;

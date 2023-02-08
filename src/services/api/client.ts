import axios from "axios";
import { BASE_URL } from "../../constant/config";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const axiosAuthInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axiosAuthInstance.interceptors.request.use(
  (config) => {
    config.headers.authorization = "token";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

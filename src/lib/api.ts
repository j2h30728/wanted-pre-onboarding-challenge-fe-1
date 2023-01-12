import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import token from "./token";
const baseURL = import.meta.env.VITE_BASE_URL;

const config: AxiosRequestConfig = {
  baseURL: baseURL || "http://localhost:8080",
  headers: {
    ContentType: "application/json",
  },
};

export const api: AxiosInstance = axios.create(config);

api.interceptors.request.use(
  function (config) {
    const accesstoken = token.getToken("token");
    if (config.headers && token) {
      config.headers["Authorization"] = "login " + accesstoken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://localhost:8080",
  headers: {
    ContentType: "application/json",
  },
};

export const api: AxiosInstance = axios.create(config);

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (config.headers && token) {
      config.headers["Authorization"] = "login " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

import axios from "axios";

const baseURL = process.env.VUE_APP_URL ?? window.location.origin;

export const http = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: true,
});

export const api = axios.create({
  baseURL: `${baseURL}/api`,
  timeout: 5000,
  withCredentials: true,
});

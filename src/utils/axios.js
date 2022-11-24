import axios from "axios";

const baseURL = process.env.VUE_APP_URL ?? window.location.origin;

export const http = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: true,
});

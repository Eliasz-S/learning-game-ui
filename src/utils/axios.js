import axios from "axios";

export const http = axios.create({
  baseURL: `${process.env.VUE_APP_URL}`,
  timeout: 1000,
  withCredentials: true,
});

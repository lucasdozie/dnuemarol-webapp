import axios from "./axios"
import { getUserID } from "../redux/thunksetup/userService";
import * as authService from "./authservice";


axios.defaults.headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "x-nuema-customerId": getUserID(),

};

// axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    // const token = authService.getToken();
    const token = JSON.parse(localStorage.getItem("token"))
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export function getRequest(URL) {
  return axios.get(`/${URL}`).then((response) => response);
}

export function postRequest(URL, payload) {
  return axios.post(`${URL}`, payload).then((response) => response);
}

export function patchRequest(URL, payload) {
  return axios.patch(`${URL}`, payload).then((response) => response);
}

export function deleteRequest(URL) {
  return axios.delete(`${URL}`).then((response) => response);
}
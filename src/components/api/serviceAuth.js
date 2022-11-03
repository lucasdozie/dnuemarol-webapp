import axiosAuth from "./axiosAuth"
import { getUserID } from "../redux/thunksetup/userService";



axiosAuth.defaults.headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "x-nuema-customerId": getUserID(),

};

// axiosAuth.defaults.withCredentials = true;

export function getRequest(URL) {
  return axiosAuth.get(`/${URL}`).then((response) => response);
}

export function postRequest(URL, payload) {
  return axiosAuth.post(`/${URL}`, payload).then((response) => response);
}

export function patchRequest(URL, payload) {
  return axiosAuth.patch(`/${URL}`, payload).then((response) => response);
}

export function deleteRequest(URL) {
  return axiosAuth.delete(`/${URL}`).then((response) => response);
}
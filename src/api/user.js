import axios from "axios";
import { getUserID } from "../services/userService";
import authService from "../services/authService";

const API = process.env.REACT_APP_ADMIN + "/api/v1/admin";
const admin = axios.create({
  baseURL: API,
});

const customerId = getUserID();

admin.defaults.headers.post["Content-Type"] = "application/json";
admin.defaults.headers["Access-Control-Allow-Origin"] = "*";
admin.defaults.headers["x-nuema-customerId"] = customerId;

admin.interceptors.request.use(
  (config) => {
    const organizationId = authService.getOrg();
    config.params = config.params || {};
    config.params["organization"] = organizationId;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default admin;

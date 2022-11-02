import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
});

export default API;

//  export default API;

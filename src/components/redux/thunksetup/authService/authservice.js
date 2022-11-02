import axios from "axios";
import { getUserID } from "../userService";
import { postRequest } from "../../../api/serviceAuth";

// const API_URL = `${process.env.REACT_APP_ENDPOINT}` // for every use of API_URL there should be additional path

// const headers = {
//   "Content-Type": "application/json",
//   "Access-Control-Allow-Origin": "*",
//   "x-nuema-customerId": getUserID()
// }// a reusable headers

// Register user
const register = async (userData) => {
  const response = await postRequest(
    userData
    // {headers,}
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (logInData) => {
  console.log("Login is here... Service");
  // console.log(logInData)
  const response = await postRequest("user/login/email", logInData, {
    // headers,
  });
  if (response.data) {
    console.log("Logged in here. I guess...", response.data);
    localStorage.setItem("token", JSON.stringify(response.data.data.sessionAuth.accessToken))
    localStorage.setItem("user", JSON.stringify(response.data.data));
    
    localStorage.setItem(
      "refreshToken",
      JSON.stringify(response.data.data.sessionAuth.refreshToken)
    );
  }
  console.log(response.data);
  // console.log("OOps. Didn't log in...")
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;

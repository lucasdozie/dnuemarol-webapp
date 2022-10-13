import axios from 'axios'
import { getUserID } from '../userService'

const API_URL = `${process.env.REACT_APP_ENDPOINT}` // for every use of API_URL there should be additional path

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "x-nuema-customerId": getUserID()
}// a reusable headers

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData, {headers,})

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (logInData) => {
  console.log("Login is here... Service")
  console.log(logInData)
  const response = await axios.post(API_URL + 'user/login/email', logInData, {
    headers,
  })
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  console.log(response.data)
  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
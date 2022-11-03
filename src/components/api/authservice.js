import jwtDecode from 'jwt-decode'
// import { toast } from 'react-toastify'
// import history from '../customRoutes/history'

const TOKEN = 'token'
const ORG = 'org'
export const authChecker = () => {
  if (localStorage.getItem(TOKEN)) {
    return true
  }
  return false
}

export const setToken = (token) => {
  localStorage.setItem(TOKEN, token)
}

export const setOrg = (org) => {
  localStorage.setItem(ORG, org)
}

export const removeOrg = () => {
  return localStorage.removeItem(ORG)
}

export const getOrg = () => {
  return localStorage.getItem(ORG)
}

export const removeToken = () => {
  return localStorage.removeItem(TOKEN)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN)
}

export const unauthorized = async (err) => {
  if (!err.response) {
    removeToken()
    localStorage.setItem('logout', Date.now().toString())
    // history.push("/auth/login");
    // toast.error(err.message)
    return
  }
  const { status } = err.response
  if (status === 401) {
    removeToken()
    removeOrg()
    localStorage.setItem('logout', Date.now().toString())
    // history.push("/auth/login");
    // toast.error(err.response.data.message)
  }
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(TOKEN)
    if (jwt) {
      let decodedUser = jwtDecode(jwt)
      console.log({ userFromLocal: decodedUser })
      return decodedUser
    }
    signOut()
    return null
  } catch (ex) {
    return null
  }
}

export const isAuthorized = () => {
  const user = getCurrentUser()
  if (user?.role !== 'superAdmin') {
    return false
  }
  return true
}

export const signOut = () => {
  removeToken()
  localStorage.removeItem('user')
  // removeOrg();
//   history.push('/login')
}

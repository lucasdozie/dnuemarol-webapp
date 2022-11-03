import { configureStore } from '@reduxjs/toolkit'
import userSignup from './feautures/userSignup'
import bioData  from './feautures/bioform'
import authSlice from './thunksetup/authService/authSlice'
// import storeResumeData from './feautures/resform'


export const store = configureStore({
  reducer: {
    userSignup:userSignup,
    bio:bioData,
    auth: authSlice
    // resume:storeResumeData,
  },
})


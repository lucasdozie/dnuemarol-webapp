import { configureStore } from '@reduxjs/toolkit'
import userSignup from './feautures/userSignup'
import bioData  from './feautures/bioform'
// import storeResumeData from './feautures/resform'


export const store = configureStore({
  reducer: {
    userSignup:userSignup,
    bio:bioData,
    // resume:storeResumeData,
  },
})


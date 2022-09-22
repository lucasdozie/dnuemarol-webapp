import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tertiary: "",
    degree: "",
    course: "",
    skills: "",
    salary:"",
    file: "",
    experience:"",
    currentRole: ""
}

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
   storeResumeData: (state, action) => {
      state.tertiary = action.payload.tertiary
      state.degree = action.payload.degree
      state.course = action.payload.course
      state.skills = action.payload.skills
      state.file = action.payload.file
      state.experience = action.payload.experience
      state.salary = action.payload.salary
      state.currentRole = action.payload.currentRole
    },
  },
})

// Action creators are generated for each case reducer function
export const {storeResumeData} = resumeSlice.actions

export default resumeSlice.reducer
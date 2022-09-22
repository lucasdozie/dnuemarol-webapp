import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bio: {
    name: "",
  email: "",
  address: "",
  dob: "",
  phone: "",
  nation: "",
  },
  resume: {
    tertiary: "",
    degree: "",
    course: "",
    skills: "",
    salary:"",
    file: "",
    experience:"",
    currentRole: ""
  }
}

export const bioSlice = createSlice({
  name: 'bio',
  initialState,
  reducers: {
    addBioData: (state, action) => {
      state.bio.name = action.payload.name
      state.bio.email = action.payload.email
      state.bio.address = action.payload.address
      state.bio.dob = action.payload.dob
      state.bio.phone = action.payload.phone
      state.bio.nation = action.payload.nation

    },
    addResume: (state, action) => {
      state.resume.tertiary = action.payload.tertiary
      state.resume.degree = action.payload.degree
      state.resume.course = action.payload.course
      state.resume.skills = action.payload.skills
      state.resume.file = action.payload.file
      state.resume.experience = action.payload.experience
      state.resume.salary = action.payload.salary
      state.resume.currentRole = action.payload.currentRole
    }
  },
})

// Action creators are generated for each case reducer function
export const { addBioData, addResume } = bioSlice.actions

export default bioSlice.reducer
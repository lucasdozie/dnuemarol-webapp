import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    email: "",
    password: "",
}

export const userSignupSlice = createSlice({
  name: 'userSignup',
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.password = action.payload.password
    },
  },
})

// Action creators are generated for each case reducer function
export const { createUser } = userSignupSlice.actions

export default userSignupSlice.reducer
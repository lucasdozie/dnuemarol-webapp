import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

export const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    storeLogData: (state, action) => {
        console.log("Checking here dispatched")
      state.log.email = action.payload.email;
      state.log.password = action.payload.password;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeLogData } = logSlice.actions;

export default logSlice.reducer;

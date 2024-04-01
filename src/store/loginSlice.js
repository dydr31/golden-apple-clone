import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logInStatus: false,
  email: "",
  uid: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn(state, action) {
      state.logInStatus = true;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
  },
});

export const loginActions = loginSlice.actions

export default loginSlice
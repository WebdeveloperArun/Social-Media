import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
 name: "user",
 initialState: {
  userData: null,
  isLoggedIn: false,
 },
 reducers: {
  login: (state, action) => {
   state.isLoggedIn = true;
   state.userData = action.payload.userData;
  },
  logout: (state) => {
   state.isLoggedIn = false;
   state.userData = null;
  }
 },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

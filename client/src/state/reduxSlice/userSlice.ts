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
  },
  updateUserRedux: (state, action) => {
    state.userData = action.payload.userData
  }
 },
});

export const { login, logout, updateUserRedux } = userSlice.actions;

export default userSlice.reducer;

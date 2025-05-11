import {Post} from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
 name: "post",
 initialState: {
  postData: [],
 } as {postData:  Post[]},
 reducers: {
  addPostData: (state, action) => {
   state.postData = action.payload.postData;
  },
  addPost: (state, action) => {
    state.postData.push(action.payload)
  },
  removePost: (state, action) => {
    state.postData.filter((post) => post._id !== action.payload)
  },
 },
});

export const { addPostData, addPost } = postSlice.actions;

export default postSlice.reducer;

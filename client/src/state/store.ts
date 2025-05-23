import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reduxSlice/userSlice";
import postReducer from "./reduxSlice/postSlice";

export const store = configureStore({
 reducer: {userReducer, postReducer},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

import { combineReducers } from "@reduxjs/toolkit";
import posts from "./addPost";

const rootReducer = combineReducers({
  posts: posts,
});

export default rootReducer;

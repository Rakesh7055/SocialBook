import { combineReducers } from "@reduxjs/toolkit";
import { newPosts } from "./Post";
import { countryDetail } from "./country";

const rootReducer = combineReducers({
  posts: newPosts,
  countryData: countryDetail,
});

export default rootReducer;

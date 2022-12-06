import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/index";
// import {newPosts} from './reducer/Post'

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { createReducer, createAction } from "@reduxjs/toolkit";
import { post } from "../Cost";

export const addPost = createAction("NEWPOST");

const initializeState = {
  posts: post,
};

export const newPosts = createReducer(initializeState, (builder) => {
  builder.addCase(addPost, (state, action) => {
    state.posts = [...state.posts, action.payload];
  });
});

//FIRST METHOD
// const posts = (state = initializeState, action) => {
//   switch (action.type) {
//     case "NEWPOST":
//       return {
//         ...state,
//         posts: [...state.posts, action.payload],
//       };
//     default:
//       return state;
//   }
// };
// 6
// export default posts;

// //THIRD METHOD
// const hey = createSlice({
//   name: "User_post",
//   initializeState,
//   reducers: {},
//   posts: {
//     reducer: (state = initializeState, action) => {
//       state.posts = [...state.posts, action.payload];
//     },
//   },
// });

// export const { allPosts } = hey.actions;
// export default hey.reducer;

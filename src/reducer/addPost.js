import { post } from "../Cost";

const initializeState = {
  posts: post,
};

const posts = (state = initializeState, action) => {
  switch (action.type) {
    case "NEWPOST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};

export default posts;

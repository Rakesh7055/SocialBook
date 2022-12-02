export const addPost = (data) => {
  return {
    type: "NEWPOST",
    payload: data,
  };
};

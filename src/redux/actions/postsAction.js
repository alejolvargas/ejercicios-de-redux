export const FECTH_POSTS_REQUEST = "FECTH_POSTS_REQUEST";
export const FECTH_POSTS_SUCCESS = "FECTH_POSTS_SUCCESS";
export const FECTH_POSTS_ERROR = "FECTH_POSTS_ERROR";

export const fetchPosts = () => (dispatch) => {
  dispatch({ type: FECTH_POSTS_REQUEST });

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      dispatch({
        type: FECTH_POSTS_SUCCESS,
        payload: {
          posts,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: FECTH_POSTS_ERROR,
        error: error.toString(),
      });
    });
};

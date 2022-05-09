import {
  FECTH_POSTS_REQUEST,
  FECTH_POSTS_SUCCESS,
  FECTH_POSTS_ERROR,
} from "../actions/postsAction";

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

function posts(state = initialState, action) {
  switch (action.type) {
    case FECTH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case FECTH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload.posts,
      };

    case FECTH_POSTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}

export default posts;

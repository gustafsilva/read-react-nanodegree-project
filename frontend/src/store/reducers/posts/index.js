import {
  GET_POSTS,
} from 'store/actions/posts';

export const INIT_STATE = [];

const posts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        ...action.posts,
      };
    default:
      return state;
  }
}

export default posts;

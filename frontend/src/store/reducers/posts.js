import {
  GET_POSTS,
} from 'store/actions/posts';

const posts = (state = [], action) => {
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
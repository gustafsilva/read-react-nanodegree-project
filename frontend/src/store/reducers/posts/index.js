/* eslint-disable no-case-declarations */
import {
  GET_POSTS,
  VOTE_POST,
  REMOVE_POST,
  EDIT_POST,
  ADD_POST,
} from 'store/actions/posts';

export const INIT_STATE = [];

const posts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
    case VOTE_POST:
      const vote = action.option === 'upVote' ? 1 : -1;

      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            voteScore: post.voteScore + vote,
          };
        }
        return post;
      });
    case EDIT_POST:
      return state.map((currentPost) => {
        if (currentPost.id === action.post.id) {
          return action.post;
        }
        return currentPost;
      });
    case ADD_POST:
      return state.concat([action.post]);
    case REMOVE_POST:
      return state.filter(post => post.id !== action.id);
    default:
      return state;
  }
};

export default posts;

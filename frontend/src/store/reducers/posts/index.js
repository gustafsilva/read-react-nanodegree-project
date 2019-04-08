/* eslint-disable no-case-declarations */
import {
  GET_POSTS,
  VOTE_POST,
} from 'store/actions/posts';

export const INIT_STATE = [];

const posts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
    case VOTE_POST:
      const vote = action.option === 'upVote' ? 1 : -1;

      return state.map((post) => {
        if (post.id === action.post.id) {
          return {
            ...post,
            voteScore: post.voteScore + vote,
          };
        }
        return post;
      });
    default:
      return state;
  }
};

export default posts;

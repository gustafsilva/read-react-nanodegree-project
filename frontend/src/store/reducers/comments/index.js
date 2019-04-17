/* eslint-disable no-case-declarations */
import { GET_COMMENTS, VOTE_COMMENT } from '../../actions/comments';


export const INIT_STATE = [];

const comments = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments;
    case VOTE_COMMENT:
      const vote = action.option === 'upVote' ? 1 : -1;

      return state.map((comment) => {
        if (comment.id === action.id) {
          return {
            ...comment,
            voteScore: comment.voteScore + vote,
          };
        }
        return comment;
      });
    default:
      return state;
  }
};

export default comments;

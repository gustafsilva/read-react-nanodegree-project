import { showLoading, hideLoading } from 'react-redux-loading-bar';

import * as API from '../../../utils/api';

export const GET_COMMENTS = 'GET_COMMENTS';
export const VOTE_COMMENT = 'VOTE_COMMENT';

export const getComments = comments => ({ type: GET_COMMENTS, comments });

export const voteComment = (id, option) => ({ type: VOTE_COMMENT, id, option });

export const handleFetchComments = postId => (dispatch) => {
  dispatch(showLoading());

  return API.fetchCommentsFromPost(postId).then((response) => {
    dispatch(hideLoading());

    dispatch(getComments(response));
  });
};

export const handleVoteComment = (commentId, option) => (dispatch) => {
  dispatch(showLoading());

  return API.voteComment(commentId, option).then(() => {
    dispatch(hideLoading());

    dispatch(voteComment(commentId, option));
  });
};

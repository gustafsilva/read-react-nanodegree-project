import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { success, error } from 'react-notification-system-redux';

import * as API from '../../utils/api';
import { createNotificationSuccess, createNotificationError } from '../../utils/notifications';

export const GET_COMMENTS = 'GET_COMMENTS';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

export const getComments = comments => ({ type: GET_COMMENTS, comments });

export const voteComment = (id, option) => ({ type: VOTE_COMMENT, id, option });

export const addComment = comment => ({ type: ADD_COMMENT, comment });

export const removeComment = id => ({ type: REMOVE_COMMENT, id });

export const editComment = (id, body) => ({ type: EDIT_COMMENT, id, body });

export const handleFetchComments = postId => (dispatch) => {
  dispatch(showLoading());

  return API.fetchCommentsFromPost(postId).then((response) => {
    dispatch(hideLoading());

    if (response === null) {
      const notificationErrorOption = createNotificationError('Comments not loaded, check your internet connection or reload the page.');
      dispatch(error(notificationErrorOption));
    } else {
      dispatch(getComments(response));
    }
  });
};

export const handleVoteComment = (commentId, option) => (dispatch) => {
  dispatch(showLoading());

  return API.voteComment(commentId, option).then((response) => {
    dispatch(hideLoading());

    if (response === null) {
      const notificationErrorOption = createNotificationError('Vote not computed, check your internet connection or try again!');
      dispatch(error(notificationErrorOption));
    } else {
      dispatch(voteComment(commentId, option));

      const notificationSuccessOption = createNotificationSuccess('Vote computed successfully');
      dispatch(success(notificationSuccessOption));
    }
  });
};

export const handleEditComment = (commentId, body) => (dispatch) => {
  dispatch(showLoading());

  return API.editComment(commentId, body).then((response) => {
    dispatch(hideLoading());

    if (response === null) {
      const notificationErrorOption = createNotificationError('Error editing comment, please try again!');
      dispatch(error(notificationErrorOption));
    } else {
      dispatch(editComment(commentId, body));

      const notificationSuccessOption = createNotificationSuccess('Comment edited successfully!');
      dispatch(success(notificationSuccessOption));
    }
  });
};

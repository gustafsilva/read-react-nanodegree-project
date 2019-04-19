import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { success, error } from 'react-notification-system-redux';

import * as API from '../../utils/api';
import { createNotificationSuccess, createNotificationError } from '../../utils/notifications';

export const GET_POSTS = 'GET_POSTS';
export const VOTE_POST = 'VOTE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const EDIT_POST = 'EDIT_POST';
export const ADD_POST = 'ADD_POST';
export const INC_COMMENT_POST = 'INC_COMMENT_POST';

export const getPosts = posts => ({ type: GET_POSTS, posts });

export const votePost = (id, option) => ({ type: VOTE_POST, id, option });

export const removePost = id => ({ type: REMOVE_POST, id });

export const editPost = post => ({ type: EDIT_POST, post });

export const addPost = post => ({ type: ADD_POST, post });

export const incCommentPost = postId => ({ type: INC_COMMENT_POST, postId });

export const handleVotePost = (idPost, option) => (dispatch) => {
  dispatch(showLoading());

  return API.votePost(idPost, option).then((response) => {
    dispatch(hideLoading());

    if (response == null) {
      const notificationErrorOption = createNotificationError('Vote not computed, check your internet connection or try again!');
      dispatch(error(notificationErrorOption));
    } else {
      dispatch(votePost(idPost, option));

      const notificationSuccessOption = createNotificationSuccess('Vote computed successfully');
      dispatch(success(notificationSuccessOption));
    }
  });
};

export const handleRemovePost = idPost => (dispatch) => {
  dispatch(showLoading());

  return API.deletePost(idPost).then((response) => {
    dispatch(hideLoading());

    if (response === null) {
      const notificationErrorOption = createNotificationError('The post has not been removed, try again!');
      dispatch(error(notificationErrorOption));
    } else {
      dispatch(removePost(idPost));

      const notificationSuccessOption = createNotificationSuccess('The post was successfully removed!');
      dispatch(success(notificationSuccessOption));
    }
  });
};

export const handleEditPost = (id, title, body) => (dispatch) => {
  dispatch(showLoading());

  return API.editPost(id, title, body).then((response) => {
    dispatch(hideLoading());

    if (response == null) {
      const notificationErrorOption = createNotificationError('The post was not edited successfully, try again!');
      dispatch(error(notificationErrorOption));
    } else {
      dispatch(editPost(response));

      const notificationSuccessOption = createNotificationSuccess(`Post '${response.title}' edited successfully.`);
      dispatch(success(notificationSuccessOption));
    }
  });
};

export const handleSavePost = (title, body, category) => (dispatch, getState) => {
  dispatch(showLoading());
  const { user } = getState();

  return API.addPost(title, body, user, category).then((response) => {
    dispatch(hideLoading());

    if (response === null) {
      const notificationErrorOption = createNotificationError(`Post '${title}' was not successfully saved, try again!`);
      dispatch(error(notificationErrorOption));
    } else {
      dispatch(addPost(response));

      const notificationSuccessOption = createNotificationSuccess(`Post '${title}' saved successfully!`);
      dispatch(success(notificationSuccessOption));
    }
  });
};

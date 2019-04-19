import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { success, error } from 'react-notification-system-redux';

import * as API from '../../utils/api';
import { getCategories } from './categories';
import { getPosts, incCommentPost, decCommentPost } from './posts';
import { setUser } from './user';
import { addComment, removeComment } from './comments';
import { createNotificationError, createNotificationSuccess } from '../../utils/notifications';

const USER_ID = 'gustavofsilva';

const handleInitData = () => (dispatch) => {
  dispatch(showLoading());
  dispatch(setUser(USER_ID));

  const response = Promise.all([API.fetchCategories(), API.fetchPosts()])
    .then(([categories, posts]) => ({ categories, posts }));

  return response.then(({ categories, posts }) => {
    dispatch(hideLoading());

    if (categories === null || posts === null) {
      dispatch(handleInitData());
    } else {
      dispatch(getPosts(posts));
      dispatch(getCategories(categories));
    }
  });
};

export const handleAddComment = (body, postId) => (dispatch, getState) => {
  const { user } = getState();
  dispatch(showLoading());

  return API.addCommentToPost(body, user, postId).then((comment) => {
    dispatch(hideLoading());

    if (comment === null) {
      const notificationErrorOption = createNotificationError('Comment not added, try again!');
      dispatch(error(notificationErrorOption));
    } else {
      dispatch(addComment(comment));
      dispatch(incCommentPost(postId));

      const notificationSuccessOption = createNotificationSuccess(`Comment '${comment.body}' was succesfullyy added`);
      dispatch(success(notificationSuccessOption));
    }
  });
};

export const handleRemoveComment = commentId => (dispatch) => {
  dispatch(showLoading());

  return API.deleteComment(commentId).then((response) => {
    dispatch(hideLoading());

    if (response === null) {
      const notificationErrorOption = createNotificationError('Error deleting comment, please try again!');
      dispatch(error(notificationErrorOption));
    } else {
      dispatch(removeComment(commentId));
      dispatch(decCommentPost(response.parentId));

      const notificationSuccessOption = createNotificationSuccess('Comment deleted successfully!');
      dispatch(success(notificationSuccessOption));
    }
  });
};


export default handleInitData;

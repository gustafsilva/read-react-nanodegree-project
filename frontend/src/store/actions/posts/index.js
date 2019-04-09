import { showLoading, hideLoading } from 'react-redux-loading-bar';

import * as API from 'utils/api';

export const GET_POSTS = 'GET_POSTS';
export const VOTE_POST = 'VOTE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const getPosts = posts => ({
  type: GET_POSTS,
  posts,
});

export const votePost = (post, option) => ({
  type: VOTE_POST,
  post,
  option,
});

export const removePost = id => ({
  type: REMOVE_POST,
  id,
});

export const handleVotePost = (post, option) => (dispatch) => {
  dispatch(votePost(post, option));
  dispatch(showLoading());

  return API.votePost(post.id, option).then((response) => {
    dispatch(hideLoading());
  });
};

export const handleRemovePost = post => (dispatch) => {
  dispatch(showLoading());

  return API.deletePost(post.id).then((response) => {
    dispatch(hideLoading());

    if (response !== null) {
      dispatch(removePost(post.id));
    }
  });
};

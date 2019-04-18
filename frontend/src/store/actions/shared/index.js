import { hideLoading, showLoading } from 'react-redux-loading-bar';

import { fetchCategories, fetchPosts } from 'utils/api';
import { getCategories } from 'store/actions/categories';
import { getPosts } from 'store/actions/posts';
import { setUser } from 'store/actions/user';

const USER_ID = 'gustavofsilva';

const handleInitData = () => (dispatch) => {
  dispatch(showLoading());
  dispatch(setUser(USER_ID));

  const response = Promise.all([fetchCategories(), fetchPosts()])
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

export default handleInitData;

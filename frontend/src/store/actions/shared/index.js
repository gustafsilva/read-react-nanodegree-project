import { hideLoading, showLoading } from 'react-redux-loading-bar';

import { fetchCategories, fetchPosts } from 'utils/api';
import { getCategories } from 'store/actions/categories';
import { getPosts } from 'store/actions/posts';

const handleInitData = () => (dispatch) => {
  dispatch(showLoading());

  const response = Promise.all([fetchCategories(), fetchPosts()])
    .then(([categories, posts]) => ({ categories, posts }));

  return response.then(({ categories, posts }) => {
    if (categories === null || posts === null) {
      dispatch(handleInitData());
    } else {
      dispatch(getCategories(categories));
      dispatch(getPosts(posts));

      dispatch(hideLoading());
    }
  });
};

export default handleInitData;

import { fetchCategories, fetchPosts } from 'utils/api';
import { getCategories } from 'store/actions/categories';
import { getPosts } from 'store/actions/posts';

const handleInitData = () => (dispatch) => {
  const response = Promise.all([fetchCategories(), fetchPosts()])
    .then(([categories, posts]) => ({ categories, posts }));

  return response.then(({ categories, posts }) => {
    if (categories === null || posts === null) {
      dispatch(handleInitData());
    } else {
      dispatch(getCategories(categories));
      dispatch(getPosts(posts));
    }
  });
};

export default handleInitData;

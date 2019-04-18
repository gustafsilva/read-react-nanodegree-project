import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ListPosts from '../components/container/ListPosts';

const PostsByCategoryPage = ({ match }) => (
  <ListPosts
    categoryFilter={match.params.category}
    postLinked
  />
);

PostsByCategoryPage.propTypes = {
  /** Used to capture route GET arguments (URL). */
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(PostsByCategoryPage);

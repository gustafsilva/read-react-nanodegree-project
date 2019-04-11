import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ListPosts from 'components/container/ListPosts';

const PostsByCategoryPage = ({ match }) => <ListPosts category={match.params.category} />;

PostsByCategoryPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(PostsByCategoryPage);

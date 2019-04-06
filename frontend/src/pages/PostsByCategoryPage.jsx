import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const PostsByCategoryPage = ({ match }) => (
  <div>
    PostsByCategoryPage: {match.params.category}
  </div>
);

PostsByCategoryPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(PostsByCategoryPage);

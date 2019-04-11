import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import PostDetail from 'components/container/PostDetail';

const PostDetailPage = ({ match }) => (
  <div>
    <PostDetail id={match.params.post_id} />
  </div>
);
PostDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(PostDetailPage);

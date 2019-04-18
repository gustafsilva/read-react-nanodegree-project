import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import PostDetail from '../components/container/PostDetail';
import ListComments from '../components/container/ListComments';

const PostDetailPage = ({ match }) => (
  <div>
    <PostDetail id={match.params.post_id} />

    <ListComments postId={match.params.post_id} comments={[]} />
  </div>
);

PostDetailPage.propTypes = {
  /** Used to capture route GET arguments (URL). */
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(PostDetailPage);

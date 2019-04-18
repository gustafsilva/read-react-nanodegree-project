import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import PostDetail from '../components/container/PostDetail';
import ListComments from '../components/container/ListComments';

const PostDetailPage = ({ match, posts }) => {
  const postSought = posts.filter(post => post.id === match.params.post_id);
  if (postSought.length <= 0) {
    return <Typography variant="overline">Post not found.</Typography>;
  }

  return (
    <div>
      <PostDetail id={match.params.post_id} />

      <ListComments postId={match.params.post_id} comments={[]} />
    </div>
  );
}

PostDetailPage.propTypes = {
  /** Used to capture route GET arguments (URL). */
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ posts }) => ({
  posts,
});

export default withRouter(connect(mapStateToProps)(PostDetailPage));

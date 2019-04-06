import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const PostDetailPage = ({ match }) => (
  <div>
    <h3>Post Detail</h3>
    <p>Post: {match.params.post_id}</p>
    <p>Category: {match.params.category}</p>
  </div>
);

PostDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(PostDetailPage);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import CommentThumbnail from '../CommentThumbnail';
import { handleFetchComments } from '../../../store/actions/comments';

class ListComments extends Component {
  componentDidMount() {
    const { dispatch, postId } = this.props;
    dispatch(handleFetchComments(postId));
  }

  render() {
    const { comments } = this.props;

    return (
      <div>
        <Typography variant="h3" style={{ margin: 5 }}>Comments</Typography>

        {comments.map(comment => (
          <CommentThumbnail
            key={comment.id}
            id={comment.id}
          />
        ))}
      </div>
    );
  }
}

ListComments.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ comments }) => ({
  comments,
});

export default connect(mapStateToProps)(ListComments);

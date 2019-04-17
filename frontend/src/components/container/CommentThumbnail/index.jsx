import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumbnail from '../../presentational/Thumbnail';
import ContentCommentThumbnail from '../../presentational/ContentCommentThumbail';
import { handleVoteComment } from '../../../store/actions/comments';

class CommentThumbnail extends Component {
  handleVote = (option) => {
    const { dispatch, id } = this.props;

    dispatch(handleVoteComment(id, option));
  };

  render() {
    const {
      author,
      body,
      voteScore,
    } = this.props;


    return (
      <Thumbnail>
        <ContentCommentThumbnail
          author={author}
          body={body}
          voteScore={voteScore}
          handleVoteUp={() => { this.handleVote('upVote'); }}
          handleVoteDown={() => { this.handleVote('downVote'); }}
        />
      </Thumbnail>
    );
  }
}

CommentThumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ comments }, { id }) => {
  const comment = comments.find(commentCurrent => commentCurrent.id === id );

  return {
    ...comment,
  };
};

export default connect(mapStateToProps)(CommentThumbnail);

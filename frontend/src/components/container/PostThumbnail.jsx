import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleVotePost } from 'store/actions/posts';
import Thumbnail from 'components/presentational/Thumbnail';
import HeaderPostThumbnail from 'components/presentational/HeaderPostThumbnail';
import ActionsPostThumbnail from 'components/presentational/ActionsPostThumbnail';

class PostThumbnail extends Component {
  handleVote = (option) => {
    const { dispatch, post } = this.props;

    dispatch(handleVotePost(post, option));
  }


  render() {
    const { post } = this.props;
    const {
      title,
      author,
      body,
      commentCount,
      voteScore,
    } = post;

    return (
      <Thumbnail>
        <HeaderPostThumbnail
          title={title}
          author={author}
          body={body}
        />
        <ActionsPostThumbnail
          commentCount={commentCount}
          voteScore={voteScore}
          handleVote={this.handleVote}
        />
      </Thumbnail>
    );
  }
}

PostThumbnail.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts }, { id }) => ({
  post: posts.find(post => post.id === id),
});

export default connect(mapStateToProps)(PostThumbnail);

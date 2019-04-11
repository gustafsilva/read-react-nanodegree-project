import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleVotePost, handleRemovePost } from 'store/actions/posts';
import Thumbnail from 'components/presentational/Thumbnail';
import HeaderPostThumbnail from 'components/presentational/HeaderPostThumbnail';
import ActionsPostThumbnail from 'components/presentational/ActionsPostThumbnail';
import DialogRemovePostThumbnail from 'components/presentational/DialogRemovePostThumbnail';

class PostThumbnail extends Component {
  state = {
    openDialogRemove: false,
  }

  handleVote = (option) => {
    const { dispatch, post } = this.props;

    dispatch(handleVotePost(post, option));
  }

  handleOpenDialogRemove = () => { this.setState({ openDialogRemove: true }); };

  handleCloseDialogRemove = () => { this.setState({ openDialogRemove: false }); }

  handleClickRemovePost = () => {
    const { dispatch, post } = this.props;

    dispatch(handleRemovePost(post));
    this.handleCloseDialogRemove();
  };

  render() {
    const { openDialogRemove } = this.state;
    const { post, width, handleOpenDialogEdit } = this.props;

    if (post === null) {
      return false;
    }

    return (
      <Thumbnail width={width}>
        <HeaderPostThumbnail
          title={post.title}
          author={post.author}
          body={post.body}
          handleOpenDialogRemove={this.handleOpenDialogRemove}
          handleOpenDialogEdit={() => { handleOpenDialogEdit(post.id); }}
        />
        <ActionsPostThumbnail
          commentCount={post.commentCount}
          voteScore={post.voteScore}
          handleVote={this.handleVote}
        />
        <DialogRemovePostThumbnail
          open={openDialogRemove}
          titlePost={post.title}
          handleCloseDialogRemove={this.handleCloseDialogRemove}
          handleRemovePost={this.handleClickRemovePost}
        />
      </Thumbnail>
    );
  }
}

PostThumbnail.defaultProps = {
  post: null,
  width: null,
};

PostThumbnail.propTypes = {
  post: PropTypes.objectOf(PropTypes.any),
  dispatch: PropTypes.func.isRequired,
  handleOpenDialogEdit: PropTypes.func.isRequired,
  width: PropTypes.number,
};

const mapStateToProps = ({ posts }, { id }) => ({
  post: posts.find(post => post.id === id),
});

export default connect(mapStateToProps)(PostThumbnail);

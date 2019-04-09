import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleVotePost } from 'store/actions/posts';
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

  handleOpenDialogRemove = () => {
    this.setState({ openDialogRemove: true });
  }

  handleCloseDialogRemove = () => {
    this.setState({ openDialogRemove: false });
  }

  handleRemovePost = () => {
    const { post } = this.props;
    this.handleCloseDialogRemove();
    console.log('excluindo post com id: ', post.id);
  };

  render() {
    const { openDialogRemove } = this.state;
    const { post } = this.props;

    return (
      <Thumbnail>
        <HeaderPostThumbnail
          title={post.title}
          author={post.author}
          body={post.body}
          handleOpenDialogRemove={this.handleOpenDialogRemove}
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
          handleRemovePost={this.handleRemovePost}
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

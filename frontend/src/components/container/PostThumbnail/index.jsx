import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleVotePost, handleRemovePost } from '../../../store/actions/posts';
import Thumbnail from '../../presentational/Thumbnail';
import HeaderPostThumbnail from '../../presentational/HeaderPostThumbnail';
import ActionsPostThumbnail from '../../presentational/ActionsPostThumbnail';
import DialogRemovePostThumbnail from '../../presentational/DialogRemovePostThumbnail';

class PostThumbnail extends Component {
  state = {
    /** Flag that indicates whether dialog to remove the post is open. */
    dialogIsOpenToRemoveThePost: false,
  };

  handleVote = (option) => {
    const { dispatch, id } = this.props;

    dispatch(handleVotePost(id, option));
  };

  handleOpenDialogRemove = () => { this.setState({ dialogIsOpenToRemoveThePost: true }); };

  handleCloseDialogRemove = () => { this.setState({ dialogIsOpenToRemoveThePost: false }); }

  handleClickRemovePost = () => {
    const { dispatch, id } = this.props;

    dispatch(handleRemovePost(id));
    this.handleCloseDialogRemove();
  };

  render() {
    const { dialogIsOpenToRemoveThePost } = this.state;
    const {
      id,
      title,
      author,
      body,
      commentCount,
      voteScore,
      width,
      handleOpenDialogEdit,
    } = this.props;

    return (
      <Thumbnail width={width}>
        <HeaderPostThumbnail
          title={title}
          author={author}
          body={body}
          openDialogToRemovePost={this.handleOpenDialogRemove}
          openDialogToEditPost={() => { handleOpenDialogEdit(id); }}
        />
        <ActionsPostThumbnail
          commentCount={commentCount}
          voteScore={voteScore}
          handleVote={this.handleVote}
        />
        <DialogRemovePostThumbnail
          isOpen={dialogIsOpenToRemoveThePost}
          titlePost={title}
          handleClose={this.handleCloseDialogRemove}
          handleRemovePost={this.handleClickRemovePost}
        />
      </Thumbnail>
    );
  }
}

PostThumbnail.defaultProps = {
  width: null,
};

PostThumbnail.propTypes = {
  /** ID linked to post. */
  id: PropTypes.string.isRequired,
  /** Current post title. */
  title: PropTypes.string.isRequired,
  /** Current post body. */
  body: PropTypes.string.isRequired,
  /** Current post author. */
  author: PropTypes.string.isRequired,
  /** Number of current comments. */
  commentCount: PropTypes.number.isRequired,
  /** Number of current votes. */
  voteScore: PropTypes.number.isRequired,
  /** Function responsible for dispatching action for redux. */
  dispatch: PropTypes.func.isRequired,
  /** Function responsible for opening dialog for editing the post. */
  handleOpenDialogEdit: PropTypes.func.isRequired,
  /** Horizontal thumbnail size. */
  width: PropTypes.number,
};

const mapStateToProps = ({ posts }, { id }) => {
  const post = posts.find(currentPost => currentPost.id === id);

  return { ...post };
};

export default connect(mapStateToProps)(PostThumbnail);

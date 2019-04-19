import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography, Grid, IconButton } from '@material-ui/core';
import AddCommentIcon from '@material-ui/icons/AddComment';

import CommentThumbnail from './CommentThumbnail';
import NewCommentDialog from './NewCommentDialog';
import DialogRemoveComment from '../presentational/DialogRemoveComment';
import EditCommentDialog from './EditCommentDialog';
import { handleFetchComments } from '../../store/actions/comments';
import { handleRemoveComment } from '../../store/actions/shared';

class ListComments extends Component {
  state = {
    isOpenNewCommentDialog: false,
    commentEdit: null,
    commentRemove: null,
  };

  componentDidMount() {
    const { dispatch, postId } = this.props;
    dispatch(handleFetchComments(postId));
  }

  handleNewCommentDialogOpen = () => { this.setState({ isOpenNewCommentDialog: true }); };

  handleNewCommentDialogClose = () => { this.setState({ isOpenNewCommentDialog: false }); };

  handleEditCommentDialogOpen = (commentId) => { this.setState({ commentEdit: commentId }); };

  handleEditCommentDialogClose = () => { this.setState({ commentEdit: null }); };

  handleRemoveCommentDialogOpen = (commentId) => { this.setState({ commentRemove: commentId }); };

  handleRemoveCommentDialogClose = () => { this.setState({ commentRemove: null }); };

  removeComment = () => {
    const { dispatch } = this.props;
    const { commentRemove } = this.state;
    dispatch(handleRemoveComment(commentRemove));

    this.handleRemoveCommentDialogClose();
  };

  render() {
    const { isOpenNewCommentDialog, commentRemove, commentEdit } = this.state;
    const { comments, postId } = this.props;

    return (
      <div>
        <Grid
          container
          direction="row"
          justify="space-between"
        >
          <Typography variant="h3" style={{ margin: 5 }}>Comments</Typography>
          <IconButton color="primary" onClick={this.handleNewCommentDialogOpen}><AddCommentIcon /></IconButton>
        </Grid>

        {comments.map(comment => (
          <CommentThumbnail
            key={comment.id}
            id={comment.id}
            handleEditCommentDialogOpen={this.handleEditCommentDialogOpen}
            handleRemoveCommentDialogOpen={this.handleRemoveCommentDialogOpen}
          />
        ))}

        {comments.length <= 0 && (
          <Typography variant="overline">Post without comments.</Typography>
        )}

        <NewCommentDialog
          postId={postId}
          open={isOpenNewCommentDialog}
          handleClose={this.handleNewCommentDialogClose}
        />

        <DialogRemoveComment
          isOpen={commentRemove !== null}
          handleClose={this.handleRemoveCommentDialogClose}
          handleRemoveComment={this.removeComment}
        />

        {commentEdit !== null && (
          <EditCommentDialog
            id={commentEdit}
            isOpenDialog={commentEdit !== null}
            handleCloseDialog={this.handleEditCommentDialogClose}
          />
        )}
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography, Grid, IconButton } from '@material-ui/core';
import AddCommentIcon from '@material-ui/icons/AddComment';

import CommentThumbnail from './CommentThumbnail';
import NewCommentDialog from './NewCommentDialog';
import { handleFetchComments } from '../../store/actions/comments';

class ListComments extends Component {
  state = {
    isOpenNewCommentDialog: false,
  };

  componentDidMount() {
    const { dispatch, postId } = this.props;
    dispatch(handleFetchComments(postId));
  }

  handleNewCommentDialogOpen = () => { this.setState({ isOpenNewCommentDialog: true }); };

  handleNewCommentDialogClose = () => { this.setState({ isOpenNewCommentDialog: false }); };

  render() {
    const { isOpenNewCommentDialog } = this.state;
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
          />
        ))}

        <NewCommentDialog
          postId={postId}
          open={isOpenNewCommentDialog}
          handleClose={this.handleNewCommentDialogClose}
        />
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

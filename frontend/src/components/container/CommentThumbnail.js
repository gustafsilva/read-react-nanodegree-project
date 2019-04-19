import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  CardActions,
  IconButton,
  Grid,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

import Thumbnail from '../presentational/Thumbnail';
import ContentCommentThumbnail from '../presentational/ContentCommentThumbail';
import { handleVoteComment } from '../../store/actions/comments';

class CommentThumbnail extends Component {
  handleVote = (option) => {
    const { dispatch, id } = this.props;

    dispatch(handleVoteComment(id, option));
  };

  render() {
    const {
      id,
      author,
      body,
      voteScore,
      handleEditCommentDialogOpen,
      handleRemoveCommentDialogOpen,
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

        <CardActions disableActionSpacing>
          <Grid container direction="row-reverse" justify="flex-start">
            <IconButton
              aria-label="Delete Comment"
              onClick={() => { handleRemoveCommentDialogOpen(id); }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="Edit Comment"
              onClick={() => { handleEditCommentDialogOpen(id); }}
            >
              <EditIcon />
            </IconButton>
          </Grid>
        </CardActions>
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
  handleEditCommentDialogOpen: PropTypes.func.isRequired,
  handleRemoveCommentDialogOpen: PropTypes.func.isRequired,
};

const mapStateToProps = ({ comments }, { id }) => {
  const comment = comments.find(commentCurrent => commentCurrent.id === id);

  return {
    ...comment,
  };
};

export default connect(mapStateToProps)(CommentThumbnail);

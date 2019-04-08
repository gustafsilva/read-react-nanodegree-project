import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Grid,
  CardActions,
  IconButton,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import UpIcon from '@material-ui/icons/ThumbUp';
import DownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';

const styles = {
  actions: {
    display: 'flex',
  },
  colorRed: {
    color: 'red',
  },
  lenComment: {
    color: 'blue',
  },
};

const ActionsPostThumbnail = (props) => {
  const {
    classes,
    commentCount,
    voteScore,
    handleVote,
  } = props;


  return (
    <CardActions className={classes.actions} disableActionSpacing>
      <IconButton aria-label="Vote Up" onClick={() => { handleVote('upVote'); }}>
        <UpIcon />
      </IconButton>
      <IconButton aria-label="Vote Down" onClick={() => { handleVote('downVote'); }}>
        <DownIcon />
      </IconButton>

      <Grid container direction="row-reverse" justify="flex-start">
        <IconButton
          aria-label="Vote Score"
          color="secondary"
          disabled
        >
          <FavoriteIcon className={classes.colorRed} />
          <Typography variant="caption">{voteScore}</Typography>
        </IconButton>
        <IconButton
          aria-label="Vote Score"
          color="secondary"
          disabled
        >
          <CommentIcon className={classes.lenComment} />
          <Typography variant="caption">{commentCount}</Typography>
        </IconButton>
      </Grid>
    </CardActions>
  );
};

ActionsPostThumbnail.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  commentCount: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  handleVote: PropTypes.func.isRequired,
};

export default withStyles(styles)(ActionsPostThumbnail);

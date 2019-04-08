import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UpIcon from '@material-ui/icons/ThumbUp';
import DownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';

const styles = {
  card: {
    maxWidth: 350,
    marginTop: 20,
    marginLeft: 10,
  },
  body: {
    minHeight: 45,
  },
  actions: {
    display: 'flex',
  },
  voteUp: {
    color: 'green',
  },
  voteDown: {
    color: 'red',
  },
  voteScore: {
    color: 'red',
  },
  lenComment: {
    color: 'blue',
  },
};

const PostThumbnail = (props) => {
  const {
    classes,
    title,
    author,
    body,
    commentCount,
    voteScore,
  } = props;

  return (
    <Card className={classes.card} md={3} xs={12}>
      <CardHeader
        title={title}
        subheader={`@${author}`}
        action={<IconButton><MoreVertIcon /></IconButton>}
      />
      <CardContent>
        <Typography component="p" className={classes.body}>
          {body}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Vote Up">
          <UpIcon className={classes.voteUp} />
        </IconButton>
        <IconButton aria-label="Vote Down">
          <DownIcon className={classes.voteDown} />
        </IconButton>

        <Grid container direction="row-reverse" justify="flex-start">
          <IconButton
            aria-label="Vote Score"
            color="secondary"
            disabled
          >
            <FavoriteIcon className={classes.voteScore} />
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
    </Card>
  );
};

PostThumbnail.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
};

export default withStyles(styles)(PostThumbnail);

import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
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
  expand: {
    marginLeft: 'auto',
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
        <IconButton aria-label="Add to favorites">
          <UpIcon />
        </IconButton>
        <IconButton aria-label="Add to favorites">
          <DownIcon />
        </IconButton>

        <IconButton
          className={classes.expand}
          aria-label="Show more"
        >
          <FavoriteIcon />
          <Typography>{voteScore}</Typography>
        </IconButton>
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

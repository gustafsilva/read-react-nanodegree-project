import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  CardHeader,
  IconButton,
  Typography,
} from '@material-ui/core';
import UpIcon from '@material-ui/icons/ThumbUp';
import DownIcon from '@material-ui/icons/ThumbDown';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ContentCommentThumbnail = (props) => {
  const {
    author,
    body,
    voteScore,
    handleVoteUp,
    handleVoteDown,
  } = props;

  const buttons = (
    <Fragment>
      <IconButton onClick={handleVoteUp}><UpIcon /></IconButton>
      <IconButton onClick={handleVoteDown}><DownIcon /></IconButton>
      <IconButton disabled>
        <FavoriteIcon style={{ color: 'red' }} />
        <Typography variant="caption">{voteScore}</Typography>
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <CardHeader
        title={body}
        subheader={`@${author}`}
        action={buttons}
      />
    </Fragment>
  );
};

ContentCommentThumbnail.propTypes = {
  /** Styles the components you ure to render. (material-ui). */
  // classes: PropTypes.objectOf(PropTypes.string).isRequired,
  /** Author of the post. */
  author: PropTypes.string.isRequired,
  /** Body of the post. */
  body: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  handleVoteUp: PropTypes.func.isRequired,
  handleVoteDown: PropTypes.func.isRequired,
};

export default ContentCommentThumbnail;

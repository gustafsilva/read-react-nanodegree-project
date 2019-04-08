import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = {
  body: {
    minHeight: 45,
  },
};

const HeaderPostThumbnail = (props) => {
  const {
    classes,
    title,
    author,
    body,
  } = props;

  return (
    <Fragment>
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
    </Fragment>
  );
};

HeaderPostThumbnail.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default withStyles(styles)(HeaderPostThumbnail);

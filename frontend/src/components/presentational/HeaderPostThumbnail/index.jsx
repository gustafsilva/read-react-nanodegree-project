import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';


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
    openDialogToRemovePost,
    openDialogToEditPost,
  } = props;

  const buttons = (
    <Fragment>
      <IconButton onClick={() => { openDialogToEditPost(); }}><EditIcon /></IconButton>
      <IconButton onClick={() => { openDialogToRemovePost(); }}><DeleteIcon /></IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <CardHeader
        title={title}
        subheader={`@${author}`}
        action={buttons}
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
  /** Styles the components you ure to render. (material-ui). */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  /** Title of the post. */
  title: PropTypes.string.isRequired,
  /** Author of the post. */
  author: PropTypes.string.isRequired,
  /** Body of the post. */
  body: PropTypes.string.isRequired,
  /** Function responsible for opening dialog box to remove post. */
  openDialogToRemovePost: PropTypes.func.isRequired,
  /** Function responsible for opening dialog box to edit post. */
  openDialogToEditPost: PropTypes.func.isRequired,
};

export default withStyles(styles)(HeaderPostThumbnail);

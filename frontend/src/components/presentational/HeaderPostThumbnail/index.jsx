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
    handleOpenDialogRemove,
    handleOpenDialogEdit,
  } = props;

  const buttons = (
    <Fragment>
      <IconButton onClick={() => { handleOpenDialogEdit(); }}><EditIcon /></IconButton>
      <IconButton onClick={() => { handleOpenDialogRemove(); }}><DeleteIcon /></IconButton>
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
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleOpenDialogRemove: PropTypes.func.isRequired,
  handleOpenDialogEdit: PropTypes.func.isRequired,
};

export default withStyles(styles)(HeaderPostThumbnail);

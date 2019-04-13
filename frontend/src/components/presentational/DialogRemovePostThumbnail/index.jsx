import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import Transition from '../../hocs/Transition';

const DialogRemovePostThumbnail = (props) => {
  const {
    isOpen,
    titlePost,
    handleClose,
    handleRemovePost,
  } = props;

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {'Do you want to remove the post yourself?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {`Attention you will remove the post '${titlePost}'.`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleRemovePost} color="secondary">
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DialogRemovePostThumbnail.defaultProps = {
  isOpen: false,
};

DialogRemovePostThumbnail.propTypes = {
  /** Flag that indicates whether dialog is open. */
  isOpen: PropTypes.bool,
  /** Current title of the post to be deleted. */
  titlePost: PropTypes.string.isRequired,
  /** Function responsible for closing dialog. */
  handleClose: PropTypes.func.isRequired,
  /** Function responsible for deleting a post. */
  handleRemovePost: PropTypes.func.isRequired,
};

export default DialogRemovePostThumbnail;

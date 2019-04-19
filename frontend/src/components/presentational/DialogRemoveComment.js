import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from '@material-ui/core';

import Transition from '../hocs/Transition';

const DialogRemoveCommentThumbnail = (props) => {
  const {
    isOpen,
    handleClose,
    handleRemoveComment,
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
        {'Do you want to remove the comment yourself?'}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleRemoveComment} color="secondary">
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DialogRemoveCommentThumbnail.defaultProps = {
  isOpen: false,
};

DialogRemoveCommentThumbnail.propTypes = {
  /** Flag that indicates whether dialog is open. */
  isOpen: PropTypes.bool,
  /** Function responsible for closing dialog. */
  handleClose: PropTypes.func.isRequired,
  /** Function responsible for deleting a comment. */
  handleRemoveComment: PropTypes.func.isRequired,
};

export default DialogRemoveCommentThumbnail;

import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Transition from 'components/hocs/Transition';

const DialogRemovePostThumbnail = (props) => {
  const {
    open,
    titlePost,
    handleCloseDialogRemove,
    handleRemovePost,
  } = props;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseDialogRemove}
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
        <Button onClick={handleCloseDialogRemove} color="primary">
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
  open: false,
};

DialogRemovePostThumbnail.propTypes = {
  open: PropTypes.bool,
  titlePost: PropTypes.string.isRequired,
  handleCloseDialogRemove: PropTypes.func.isRequired,
  handleRemovePost: PropTypes.func.isRequired,
};

export default DialogRemovePostThumbnail;

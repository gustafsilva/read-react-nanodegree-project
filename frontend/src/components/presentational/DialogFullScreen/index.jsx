import React from 'react';
import PropTypes from 'prop-types';

import {
  withStyles,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Transition from '../../hocs/Transition';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

const DialogFullScreen = (props) => {
  const {
    classes,
    isOpen,
    title,
    handleClose,
    handleDone,
    children,
    endButtonTitle,
  } = props;

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={handleClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          <Button color="inherit" onClick={handleDone}>
            {endButtonTitle}
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  );
};

DialogFullScreen.defaultProps = {
  isOpen: false,
  endButtonTitle: 'Save',
};

DialogFullScreen.propTypes = {
  /** Styles the components you ure to render. (material-ui). */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  /** Full title of the dialog box. */
  title: PropTypes.string.isRequired,
  /** Flag that indicates whether dialog is open. */
  isOpen: PropTypes.bool, // todo: mudar nome da flag.
  /** Component that will be rendered in the dialog body. */
  children: PropTypes.node.isRequired,
  /** Title of button responsible for finalizing the dialog. */
  endButtonTitle: PropTypes.string,
  /** Function responsible for closing dialog. */
  handleClose: PropTypes.func.isRequired,
  /** Function responsible for finalizing dialog. */
  handleDone: PropTypes.func.isRequired, // todo: mudar nome da função.
};

export default withStyles(styles)(DialogFullScreen);

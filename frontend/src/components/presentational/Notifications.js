import React from 'react';
import PropTypes from 'prop-types';
import NotificationsSystem from 'react-notification-system-redux';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    backgroudColor: 'black',
  },
};

const Notifications = ({ classes, notifications }) => (
  <NotificationsSystem
    notifications={notifications}
    className={classes.root}
  />
);

Notifications.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Notifications);

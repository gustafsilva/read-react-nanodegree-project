import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
} from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 350,
    marginTop: 20,
    marginLeft: 10,
  },
};

const Thumbnail = (props) => {
  const {
    classes,
    children,
  } = props;

  return (
    <Card className={classes.card} md={3} xs={12}>
      {children}
    </Card>
  );
};

Thumbnail.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Thumbnail);

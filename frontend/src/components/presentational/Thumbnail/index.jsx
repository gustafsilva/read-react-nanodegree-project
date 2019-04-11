import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
} from '@material-ui/core';

const styles = {
  card: {
    marginTop: 20,
    marginLeft: 10,
  },
};

const Thumbnail = (props) => {
  const {
    classes,
    children,
    lengthMd,
    width,
  } = props;
  return (
    <div style={width !== null ? { width } : {}}>
      <Card className={classes.card} md={lengthMd} xs={12}>
        {children}
      </Card>
    </div>
  );
};

Thumbnail.defaultProps = {
  lengthMd: 3,
  width: null,
};

Thumbnail.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  lengthMd: PropTypes.number,
  width: PropTypes.number,
};

export default withStyles(styles)(Thumbnail);

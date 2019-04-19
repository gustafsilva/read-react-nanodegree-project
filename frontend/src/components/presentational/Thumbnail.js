import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card } from '@material-ui/core';

const styles = {
  root: {
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
    <Card
      className={classes.root}
      style={width !== null ? { width } : {}}
      md={lengthMd}
      xs={12}
    >
      {children}
    </Card>
  );
};

Thumbnail.defaultProps = {
  lengthMd: 3,
  width: null,
};

Thumbnail.propTypes = {
  /** Styles the components you ure to render. (material-ui). */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  /** Content to render. */
  children: PropTypes.node.isRequired,
  /** Column size for medium-sized devices (md). */
  lengthMd: PropTypes.number,
  /** Fixed horizontal size in pixel for thumbnail. */
  width: PropTypes.number,
};

export default withStyles(styles)(Thumbnail);

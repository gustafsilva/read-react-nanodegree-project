import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: 'auto',
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
});

const Content = ({ classes, children }) => (
  <Grid className={classes.root}>
    {children}
  </Grid>
);

Content.defaultProps = {
  children: false,
};

Content.propTypes = {
  /** Styles the components you ure to render. (material-ui). */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  /** Content to render. */
  children: PropTypes.node,
};

export default withStyles(styles)(Content);

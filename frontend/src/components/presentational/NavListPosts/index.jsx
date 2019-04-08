import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
} from '@material-ui/core';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

const NavListPost = (props) => {
  const {
    classes,
    title,
    filter,
    handleChangeFilter,
  } = props;

  return (
    <Grid container>
      <Grid item xs={6} md={8}>
        <Typography variant="h3">{title}</Typography>
      </Grid>

      <Grid item xs={6} md={4}>
        <Grid container direction="row" justify="flex-end">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="filterPosts">
              Filter
            </InputLabel>
            <Select
              native
              value={filter}
              onChange={handleChangeFilter}
              input={<OutlinedInput name="filterPosts" labelWidth={120} id="filterPosts" />}
            >
              <option value="votes">Votes</option>
              <option value="date">Date</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

NavListPost.defaultProps = {
  title: 'Posts',
};

NavListPost.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  filter: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavListPost);

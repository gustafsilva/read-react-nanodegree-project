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
    filterOrd,
    handleChangeFilterOrd,
  } = props;

  return (
    <Grid container>
      <Grid item xs={3} md={9}>
        <Typography variant="h3">{title}</Typography>
      </Grid>

      <Grid item xs={9} md={3}>
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
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="filterPosts">
              Order
            </InputLabel>
            <Select
              native
              value={filterOrd}
              onChange={handleChangeFilterOrd}
              input={<OutlinedInput name="filterOrd" labelWidth={120} id="filterOrd" />}
            >
              <option value="asc">ASC</option>
              <option value="desc">DESC</option>
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
  /** Styles the components you ure to render. (material-ui). */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  /** Navigation bar title. */
  title: PropTypes.string,
  /** Current filter for posts. */
  filter: PropTypes.string.isRequired,
  /** Function responsible for changing the filter of posts. */
  handleChangeFilter: PropTypes.func.isRequired,
  filterOrd: PropTypes.string.isRequired,
  handleChangeFilterOrd: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavListPost);

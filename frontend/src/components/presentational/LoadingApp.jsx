import React from 'react';
import { Grid } from '@material-ui/core';
import LoadingSpin from 'react-loading-spin';

const LoadingApp = () => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >
    <LoadingSpin primaryColor="#3794AD" />
  </Grid>
);

export default LoadingApp;

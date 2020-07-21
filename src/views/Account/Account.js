import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Divider } from '@material-ui/core';

import {
  AccountProfile,
  AccountDetails,
  StudioProfile,
  StudioDetails
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  studio:{
    marginTop: theme.spacing(4)
  }
}));

const Account = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xl={4} xs={12}>
          <AccountProfile />
        </Grid>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          <AccountDetails />
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={4} className={classes.studio}>
        <Grid item lg={4} md={6} xl={4} xs={12}>
          <StudioProfile />
        </Grid>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          <StudioDetails />
        </Grid>
      </Grid>
    </div>
  );
};

export default Account;

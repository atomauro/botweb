import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import {
  MagicPackage,
  FastPackage,
  TasksProgress,
  Total,
  LatestSales,
  UsesByPackage,
  LatestProducts,
  LatestOrders
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Boost = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid container spacing={4}>
        
        <Grid item lg={6} sm={6} xl={3} xs={12}>
          <Total />
        </Grid>
        <Grid item lg={6} sm={6} xl={3} xs={12}>
          <TasksProgress />
        </Grid>
        <Grid item lg={6} sm={6} xl={3} xs={12}>
          <FastPackage />
        </Grid>
        <Grid item lg={6} sm={6} xl={3} xs={12}>
          <MagicPackage />
        </Grid>        
        <Grid item lg={12} md={6} xl={3} xs={12}>
          <UsesByPackage />
        </Grid>
      </Grid>
    </div>
  );
};

const mapState = state => ({
  badge: state.badge
});

const mapDispatch = ({ badge: { addBy, addByAsync } }) => ({
  addByOne: () => addBy(1),
  addByOneAsync: () => addByAsync(1)
});

export default connect(mapState, mapDispatch)(Boost);

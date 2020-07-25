import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import {
  MagicPackage,
  FastPackage,
  TokenDistribution,
  Total,
  LatestSales,
  UsesByPackage
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    paddingRight: theme.spacing(0)
  }
}));

const Balance = props => {
  const classes = useStyles();

  const handleClickTotal = () => {
    props.history.push('/packages');
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} xs={12} spacing={4} container>
          <Grid item lg={12} md={12} xl={3} xs={12}>
            <TokenDistribution />
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} xs={12} spacing={4} container>
          <Grid item lg={12} md={6} xl={3} xs={12} onClick={handleClickTotal}>
            <Total />
          </Grid>
          <Grid item lg={6} md={6} xl={3} xs={12}>
            <FastPackage />
          </Grid>
          <Grid item lg={6} md={6} xl={3} xs={12}>
            <MagicPackage />
          </Grid>
          <Grid item lg={12} md={12} xl={3} xs={12}>
            <UsesByPackage />
          </Grid>
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

export default connect(mapState, mapDispatch)(Balance);

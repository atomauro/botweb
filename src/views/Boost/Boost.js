import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { BoostToolbar } from './components';

import {  
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
      <BoostToolbar/>
      <Grid container spacing={4}>
        
        <Grid item lg={12} md={12} xl={12} xs={12}>
          <LatestOrders />        
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

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { 
  LatestProducts,
  LatestOrders
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    width: "100%"
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        justify="center"
      >        
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
        </Grid>
          <LatestOrders />
      </Grid>
    </div>
  );
};

export default Dashboard;

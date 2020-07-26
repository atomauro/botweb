import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography, Paper } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { ProductsToolbar, ProductCard, Cart } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const Packages = () => {
  const classes = useStyles();

  const [products] = useState(mockData);

  const [selected, setSelected] = useState(false);

  const handleClickCard = ()=> setSelected(!selected);

  return (
    <div className={classes.root}>
      <ProductsToolbar />

      <Grid container spacing={3}>        

        <Grid item lg={8} md={8} xs={12}>
          <div className={classes.content}>
            <Grid container spacing={2}>
              {products.map(product => (
                <Grid item key={product.id} lg={4} md={4} xs={6}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </div>         
        </Grid>

        <Grid item lg={4} md={4} xs={12}>
          <Cart />
        </Grid>

      </Grid>
    </div>
  );
};

export default Packages;

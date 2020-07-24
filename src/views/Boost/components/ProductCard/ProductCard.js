import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Paper,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import FlashBoostIcon from '@material-ui/icons/EvStation';
import MagicBoostIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = props => {
  const { className, product, ...rest } = props;

  const classes = useStyles();

  return (
    <Paper {...rest} className={clsx(classes.root, className)} elevation={3}>
      <CardContent>
        <div className={classes.imageContainer}>
          <img alt="Product" className={classes.image} src={product.imageUrl} />
        </div>
        <Typography align="center" gutterBottom variant="h4">
          {product.title}
        </Typography>
        <Typography align="center" variant="body1">
          {product.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid container justify="space-between">
          <Grid className={classes.statsItem} item>
            <FlashBoostIcon className={classes.statsIcon} />
            <Typography display="inline" variant="body2">
              Up to {product.flashBoost} FLASH BOOST
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <MagicBoostIcon className={classes.statsIcon} />
            <Typography display="inline" variant="body2">
              Up to {product.magicBoost} MAGIC BOOST
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Paper>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;

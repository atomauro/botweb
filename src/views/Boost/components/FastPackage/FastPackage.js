import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';

import ScheduleIcon from '@material-ui/icons/Schedule';
import FastIcon from '@material-ui/icons/EvStation';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.success.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.success.dark
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  }
}));

const FastPackage = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2">
              TOTAL FAST BOOST
            </Typography>
            <Typography variant="h3" align="center">
              4
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <FastIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <FastIcon className={classes.differenceIcon} />
          <ScheduleIcon className={classes.differenceValue} />
          <Typography className={classes.caption} variant="caption">
            See last uses
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

FastPackage.propTypes = {
  className: PropTypes.string
};

export default FastPackage;

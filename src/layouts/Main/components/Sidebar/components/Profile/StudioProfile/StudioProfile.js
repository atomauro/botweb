import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const StudioProfile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: 'Marvel Universe',
    city: 'California',
    country: 'USA',
    timezone: 'GTM-7',
    avatar: '/images/avatars/MarvelLogo.svg'
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h2">
              Marvel Universe
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1">
              {user.city}, {user.country}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1">
              {moment().format('hh:mm A')} ({user.timezone})
            </Typography>
          </div>
          <Avatar className={classes.avatar} src={user.avatar} />
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 20%</Typography>
          <LinearProgress value={20} variant="determinate" />
        </div>
      </CardContent>
    </Card>
  );
};

StudioProfile.propTypes = {
  className: PropTypes.string
};

export default StudioProfile;

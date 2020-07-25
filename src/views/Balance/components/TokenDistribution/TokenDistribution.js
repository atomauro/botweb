import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  List,
  ListItem,
  Grid,
  Typography,
  Avatar,
  LinearProgress
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import GroupedButtons from './components/GroupedButtons.js';

const useStyles = makeStyles(theme => ({
  root: {
    height: 800,
    width: '100%'
  },
  content: {
    alignItems: 'center'
  },
  owner: {
    fontWeight: 700
  },
  models: {
    fontWeight: 700,
    marginTop: theme.spacing(2)
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56,
    margin: theme.spacing(2)
  },
  icon: {
    height: 32,
    width: 32
  },
  progress: {
    marginTop: theme.spacing(3)
  },
  tokencounter: {
    paddingTop: 40
  }
}));

const TokenDistribution = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Token distribution" />
      <Divider />
      <CardContent className={classes.content}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.owner}
              color="textSecondary"
              gutterBottom
              variant="body2">
              OWNER
            </Typography>
            <Typography variant="h3">Juan Bustos</Typography>
          </Grid>
          <Grid item>
           
            <GroupedButtons clasName={classes.tokencounter} />
          
          </Grid>
          <Grid item>
            <Avatar
              alt="Person"
              className={classes.avatar}
              src={'/images/avatars/juanbustos.jpeg'}
            />
          </Grid>
        </Grid>

        <Divider />

        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.models}
              color="textSecondary"
              gutterBottom
              variant="body2">
              MODELS
            </Typography>
            <Typography variant="h3">Laura Vega</Typography>
          </Grid>
          <Grid item>
            <Avatar
              alt="Person"
              className={classes.avatar}
              src={'/images/avatars/avatar_3.jpg'}
            />
          </Grid>
        </Grid>

        {/* <LinearProgress
          className={classes.progress}
          value={75.5}
          variant="determinate"
        /> */}
      </CardContent>
    </Card>
  );
};

TokenDistribution.propTypes = {
  className: PropTypes.string
};

export default TokenDistribution;

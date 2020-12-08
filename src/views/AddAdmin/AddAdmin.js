import React from 'react';

// import PropTypes from 'prop-types';

// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import CloseIcon from '@material-ui/icons/Close';
// import GeneralIcon from '@material-ui/icons/Face';
// import WebcamIcon from '@material-ui/icons/AddAPhoto';
// import EnjoyElfoIcon from '@material-ui/icons/ImportantDevices';
// import VpnIcon from '@material-ui/icons/VpnLock';
// import Check from '@material-ui/icons/Check';
// import clsx from 'clsx';
import FormAdminCreate from './components/FormAdminCreate';
import CardViewForm from './components/CardViewForm';

import {
  AppBar,
  Toolbar,
  StepConnector,
  StepLabel,
  Step,
  Stepper,
  Button,
  Typography,
  Paper,
  Grid,
  ListItem,
  useScrollTrigger,
  IconButton,
  makeStyles,
  CssBaseline
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const AddAdmin = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />

      <Grid className={classes.container} container spacing={0}>
        <Grid item xs={12}>
          <FormAdminCreate className={classes.paper} />
        </Grid>
        {/* <Grid item xs={6}>
          <CardViewForm name={props.name} className={classes.paper} />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

export default AddAdmin;

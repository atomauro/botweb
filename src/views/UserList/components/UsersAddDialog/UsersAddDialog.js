import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Avatar,
  Typography,
  AppBar,
  Toolbar
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    width: 110,
    height: 110
  },
  avatarContainer: {
    width: 'auto',
    height: 'auto',
    marginBottom: 20,
    alignContent: 'center',
    align: 'center'
  },
  appBar: {
    position: 'relative',
    width: '100%',
    backgroundColor: theme.palette.primary.main
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: 'white',
    align: 'center'
  }
}));

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: 'Laura',
    lastName: 'Vega',
    email: 'lauravega@juanbustos.com',
    phone: '+57 123',
    state: 'Antioquia',
    country: 'Colombia'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const states = [
    {
      value: 'alabama',
      label: 'Alabama'
    },
    {
      value: 'new-york',
      label: 'New York'
    },
    {
      value: 'san-francisco',
      label: 'San Francisco'
    }
  ];

  return (
    <>
      <Grid container>
        
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Button edge="start" color="inherit" aria-label="close">
                <CloseIcon />
              </Button>
              <Typography variant="h5" className={classes.title}>
                ADD MODEL
              </Typography>
              <Button autoFocus color="inherit">
                SAVE
              </Button>
            </Toolbar>
          </AppBar>
      
        <Grid item>
          <Card {...rest} className={clsx(classes.root, className)}>
            <form autoComplete="off" noValidate>
              <CardHeader
                subheader="The information can be edited"
                title="Profile"
              />
              <Divider />
              <CardContent>
                <div {...rest} className={clsx(classes.root, className)}></div>
                <Grid
                  container
                  className={classes.avatarContainer}
                  alignContent={'center'}>
                  <Avatar alt="Person" className={classes.avatar} />
                </Grid>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Please specify the first name"
                      label="First name"
                      margin="dense"
                      name="firstName"
                      onChange={handleChange}
                      required
                      value={values.firstName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Last name"
                      margin="dense"
                      name="lastName"
                      onChange={handleChange}
                      required
                      value={values.lastName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      margin="dense"
                      name="email"
                      onChange={handleChange}
                      required
                      value={values.email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      margin="dense"
                      name="phone"
                      onChange={handleChange}
                      type="number"
                      value={values.phone}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Select State"
                      margin="dense"
                      name="state"
                      onChange={handleChange}
                      required
                      select
                      // eslint-disable-next-line react/jsx-sort-props
                      SelectProps={{ native: true }}
                      value={values.state}
                      variant="outlined">
                      {states.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Country"
                      margin="dense"
                      name="country"
                      onChange={handleChange}
                      required
                      value={values.country}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Button color="primary" variant="contained">
                  Save details
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Paper,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  TextField,
  Avatar,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    marginBottom: theme.spacing(2)
  },
  avatar: {
    width: 110,
    height: 110,
    marginBottom: 20,
    align: 'center'
  },
  avatarContainer: {
    width: 'auto',
    height: 'auto',
    alignContent: 'center',
    align: 'center'
  },
  title: {
    marginLeft: 80,
    flex: 1,
    color: 'white',
    align: 'center'
  },
  margin: {
    margin: theme.spacing(0)
  },
  textField: {}
}));

const GeneralProfile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    country: '',
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
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
    <React.Fragment>
      <Paper {...rest} className={clsx(classes.root, className)} elevation={4}>
        <form autoComplete="off" noValidate>
          <CardHeader
            title="Profile"
            subheader="The information can be edited"
          />
          <Divider />
          <CardContent>
            <div className={classes.avatarContainer} align="center">
              <Avatar alt="Person" className={classes.avatar} />
            </div>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  margin="dense"
                  name="firstName"
                  onChange={handleChange('firstName')}
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
                  onChange={handleChange('lastName')}
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
                  onChange={handleChange('email')}
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
                  onChange={handleChange('phone')}
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
                  onChange={handleChange('state')}
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
                  label="Select Country"
                  margin="dense"
                  name="country"
                  onChange={handleChange('country')}
                  select
                  // eslint-disable-next-line react/jsx-sort-props
                  SelectProps={{ native: true }}
                  value={values.country}
                  variant="outlined">
                  {states.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
        </form>
      </Paper>
    </React.Fragment>
  );
};

GeneralProfile.propTypes = {
  className: PropTypes.string
};

export default GeneralProfile;

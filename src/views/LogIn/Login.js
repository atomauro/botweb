import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';

import Loader from '../../components/Loading/Loader/Loader';

import Logo from '../../assets/icons/icon-128.png';
import Slide1 from '../../assets/slide3_1.jpg';
import Slide2 from '../../assets/slide3_1.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: `url(${Slide1})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#40AB94'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#40AB94'
  },
  textDanger: {
    color: 'red',
    fontSize: '0.8rem'
  }
}));

export default function Login(props) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={Logo} alt="Logo" />
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            {!props.state.loading && (
              <>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      onChange={props.onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={props.onChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {props.state.erroresForm.message && (
                      <>
                        <FormLabel className={classes.textDanger}>
                          * {props.state.erroresForm.message}
                        </FormLabel>
                      </>
                    )}
                  </Grid>
                </Grid>

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Recuerdame"
                />
              </>
            )}

            <Grid container justify="center">
              <Grid item >
                {props.state.loading && <Loader />}
              </Grid>
            </Grid>
            {!props.state.loading && (
              <>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={props.onClick}>
                  Sign in
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot your password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2" to="/register">
                      {"Don't have an account? Sign up"}
                    </Link>
                  </Grid>
                </Grid>
              </>
            )}
            <Box mt={5} alignItems="center">
              <Typography variant="body1" align="center">
                &copy;{' '}
                <Link
                  component="a"
                  href="https://elfo.com.co/"
                  target="_blank"
                  align="center">
                  Elfo Traffic | For Webcam Models
                </Link>
                . 2020
              </Typography>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

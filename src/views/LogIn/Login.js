import React, {useState, useEffect, useContext} from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box ,
  Fade,
  Typography,
  makeStyles ,
  Container,
  LinearProgress
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

import * as Yup from 'yup';
import { Formik } from 'formik';

import { AccessTokenContext } from '../../App';
import { UserNameContext } from '../../App';
import State from './../../store/reducers/State';

import Logo from '../../assets/icons/LogoLogin.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://latiweb.com/">
        Latiweb Traffic | For Webcam Models
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(5),
    fontWeight: 500
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const LogIn=()=> {
  const classes = useStyles();
  const { accessTokenDispatch, accessTokenState } = useContext(
    AccessTokenContext
  );
  const { userNameDispatch, userNameState } = useContext(
    UserNameContext
  );
  const [alertStatus, setAlertStatus] = useState('invisible');

  const handleAlertStatus = (status) => {
    setAlertStatus(status);      
    setTimeout(() => {
      setAlertStatus('invisible');   
    }, 600);
  };

  const getMessageAlert = () => {
    switch (alertStatus) {
      case 'success':
        return 'Ingreso Exitoso';
        break;
      case 'warning':
        return 'Revisa y vuelve a intentarlo';
        break;
      case 'offline':
        return 'Te encuentras sin internet';
        break;
      case 'online':
        return 'Te encuentras con internet';
        break;
      default:
        return 'Revisa y vuelve a intentarlo';
        break;
    }
  };

  const getTypeAlert = () => {
    switch (alertStatus) {
      case 'success':
        return alertStatus;
        break;
      case 'warning':
        return alertStatus;
        break;
      case 'offline':
        return 'info';
        break;
      case 'online':
        return 'info';
        break;
      default:
        return 'warning';
        break;
    }
  };  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <State
        state={{
          AccessToken: accessTokenState,
          userName: userNameState
        }}
      />
      <div className={classes.paper}>
        <img src={Logo} alt="logo" />
        <Typography className={classes.title} component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .max(255)
                    .required('The user is required'),
                  password: Yup.string()
                    .max(255)
                    .required('The password is required')
                })}
                onSubmit={async (form, actions) => {                  
                  actions.setSubmitting(true);                  
                  setTimeout(() => {
                    console.log('starting log in')
                   
                    actions.setSubmitting(false); 
                  }, 1000);                                                  
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values
                }) => (
                  <>                  
                    <form className={classes.form} onSubmit={handleSubmit}>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        error={Boolean(touched.email && (errors.email))}
                        helperText={touched.email && (errors.email)}
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
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
                        error={Boolean(touched.password && (errors.password))}
                        helperText={touched.password && (errors.password)}
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange} 
                      />
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign In
                      </Button>
                      {isSubmitting ? <LinearProgress style={{marginTop:20, marginBottom:20, width:'100%'}} /> : null}    
                    </form>
                  </>
                  )}
                  </Formik>
                </div>
                <Box mt={5}>
                  <Copyright />
                </Box>
                <Fade
                  in={!(alertStatus === 'invisible')}
                  timeout={{ enter: 500, exit: 500 }}
                >
                  <Alert
                    variant="filled"
                    severity={getTypeAlert()}
                    style={{ margin: 20, display: 'flex', justifyContent: 'center' }}
                  >
                    {getMessageAlert()}
                  </Alert>
                </Fade>
              </Container>
            );
}

export default LogIn
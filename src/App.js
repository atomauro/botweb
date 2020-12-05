import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';

import Routes from './Routes';

import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

import AccessTokenReducer from './store/reducers/AccessToken';
import UserNameReducer from './store/reducers/AccessToken';

const browserHistory = createBrowserHistory();

export const AccessTokenContext = React.createContext();
export const UserNameContext = React.createContext();

const App=()=>{

  const [accessToken, tokenDispatch] = React.useReducer(AccessTokenReducer, '');
  const [userName, userDispatch] = React.useReducer(UserNameReducer, '');

  
    return (      
        <ThemeProvider theme={theme}>
          <AccessTokenContext.Provider
        value={{
          accessTokenState: accessToken,
          accessTokenDispatch: tokenDispatch
        }}
      >
        <UserNameContext.Provider
          value={{ 
            userNameState: userName, 
            userNameDispatch: userDispatch 
          }}
        >
          <Router history={browserHistory}>
            <Routes />
          </Router>
          </UserNameContext.Provider>
         </AccessTokenContext.Provider> 

        </ThemeProvider>
      
    );
  
}

export default App;
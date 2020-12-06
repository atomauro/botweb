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
import RoleReducer from './store/reducers/Role';

const browserHistory = createBrowserHistory();

export const AccessTokenContext = React.createContext();
export const UserNameContext = React.createContext();
export const RoleContext = React.createContext();

const App=()=>{

  const [accessToken, tokenDispatch] = React.useReducer(AccessTokenReducer, '');
  const [userName, userDispatch] = React.useReducer(UserNameReducer, '');
  const [role, roleDispatch] = React.useReducer(RoleReducer, '');
  
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
         <RoleContext.Provider
          value={{ 
            RoleState: role, 
            RoleDispatch: roleDispatch 
          }}
        >          
            <Router history={browserHistory}>
              <Routes />
            </Router>
            </RoleContext.Provider>   
          </UserNameContext.Provider>
         </AccessTokenContext.Provider> 

        </ThemeProvider>
      
    );
  
}

export default App;
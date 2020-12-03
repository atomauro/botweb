import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';

import Routes from './Routes';

import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

import { Provider } from 'react-redux';
import store from './store';

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

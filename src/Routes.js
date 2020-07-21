import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Balance as BalanceView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignUpStudio as SignUpStudioView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  Statistics as StatisticsView,
  AddModel as AddModelView
} from './views';

import LoginView from './views/LogIn/index';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/sign-in" />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/models"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/packages"
      />
      <RouteWithLayout
        component={BalanceView}
        exact
        layout={MainLayout}
        path="/balance"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={AddModelView}
        exact
        layout={MainLayout}
        path="/add-model"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up-studio"
      />
      <RouteWithLayout
        component={LoginView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={StatisticsView}
        exact
        layout={MainLayout}
        path="/statistics"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;

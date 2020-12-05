import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { 
  SuperAdminToolbar, 
  SuperAdminTable,
  AdminToolbar, 
  AdminTable,
  MonitorToolbar, 
  MonitorTable
 } from './components';
import mockData from './users';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <SuperAdminToolbar />
      <div className={classes.content}>
        <SuperAdminTable users={users} />
      </div>
    </div>
  );
};

export default UserList;

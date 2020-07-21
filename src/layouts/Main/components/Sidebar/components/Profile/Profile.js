import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography, Popover } from '@material-ui/core';

import Studio from './StudioProfile/StudioProfile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 110,
    height: 110
  },
  name: {
    marginTop: theme.spacing(2),
    marginBottom: 20
  },
  popover: {
    pointerEvents: 'none',
    marginLeft: 45
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const user = {
    name: 'Juan Bustos',
    avatar: '/images/avatars/juanbustos.jpeg',
    email: 'juanbustos.com@gmail.com',
    role: 'Manager'
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography className={classes.name} variant="h4">
        {user.name}
      </Typography>
      <Typography variant="body2">{user.email}</Typography>

      <div>
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          variant="h4"
          color="secondary">
          {user.role}
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'left'
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus>
            <Studio/>
          </Popover>
        </Typography>
      </div>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;

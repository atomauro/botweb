import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { Button, Dialog, Link } from '@material-ui/core';
import AddIcon from '@material-ui/icons/QueuePlayNext';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const UsersToolbar = props => {
  const { className, ...rest } = props;
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    //setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Link component={RouterLink} to="/new-boost" variant="h6">
          <Button color="primary" variant="contained" startIcon={<AddIcon />}>
            NEW ORDER
          </Button>
        </Link>
      </div>     
      <div className={classes.row}>
        
      </div>  
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default withRouter(UsersToolbar);

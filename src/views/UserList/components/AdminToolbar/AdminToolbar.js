import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { IconButton, Button, Dialog, Link } from '@material-ui/core';

import { SearchInput } from 'components';

import AddIcon from '@material-ui/icons/PersonAdd';
import RefreshIcon from '@material-ui/icons/Refresh';

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
  },
  refreshButton: {
    width: 40,
    height: 40
  }
}));

const AdminToolbar = props => {
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
        <Link component={RouterLink} to="/add-model" variant="h6">
          <Button color="primary" variant="contained" startIcon={<AddIcon />}>
            ADD MODEL
          </Button>
        </Link>
      </div>
      
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search model"
        />
        <IconButton color="primary" variant="outlined">
          <RefreshIcon />
        </IconButton>
      </div>
    </div>
  );
};

AdminToolbar.propTypes = {
  className: PropTypes.string
};

export default withRouter(AdminToolbar);

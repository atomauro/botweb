import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Paper,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  Divider,
  List,
  ListItem,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Avatar
} from '@material-ui/core';

import DropdownTreeSelect from 'react-dropdown-tree-select';
import 'react-dropdown-tree-select/dist/styles.css';
import data from './countries/data.json';

const useStyles = makeStyles(theme => ({
  rootPicker: {
    width: '100%'
  },
  gridList: {
    flexWrap: 'nowrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  avatarSite: {
    width: 60,
    height: 60,
    margin: theme.spacing(1),
    align: 'center'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0
  },
  containerForms: {
    margin: theme.spacing(0)
  },
  avatarContainer: {
    width: 'auto',
    height: 'auto'
  },
  containerCountry:{
    
  }
}));

const Sites = {};

const RestrictCountries = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    countries: ['']
  });
  const [site, setSite] = React.useState('');

  const onChangeCountry = (currentNode, selectedNodes) => {
    console.log('selected: ', selectedNodes);
  };

  const onChangeSite = event => {
    setSite(event.target.value);
  };

  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <CardHeader
          title="Restrict countries"
          subheader="Add the countries for each profile"
        />
        <Divider />
        <CardContent>
          <div align={'center'}>
            <Grid container spacing={3} className={classes.containerForms}>
              <Grid item md={6} xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Site
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={site}
                    onChange={onChangeSite}>
                    <MenuItem value={'Chaturbate'}>Chaturbate</MenuItem>
                    <MenuItem value={'Bongacams'}>Bongacams</MenuItem>
                    <MenuItem value={'StripChat'}>StripChat</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.avatarContainer} align="center">
                  <Avatar alt="Site" className={classes.avatarSite} />
                </div>
              </Grid>
            </Grid>
          </div>
          <Divider />
          <form autoComplete="off" noValidate>
            <Grid container spacing={3} className={classes.containerForms}>
              <div className={classes.containerCountry}>
                <DropdownTreeSelect fullWidth data={data} onChange={onChangeCountry} />
              </div>
            </Grid>
          </form>
        </CardContent>
      </Paper>
    </div>
  );
};

RestrictCountries.propTypes = {
  className: PropTypes.string
};

export default RestrictCountries;

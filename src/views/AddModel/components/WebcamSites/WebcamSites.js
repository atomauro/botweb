import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    marginTop: theme.spacing(2)
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
  }
}));

const Sites = {};

const WebcamSites = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [site, setSite] = React.useState('');

  const [values, setValues] = useState({
    userName: '',
    urlRoom: ''
  });

  const handleChange = event => {
    setSite(event.target.value);
  };

  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <CardHeader
          title="Webcam Sites"
          subheader="Add the model profile for each one."
        />
        <Divider />
        <CardContent>
          <div align={'center'}>
            <Grid container >
              <Grid item md={6} xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Site
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={site}
                    onChange={handleChange}>
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
            
              <Grid item md={6} xs={12}>
                <TextField
                fullWidth
                  helperText="Please specify the exact user"
                  label="User"
                  margin="dense"
                  name="userName"
                  onChange={handleChange}
                  required
                  value={values.userName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                fullWidth
                  helperText="Please specify the exact url Room"
                  label="URL Room"
                  margin="dense"
                  name="urlRoom"
                  onChange={handleChange}
                  required
                  value={values.urlRoom}
                  variant="outlined"
                />
              </Grid>
         
          </form>
        </CardContent>
      </Paper>
    </div>
  );
};

WebcamSites.propTypes = {
  className: PropTypes.string
};

export default WebcamSites;

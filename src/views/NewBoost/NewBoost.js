import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Fab,
  FormControlLabel,
  Typography,
  Button,
  CircularProgress
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import ModelsIcon from '@material-ui/icons/GroupAdd';
import PackageIcon from '@material-ui/icons/AddToQueue';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
    marginRight: theme.spacing(2)
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -2,
    left: -2,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));

export default function NewBoost(props) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header">
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
            control={
              <div className={classes.wrapper}>
                <Fab
                  size="small"
                  aria-label="save"
                  color="primary"
                  className={buttonClassname}
                  onClick={handleButtonClick}
                  elevation={0}>
                  {success ? <CheckIcon /> : <ModelsIcon />}
                </Fab>
                {loading && (
                  <CircularProgress size={45} className={classes.fabProgress} />
                )}
              </div>
            }
            label={<Typography variant="h4">Select profiles</Typography>}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            The click event of the nested action will propagate up and expand
            the accordion unless you explicitly stop it.
          </Typography>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              className={buttonClassname}
              disabled={loading}
              onClick={handleButtonClick}>
              Accept terms
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header">
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
            control={
              <div className={classes.wrapper}>
                <Fab
                  size="small"
                  aria-label="save"
                  color="primary"
                  className={buttonClassname}
                  onClick={handleButtonClick}
                  elevation={0}>
                  {success ? <CheckIcon /> : <PackageIcon />}
                </Fab>
                {loading && (
                  <CircularProgress size={45} className={classes.fabProgress} />
                )}
              </div>
            }
            label={<Typography variant="h4">Select Package</Typography>}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            The focus event of the nested action will propagate up and also
            focus the accordion unless you explicitly stop it.
          </Typography>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              className={buttonClassname}
              disabled={loading}
              onClick={handleButtonClick}>
              Accept terms
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

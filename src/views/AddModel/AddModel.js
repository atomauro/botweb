import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import GeneralIcon from '@material-ui/icons/Face';
import WebcamIcon from '@material-ui/icons/AddAPhoto';
import EnjoyElfoIcon from '@material-ui/icons/ImportantDevices';
import VpnIcon from '@material-ui/icons/VpnLock';
import Check from '@material-ui/icons/Check';
import clsx from 'clsx';

import {
  AppBar,
  Toolbar,
  StepConnector,
  StepLabel,
  Step,
  Stepper,
  Button,
  Typography,
  Paper,
  ListItem,
  useScrollTrigger,
  IconButton,
  CssBaseline
} from '@material-ui/core';

import { GeneralProfile, RestrictCountries, WebcamSites } from './components';

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool
};

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22
  },
  active: {
    color: '#784af4'
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18
  }
});

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxshadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
  },
  appBar: {
    position: 'relative',
    width: '100%'
  },
  title: {
    marginLeft: 80,
    flex: 1,
    color: 'white',
    align: 'center'
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto'
  },
  button: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  appBar: {
    position: 'relative',
    width: '100%',
    height: 'auto'
  },
  title: {
    flex: 1,
    color: 'white',
    align: 'center'
  },
  contentStep: {
    width: 600,
    height: 'auto',
    align: 'center'
  },
  containerStep: {
    width: '100%',
    height: '100%'
  }
}));

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}>
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <GeneralIcon />,
    2: <WebcamIcon />,
    3: <VpnIcon />,
    4: <EnjoyElfoIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}>
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return ['General', 'Webcam Sites', 'Restrict Countries', '¡Boost!'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <GeneralProfile />;
    case 1:
      return <WebcamSites />;
    case 2:
      return <RestrictCountries />;
    case 3:
      return '¡Boost!';
    default:
      return 'Unknown step';
  }
}

const AddModel = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>  
      <CssBaseline />
      <div align="center">
        <Button onClick={props.increment}>Add</Button>
        <button onClick={props.addByOneAsync}>Add 1 Async</button>
      </div>
      <div align="center">
        <Typography variant="h3">There are {props.count} models</Typography>
      </div>
      <Paper className={classes.root}>
        <div align="center">
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        <ListItem>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </div>
            ) : (
              <div className={classes.containerStep}>
                <div className={classes.contentStep}>
                  {getStepContent(activeStep)}
                </div>
                <div align="center">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ListItem>
      </Paper>
    </React.Fragment>
  );
}
const mapState = state => ({
  badge: state.badge,
});

const mapDispatch = ({ badge: { addBy, addByAsync }}) => ({
  addByOne: () => addBy(1),
  addByOneAsync: () => addByAsync(1)
});

export default AddModel;

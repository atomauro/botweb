import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  Button,
  Typography,
  List,
  ListSubheader,
  Divider,
  ListItem,
  CardContent,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper
} from '@material-ui/core';
import PayIconStart from '@material-ui/icons/AccountBalance';
import PayIconEnd from '@material-ui/icons/Payment';

const useStyles = makeStyles(theme => ({
  root: {
    height: 'auto',
    width: '100%',
    marginTop: theme.spacing(2)
  },
  title: {
    margin: theme.spacing(2),
    paddingTop: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Cart = props => {
  const { className, product, ...rest } = props;
  const classes = useStyles();

  const [value, setValue] = React.useState('paymethod');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Paper elevation={1} className={classes.root}>
      <List
        subheader={<Typography variant="h3">Payment details</Typography>}
        className={classes.title}>
        <ListItem />
        <Divider />
        <ListItem>
          <Typography variant="h4">Package: </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography variant="h4">Tokens: </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography variant="h4">Price: </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography variant="h4">Fee: </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography variant="h4">Total: </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <RadioGroup
            aria-label="visa"
            name="visa"
            value={value}
            onChange={handleChange}>
            <FormControlLabel
              value="visa"
              control={<Radio />}
              label={<img width={120} src="/images/payment/visa.gif" />}
            />
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label={<img src="/images/payment/paypal.png" />}
            />
          </RadioGroup>
        </ListItem>
        <Divider />
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<PayIconEnd />}
            >
            Pay
          </Button>
        </ListItem>
      </List>
    </Paper>
  );
};

export default Cart;

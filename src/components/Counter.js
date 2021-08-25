import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useCounter from '../hooks/CounterHook';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Counter() {
  const classes = useStyles()
  const [count, increment, decrement] = useCounter(0)

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" onClick={increment}>
        Plus +
      </Button>
      
          <h4>{ count }</h4>
      
      <Button variant="contained" color="secondary" onClick={decrement}>
        Minus -
      </Button>      
    </div>
  );
}
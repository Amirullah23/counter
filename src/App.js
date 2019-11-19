import React from 'react';
import './App.css';
import Class from './Class'
import Func from './Func'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));




function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <h1>this Use Class</h1>
      <Button variant="contained" color="primary" className={classes.button}>
        <Class />
      </Button>
     <h1>this Use Function</h1>
     <Button variant="contained" color="secondary" className={classes.button}>
     <Func />
      </Button>






    </div>
  );
}

export default App;

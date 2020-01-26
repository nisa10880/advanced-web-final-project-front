import React from 'react';
import './App.css';
import { Provider, useSelector, useDispatch } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';

import { store } from "./state/store";

import { Home } from './Home';
import { closeSnackbar } from './state/snackbar/snackbar-actions';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4),
  }
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snackbarState = useSelector(state => state.snackbar);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        <Provider store={store}>
          <Home />
        </Provider>
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackbarState.open}
        message={snackbarState.message}
        autoHideDuration={3000}
        onClose={() => dispatch(closeSnackbar())}
      />
    </>
  );
}

App.propTypes = {};


export default App;

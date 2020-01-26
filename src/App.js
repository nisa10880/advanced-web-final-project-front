import React, { useState, useCallback } from 'react';
import './App.css';
import { Provider } from "react-redux";
import {
  Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';

import { store } from "./state/store";

import { AddStudent } from './pages/AddStudent';
import { AddProfessor } from './pages/AddProfessor';
import { Home } from './pages/Home';

export const SnackbarContext = React.createContext({
  setMessage: () => {}
});

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4),
  }
}));

const App = () => {
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(null);
  const setMessage = useCallback((message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  }, [setSnackbarMessage, setSnackbarOpen]);

  return (
    <>
      <CssBaseline />
      <SnackbarContext.Provider value={{setMessage: (message) => {
        setMessage(message);
      }}}>
        <Container maxWidth="lg" className={classes.container}>
          <Provider store={store}>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add-student" component={AddStudent} />
                <Route path="/add-professor" component={AddProfessor} />
              </Switch>
            </Router>
          </Provider>
        </Container>
      </SnackbarContext.Provider>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackbarOpen}
        message={snackbarMessage}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      />
    </>
  );
}

App.propTypes = {};


export default App;

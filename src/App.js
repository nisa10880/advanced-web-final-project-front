import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./state/store";

import {
  Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';
import { AddStudent } from './AddStudent';
import { AddProfessor } from './AddProfessor';



const App = () => (
  <Provider store={store}>

    <Router>
      <Switch>
        <Route path="/add-student" component={AddStudent} />
        <Route path="/add-professor" component={AddProfessor} />
      </Switch>
    </Router>

  </Provider>
);

App.propTypes = {};


export default App;

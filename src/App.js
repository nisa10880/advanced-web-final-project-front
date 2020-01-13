import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./state/store";
import GenderRadio from './GenderRadio';
import { TextField } from '@material-ui/core';

const App = () => (
  <Provider store={store}>

    <div className="App">
      <TextField id="name" label="Name" />
      <TextField id="last-name" label="Last Name" />
      <GenderRadio></GenderRadio>
    </div>
  </Provider>
);

App.propTypes = {};


export default App;

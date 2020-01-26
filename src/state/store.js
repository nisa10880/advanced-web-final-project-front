import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import { studentsReducer } from './students/students-reducer';
import { professorsReducer } from './professors/professors-reducer';
import { housesReducer } from './houses/houses-reducer';
import { snackbarReducer } from './snackbar/snackbar-reducer';
import { getHouses } from './houses/houses-actions';
import { getProfessors } from './professors/professors-actions';
import { getStudents } from './students/students-actions';


const reducers = combineReducers({
  students: studentsReducer,
  professors: professorsReducer,
  houses: housesReducer,
  snackbar: snackbarReducer,
});

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const fetchData = () => {
  return dispatch => {
    dispatch(getHouses());
    dispatch(getProfessors());
    dispatch(getStudents());
  }
}
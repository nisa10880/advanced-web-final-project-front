import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import { studentsReducer } from './students/students-reducer';
import { professorsReducer } from './professors/professors-reducer';
import { housesReducer } from './houses/houses-reducer';


const reducers = combineReducers({
  students: studentsReducer,
  professors: professorsReducer,
  houses: housesReducer,
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

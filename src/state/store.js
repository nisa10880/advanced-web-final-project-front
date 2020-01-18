import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import { studentReducer } from './student/student-reducer'
import { professorReducer } from './professor/professor-reducer'


const reducers = combineReducers({
  studentReducer,
  professorReducer
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

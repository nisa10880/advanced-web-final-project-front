import { ADD_PROFESSOR_SUCCESS, GET_PROFESSORS_SUCCESS } from "./professor-actions";

const initialState = {
  professors: [],
};

export const professorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFESSOR_SUCCESS:
      return { professors: action.payload };
    case GET_PROFESSORS_SUCCESS:
      return { professors: action.payload };
    default:
      return state;
  }
};

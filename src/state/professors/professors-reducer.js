import { ADD_PROFESSOR_SUCCESS, GET_PROFESSORS_SUCCESS, GET_PROFESSORS_LOADING } from "./professors-actions";

const initialState = {
  loading: false,
  professors: [],
};

export const professorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFESSORS_LOADING:
      return {
        loading: true,
        professors: state.professors,
      };
    case GET_PROFESSORS_SUCCESS:
      return {
        loading: false,
        professors: action.payload,
      };
    case ADD_PROFESSOR_SUCCESS:
      return {
        loading: false,
        professors: [
          ...state.professors,
          action.payload,
        ],
      };
    default:
      return state;
  }
};

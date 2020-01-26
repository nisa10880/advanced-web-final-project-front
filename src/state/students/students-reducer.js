import { ADD_STUDENT_SUCCESS, GET_STUDENTS_SUCCESS, GET_STUDENTS_LOADING } from "./students-actions";

const initialState = {
  loading: false,
  students: [],
};

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS_LOADING:
      return {
        loading: true,
        students: state.students,
      };
    case GET_STUDENTS_SUCCESS:
      return {
        loading: false,
        students: action.payload,
      };
    case ADD_STUDENT_SUCCESS:
      return {
        loading: false,
        students: state.students,
      };
    default:
      return state;
  }
};

import { ADD_STUDENT_SUCCESS } from "./student-actions";

const initialState = {
  students: [],
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT_SUCCESS:
      return { student: action.payload };
    default:
      return state;
  }
};

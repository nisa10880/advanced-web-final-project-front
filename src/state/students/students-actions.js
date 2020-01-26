import { api } from '../../api';

export const GET_STUDENTS_LOADING = "GET_STUDENTS_LOADING";
export const GET_STUDENTS_SUCCESS = "GET_STUDENT_SUCCESS";
export const GET_STUDENTS_FAILURE = "GET_STUDENTS_FAILURE";

export const ADD_STUDENT_LOADING = "ADD_STUDENT_LOADING";
export const ADD_STUDENT_SUCCESS = "ADD_STUDENT_SUCCESS";
export const ADD_STUDENT_FAILURE = "ADD_STUDENT_FAILURE";


export const getStudentsLoading = () => ({
  type: GET_STUDENTS_LOADING,
});

export const getStudentsSuccess = (students) => ({
  type: GET_STUDENTS_SUCCESS,
  payload: students,
});

export const getStudentsFailure = (error) => ({
  type: GET_STUDENTS_FAILURE,
  error,
});

export const addStudentLoading = () => ({
  type: ADD_STUDENT_LOADING,
});

export const addStudentSuccess = (student) => ({
  type: ADD_STUDENT_SUCCESS,
  payload: student
});

export const addStudentFailure = (error) => ({
  type: ADD_STUDENT_FAILURE,
  error,
});

export const getStudents = () => {
  return async dispatch => {
    try {
      dispatch(getStudentsLoading());
      const response = await api.get('/students');
      const students = response.data;
      students.sort((a, b) => b.lastname - a.lastname);
      dispatch(getStudentsSuccess(students));
    } catch (error) {
      dispatch(getStudentsFailure(error));
      throw error;
    }
  };
};

export const addStudent = (student) => {
  return async dispatch => {
    try {
      dispatch(addStudentLoading());
      const response = await api.post('/students', student);
      dispatch(addStudentSuccess(response.data));
    } catch (error) {
      dispatch(addStudentFailure(error));
      throw error;
    }
  };
};

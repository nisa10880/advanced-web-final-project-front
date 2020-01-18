import Axios from "axios";

export const ADD_STUDENT_SUCCESS = "ADD_STUDENT_SUCCESS";
export const GET_STUDENTS_SUCCESS = "GET_STUDENTS_SUCCESS";




export const addStudent = (student) => {
  return async dispatch => {
    try {
      const response = await Axios.post(`/student`, student);

      dispatch(addStudentSuccess(response.data));

      console.log(response.data);
    } catch (error) {

      console.log(error);

    }
  };
};


export const getProfessors = (students) => {
  return async dispatch => {
    try {
      const response = await Axios.get(`/students`, students);

      dispatch(getStudentsSuccess(response.data));

      console.log(response.data);
    } catch (error) {

      console.log(error);

    }
  };
};





export const getStudentsSuccess = students => ({
  type: GET_STUDENTS_SUCCESS,
  payload: students
});



export const addStudentSuccess = student => ({
  type: ADD_STUDENT_SUCCESS,
  payload: student
});





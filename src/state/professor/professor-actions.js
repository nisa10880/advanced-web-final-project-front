import Axios from "axios";

export const ADD_PROFESSOR_SUCCESS = "ADD_PROFESSOR_SUCCESS";
export const GET_PROFESSORS_SUCCESS = "GET_PROFESSOR_SUCCESS"



export const addProfessor = (professor) => {
  return async dispatch => {
    try {
      const response = await Axios.post(`/professor`, professor);

      dispatch(addProfessorSuccess(response.data));

      console.log(response.data);
    } catch (error) {

      console.log(error);

    }
  };
};



export const getProfessors = (professors) => {
  return async dispatch => {
    try {
      const response = await Axios.get(`/professors`, professors);

      dispatch(getProfessorsSuccess(response.data));

      console.log(response.data);
    } catch (error) {

      console.log(error);

    }
  };
};


export const addProfessorSuccess = professor => ({
  type: ADD_PROFESSOR_SUCCESS,
  payload: professor
});


export const getProfessorsSuccess = professors => ({
  type: GET_PROFESSORS_SUCCESS,
  payload: professors
});





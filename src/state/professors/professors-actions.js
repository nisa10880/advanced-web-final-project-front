import { api } from '../../api';

export const GET_PROFESSORS_LOADING = "GET_PROFESSORS_LOADING";
export const GET_PROFESSORS_SUCCESS = "GET_PROFESSOR_SUCCESS";
export const GET_PROFESSORS_FAILURE = "GET_PROFESSORS_FAILURE";

export const ADD_PROFESSOR_LOADING = "ADD_PROFESSOR_LOADING";
export const ADD_PROFESSOR_SUCCESS = "ADD_PROFESSOR_SUCCESS";
export const ADD_PROFESSOR_FAILURE = "ADD_PROFESSOR_FAILURE";


export const getProfessorsLoading = () => ({
  type: GET_PROFESSORS_LOADING,
});

export const getProfessorsSuccess = (professors) => ({
  type: GET_PROFESSORS_SUCCESS,
  payload: professors
});

export const getProfessorsFailure = (error) => ({
  type: GET_PROFESSORS_FAILURE,
  error,
});

export const addProfessorLoading = () => ({
  type: ADD_PROFESSOR_LOADING,
});

export const addProfessorSuccess = (professor) => ({
  type: ADD_PROFESSOR_SUCCESS,
  payload: professor
});

export const addProfessorFailure = (error) => ({
  type: ADD_PROFESSOR_FAILURE,
  error,
});

export const getProfessors = () => {
  return async dispatch => {
    try {
      dispatch(getProfessorsLoading());
      const response = await api.get('/professors');
      dispatch(getProfessorsSuccess(response.data));
    } catch (error) {
      dispatch(getProfessorsFailure(error));
      throw error;
    }
  };
};

export const addProfessor = (professor) => {
  return async dispatch => {
    try {
      dispatch(addProfessorLoading());
      const response = await api.post('/professors', professor);
      dispatch(addProfessorSuccess(response.data));
    } catch (error) {
      dispatch(addProfessorFailure(error));
      throw error;
    }
  };
};

import { api } from '../../api';
import { setSnackbarMessage } from '../snackbar/snackbar-actions';
import { fetchData } from '../fetchData';

export const ADD_POINTS_LOADING = 'ADD_POINTS_LOADING';
export const ADD_POINTS_SUCCESS = 'ADD_POINTS_SUCCESS';
export const ADD_POINTS_FAILURE = 'ADD_POINTS_FAILURE';

export const addPointsLoading = () => ({
  type: ADD_POINTS_LOADING,
});

export const addPointsSuccess = (houses) => ({
  type: ADD_POINTS_SUCCESS,
  payload: houses,
});

export const addPointsFailure = (error) => ({
  type: ADD_POINTS_FAILURE,
  error,
});

export const addPoints = (values) => {
  return async (dispatch, getState) => {
    try {
      dispatch(addPointsLoading());
      const state = getState();
      const payload = {
        ...values,
        id_house: state.students.students.find(
          (s) => s.id === values.id_student,
        ).id_house,
      };
      await api.post('/points', payload);
      dispatch(addPointsSuccess(payload));
      dispatch(setSnackbarMessage('Points ajoutés'));
      dispatch(fetchData());
    } catch (error) {
      dispatch(addPointsFailure(error));
      dispatch(
        setSnackbarMessage(
          "Impossible d'ajouter ces points. Veuillez réessayer plus tard.",
        ),
      );
      throw error;
    }
  };
};

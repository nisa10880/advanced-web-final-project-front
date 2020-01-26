import { api } from '../../api';

export const GET_HOUSES_LOADING = "GET_HOUSES_LOADING";
export const GET_HOUSES_SUCCESS = "GET_HOUSES_SUCCESS";
export const GET_HOUSES_FAILURE = "GET_HOUSES_FAILURE";

export const getHousesLoading = () => ({
  type: GET_HOUSES_LOADING,
});

export const getHousesSuccess = (houses) => ({
  type: GET_HOUSES_SUCCESS,
  payload: houses
});

export const getHousesFailure = (error) => ({
  type: GET_HOUSES_FAILURE,
  error,
});

export const getHouses = () => {
  return async dispatch => {
    try {
      dispatch(getHousesLoading());
      const response = await api.get('/houses');
      const houses = response.data;
      houses.sort((a, b) => b.points - a.points);
      dispatch(getHousesSuccess(houses));
    } catch (error) {
      dispatch(getHousesFailure(error));
      throw error;
    }
  };
};

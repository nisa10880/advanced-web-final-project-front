import { GET_HOUSES_LOADING, GET_HOUSES_SUCCESS } from './houses-actions';

const initialState = {
  loading: false,
  houses: [],
};

export const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOUSES_LOADING:
      return {
        loading: true,
        houses: state.houses,
      };
    case GET_HOUSES_SUCCESS:
      return {
        loading: false,
        houses: action.payload,
      };
    default:
      return state;
  }
};

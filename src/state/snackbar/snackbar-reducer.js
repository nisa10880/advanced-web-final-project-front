import { SET_SNACKBAR_MESSAGE, CLOSE_SNACKBAR } from './snackbar-actions';

const initialState = {
  message: '',
  open: false,
};

export const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNACKBAR_MESSAGE:
      return {
        message: action.message,
        open: true,
      };
    case CLOSE_SNACKBAR:
      return {
        message: '',
        open: false,
      };
    default:
      return state;
  }
};

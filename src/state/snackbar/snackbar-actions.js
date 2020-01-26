export const SET_SNACKBAR_MESSAGE = 'SET_SNACKBAR_MESSAGE';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const setSnackbarMessage = (message) => ({
  type: SET_SNACKBAR_MESSAGE,
  message,
});

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});

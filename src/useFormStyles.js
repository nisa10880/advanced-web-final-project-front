import { makeStyles } from '@material-ui/core';

export const useFormStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

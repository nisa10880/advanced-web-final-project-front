import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { addProfessor } from './state/professors/professors-actions';
import { useFormStyles } from './useFormStyles';
import { SelectItem } from './SelectItem';

export const AddProfessor = () => {
  const classes = useFormStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      gender: '',
    },
    onSubmit: async (values, actions) => {
      try {
        await dispatch(addProfessor(values));
        actions.resetForm();
      } catch {}
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl className={classes.formControl}>
        <TextField
          id="input-firstname"
          label="Prénom"
          value={formik.values.firstname}
          onChange={formik.handleChange('firstname')}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="input-lastname"
          label="Nom de famille"
          value={formik.values.lastname}
          onChange={formik.handleChange('lastname')}
        />
      </FormControl>
      <SelectItem
        label="Genre"
        extractLabel={(g) => g.name}
        name="gender"
        formik={formik}
        formikKey="gender"
        items={[
          {
            id: 'M',
            name: 'Homme',
          },
          {
            id: 'F',
            name: 'Femme',
          },
        ]}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={formik.submitForm}
        className={classes.submitButton}
      >
        Ajouter
      </Button>
    </form>
  );
};

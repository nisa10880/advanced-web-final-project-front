import React, { useContext } from 'react';
import PropTypes from 'proptypes';
import { useFormik } from 'formik';
import { SnackbarContext } from './App';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addPoints } from './state/points/points-actions';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
    },
    submitButton: {
        marginTop: theme.spacing(2),
    },
}));

const SelectPerson = ({ items, label, name, formik, formikKey }) => {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id={`label-${name}`}>{label}</InputLabel>
            <Select
                id={`select-${name}`}
                labelId={`label-${name}`}
                name={name}
                value={formik.values[formikKey]}
                onChange={formik.handleChange(formikKey)}
            >
                {
                    items ? items.map((item) => (
                        <MenuItem
                            value={item.id}
                            key={item.id}
                        >
                            {`${item.firstname} ${item.lastname}`}
                        </MenuItem>
                    )) : null
                }
            </Select>
        </FormControl>
    );
}

SelectPerson.propTypes = {
    items: PropTypes.array,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    formik: PropTypes.object,
    formikKey: PropTypes.string,
};

export const AddPoints = (props) => {
    const classes = useStyles();
    const {setMessage} = useContext(SnackbarContext);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            nb_points: '',
            id_professor: '',
            id_student: '',
        },
        onSubmit: async (values, actions) => {
            try {
                await dispatch(addPoints(values));
                props.onAdded(values);
                actions.resetForm();
                setMessage("Points ajoutés");
            } catch {
                setMessage("Impossible d'ajouter ces points. Veuillez réessayer plus tard.");
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <SelectPerson
                label="Professeur"
                name="professor"
                formik={formik}
                formikKey="id_professor"
                items={props.professors}
            />
            <SelectPerson
                label="Élève"
                name="student"
                formik={formik}
                formikKey="id_student"
                items={props.students}
            />
            <FormControl className={classes.formControl}>
                <TextField
                    id="input-nb_points"
                    label="Nombre de points"
                    value={formik.values.nb_points}
                    onChange={formik.handleChange('nb_points')}
                    type="number"
                    inputProps={{
                        min: 1,
                        max: 1000,
                        step: 1,
                    }}
                />
            </FormControl>
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
}

AddPoints.propTypes = {
    professors: PropTypes.array,
    students:  PropTypes.array,
};

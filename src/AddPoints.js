import React from 'react';
import { useFormik } from 'formik';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';
import { addPoints } from './state/points/points-actions';
import { SelectItem } from './SelectItem';

import { useFormStyles } from './useFormStyles';

export const AddPoints = (props) => {
    const classes = useFormStyles();
    const dispatch = useDispatch();

    const professorsState = useSelector(state => state.professors);
    const studentsState = useSelector(state => state.students);

    const formik = useFormik({
        initialValues: {
            nb_points: '',
            id_professor: '',
            id_student: '',
            negative: false,
        },
        onSubmit: async (values, actions) => {
            try {
                const { negative, ...payload } = values;
                if (negative) {
                    payload.nb_points = -payload.nb_points;
                }
                await dispatch(addPoints(payload));
                actions.resetForm();
            } catch {}
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <SelectItem
                label="Professeur"
                extractLabel={p => `${p.firstname} ${p.lastname}`}
                name="professor"
                formik={formik}
                formikKey="id_professor"
                items={professorsState.professors}
            />
            <SelectItem
                label="Élève"
                extractLabel={e => `${e.firstname} ${e.lastname}`}
                name="student"
                formik={formik}
                formikKey="id_student"
                items={studentsState.students}
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
            <FormControlLabel
                className={classes.formControl}
                control={
                    <Switch
                        checked={formik.values.negative}
                        onChange={formik.handleChange('negative')}
                        color="primary"
                    />
                }
                label="Enlever des points"
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
}

AddPoints.propTypes = {};

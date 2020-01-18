import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function HouseList(props) {
    const classes = useStyles();


    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="house-name">House</InputLabel>
            <Select
                native
                value={props.value}
                onChange={props.onChange}
                inputProps={{
                    name: 'house',
                    id: 'house-name',
                }}
            >

                <option value={1}>Gryffindor</option>
                <option value={2}>Hufflepuff</option>
                <option value={3}>Ravenclaw </option>
                <option value={3}>Slytherin </option>

            </Select>
        </FormControl>
    )
}


import React, { useState } from 'react'
import { TextField, Button } from "@material-ui/core"
import GenderRadio from "../GenderRadio"
import { useDispatch } from 'react-redux'
import { addStudent } from '../state/students/students-actions'
import HouseList from '../HouseList'



export const AddStudent = () => {


    const dispatch = useDispatch()

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        gender: 'M',
        id_house: ''
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value, });
    };


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addStudent(state))
    }

    return (
        <>
            <TextField id="first-name" label="First Name" name="firstname" value={state.firstname} onChange={handleChange('firstname')} />
            <TextField id="last-name" label="Last Name" name="lastname" value={state.lastname} onChange={handleChange('lastname')} />
            <GenderRadio name="gender" value={state.gender} onChange={handleChange('gender')}></GenderRadio>
            <HouseList name="id_house" value={state.id_house} onChange={handleChange('id_house')} ></HouseList>
            <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}> Envoyer</Button>
        </>)
}


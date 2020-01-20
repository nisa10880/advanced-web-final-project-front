import React, { useState } from 'react'
import { TextField, Button } from "@material-ui/core"
import GenderRadio from "./GenderRadio"
import { useDispatch } from 'react-redux'
import { addProfessor } from './state/professors/professors-actions'



export const AddProfessor = () => {


    const dispatch = useDispatch()

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        gender: 'M',
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value, });
    };


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addProfessor(state))
    }

    return (
        <div className="App">
            <TextField id="first-name" label="First Name" name="firstname" value={state.firstname} onChange={handleChange('firstname')} />
            <TextField id="last-name" label="Last Name" name="lastname" value={state.lastname} onChange={handleChange('lastname')} />
            <GenderRadio name="gender" value={state.gender} onChange={handleChange('gender')}></GenderRadio>
            <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}> Envoyer</Button>
        </div >)
}


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action/actions';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
}));

function AddUser() {
    const navigate = useNavigate()
    const classes = useStyles();
    let [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: ""
    });

    let [error, setError] = useState("");

    let dispatch = useDispatch();

    const { name, email, contact, address } = state;

    const onHandleChnge = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    let onHandleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !contact || !address) {
            setError("Pease input all inouts field")
        } else {
            setError("");
            dispatch(addUser(state));
            navigate('/');
        }
    }

    return (
        <div>
            <h2>Add Users</h2>
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            <form className={classes.root} onSubmit={onHandleSubmit} noValidate autoComplete="off">
                <TextField onChange={onHandleChnge} name="name" id="standard-basic" label="Name" value={name} type="text" /> <br></br>
                <TextField onChange={onHandleChnge} name="email" id="standard-basic" label="Email" value={email} type="email" /> <br></br>
                <TextField onChange={onHandleChnge} name="contact" id="standard-basic" label="Contact" value={contact} type="number" /> <br></br>
                <TextField onChange={onHandleChnge} name="address" id="standard-basic" label="Address" value={address} type="text" /> <br></br>
                <Button style={{ width: '100px' }} variant="contained" type='submit' color="primary">Submit</Button>
            </form>
        </div>
    );
}

export default AddUser;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser, updateUser } from '../redux/action/actions';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
}));

function EditUser() {
    const classes = useStyles();
    let [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: ""
    });

    let [error, setError] = useState("");
    let { id } = useParams();

    let { user } = useSelector((st) => st.data);

    let dispatch = useDispatch();
    let navigate = useNavigate()
    const { name, email, contact, address } = state;
    const onHandleChnge = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    useEffect(() => {
        dispatch(getSingleUser(id))
    }, []);

    useEffect(() => {
        if (user) {
            setState({ ...user })
        }
    }, [user])

    let onHandleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !contact || !address) {
            setError("Pease input all inouts fields")
        } else {
            setError("");
            dispatch(updateUser(state, id));
            navigate('/');

        }
    }
    return (
        <div>
            <h2>Edit User</h2>
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            <form className={classes.root} onSubmit={onHandleSubmit} noValidate autoComplete="off">
                <TextField onChange={onHandleChnge} name="name" id="standard-basic" label="Name" value={name || ""} type="text" /> <br></br>
                <TextField onChange={onHandleChnge} name="email" id="standard-basic" label="Email" value={email || ""} type="email" /> <br></br>
                <TextField onChange={onHandleChnge} name="contact" i d="standard-basic" label="Contact" value={contact || ""} type="number" /> <br></br>
                <TextField onChange={onHandleChnge} name="address" id="standard-basic" label="Address" value={address || ""} type="text" /> <br></br>
                <Button onChange={onHandleChnge} style={{ width: '100px' }} variant="contained" type='submit' color="primary">update</Button>
            </form>
        </div>
    );
}

export default EditUser;
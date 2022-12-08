import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
}));

function AddUser() {
    const classes = useStyles();
    let [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: ""
    });

    const { name, email, contact, address } = state;

    return (
        <div>
            <h2>Add Users</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Name" value={name} type="text" /> <br></br>
                <TextField id="standard-basic" label="Email" value={email} type="email" /> <br></br>
                <TextField id="standard-basic" label="Contact" value={contact} type="number" /> <br></br>
                <TextField id="standard-basic" label="Address" value={address} type="text" />
            </form>
        </div>
    );
}

export default AddUser;
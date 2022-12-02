import * as type from './actionType';
import axios from 'axios';
const getUsers = (users)=> ({
    type: type.GET_USERS,
    payload: users
});

export const loaderUsers  = () => {
    return function (dispatch) {
       axios.get(`${process.env.REACT_APP_API}`).then((resp) =>{
        console.log("data", resp);
        dispatch(getUsers(resp.data))
       }).catch(error => console.log(error));
    }
}
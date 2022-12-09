import * as types from './actionType';
import axios from 'axios';
const getUsers = (users)=> ({
    type: types.GET_USERS,
    payload: users
});
const userDeleted = ()=> ({
    type: types.DELETE_USER
});
const userAdded = ()=> ({
    type: types.ADD_USER
})
export const loaderUsers  = () => {
    return function (dispatch) {
       axios.get(`${process.env.REACT_APP_API}`).then((resp) =>{
        console.log("data", resp);
        dispatch(getUsers(resp.data))
       }).catch(error => console.log(error));
    }
}
export const deleteUser = (id) => {
    return function (dispatch) {
       axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) =>{
        console.log("data", resp);
        dispatch(userDeleted());
        dispatch(loaderUsers())
       }).catch(error => console.log(error));
    }
}

export const addUser = (user) => {
    return function (dispatch) {
       axios.post(`${process.env.REACT_APP_API}`, user).then((resp) =>{
        console.log("data", resp);
        dispatch(userAdded());
        dispatch(loaderUsers())
       }).catch(error => console.log(error));
    }
}
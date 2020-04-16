import {userActionTypes} from "./user.types";

export const getUserSession = user => ({
    type: userActionTypes.SET_USER_SESSION,
    payload: user
})

export const getAllUsers = users => ({
    type: userActionTypes.GET_ALL_USERS,
    payload: users
})
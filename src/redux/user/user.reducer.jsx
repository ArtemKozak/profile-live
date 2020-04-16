import {userActionTypes} from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_USER_SESSION:
            return {
                ...state,
                currentUser: action.payload
            }
        case userActionTypes.GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
};

export default userReducer;
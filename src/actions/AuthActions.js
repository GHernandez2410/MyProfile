import actionTypes from '../types/actionTypes';

export const signIn = (userId, userEmail) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: userId, 
        userEmail: userEmail
    }
}

export const signOut = () => {
    return {
        type: actionTypes.SIGN_OUT
    }
}
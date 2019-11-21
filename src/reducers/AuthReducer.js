import actionTypes from '../types/actionTypes';

const initialState = {
    isSignedIn: null,
    userId: null,
    userEmail: null
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload, userEmail: action.userEmail
            } 

        case actionTypes.SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null, userEmail: null
            }

        default:
            return state;
    }
}

export default AuthReducer;

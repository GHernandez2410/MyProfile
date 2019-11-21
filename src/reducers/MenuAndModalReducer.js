import actionTypes from '../types/actionTypes';

const initialState = {
    expanded: true,
    successModal: false,
    errorModal: false,
    loading: false
}

const MenuAndModalReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.EXPAND : {
            return Object.assign({}, state, {
                expanded: action.expanded
            })  
        }
        case actionTypes.OPEN_SUCCESS_MODAL : {
            return Object.assign({}, state, {
                successModal: true
            })  
        }
        case actionTypes.CLOSE_SUCCESS_MODAL : {
            return Object.assign({}, state, {
                successModal: false,
                loading: false
            })  
        }
        case actionTypes.OPEN_ERROR_MODAL : {
            return Object.assign({}, state, {
                errorModal: true
            })  
        }
        case actionTypes.CLOSE_ERROR_MODAL : {
            return Object.assign({}, state, {
                errorModal: false,
                loading: false
            })  
        }

        case actionTypes.LOADING : {
            return Object.assign({}, state, {
                loading: true
            })  
        }
        
        default:
            return state;
    }  
    
}

export default MenuAndModalReducer;
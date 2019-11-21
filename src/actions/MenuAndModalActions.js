import actionTypes from '../types/actionTypes';

export const expand = (expand) => dispatch => {
    dispatch({ type: actionTypes.EXPAND, expanded: expand})
}

export const closeSuccessModal = () => dispatch => {
    dispatch({ type: actionTypes.CLOSE_SUCCESS_MODAL })
}

export const closeErrorModal = () => dispatch => {
    dispatch({ type: actionTypes.CLOSE_ERROR_MODAL })
}

export const loading = () => dispatch => {
    dispatch({ type: actionTypes.LOADING })
}
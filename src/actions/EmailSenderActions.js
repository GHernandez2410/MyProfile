import emailSender from '../api/emailSender';
import actionTypes from '../types/actionTypes';

export const sendEmail = (email) => async dispatch => {
    dispatch({ type: actionTypes.LOADING })
    await emailSender.post('/send-mail',email)
    .then(() => {
        dispatch({ type: actionTypes.OPEN_SUCCESS_MODAL})
    })
    .catch(() => {
        dispatch({ type: actionTypes.OPEN_ERROR_MODAL})
    })
}
import axios from 'axios';
import apiTypes from './apiTypes'

export default axios.create({
    baseURL: apiTypes.emailSenderURL
})
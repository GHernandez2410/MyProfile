import {combineReducers} from 'redux';

import MenuAndModalReducer from './MenuAndModalReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    menu: MenuAndModalReducer,
    auth: AuthReducer
})
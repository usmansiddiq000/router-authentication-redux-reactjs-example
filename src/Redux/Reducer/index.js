import { combineReducers } from 'redux';

import { AuthReducer, AuthStart } from './authReducer';

export default combineReducers({
    AuthReducer,
    AuthStart
  })
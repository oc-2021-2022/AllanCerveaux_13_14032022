import { combineReducers } from '@reduxjs/toolkit';
import { authenticationReducer } from './authSlice';
import { userReducer } from './userSlice';

export default combineReducers({
  authentication: authenticationReducer,
  user: userReducer
})

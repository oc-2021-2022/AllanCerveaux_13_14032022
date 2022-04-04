import { combineReducers } from '@reduxjs/toolkit';
import { authenticationReducer } from './authSlice';

export default combineReducers({
  authentication: authenticationReducer,
})

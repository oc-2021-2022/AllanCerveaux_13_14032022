import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authSlice';

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
  }
})

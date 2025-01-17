import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ERROR, PENDING, SUCCESSFUL } from '../config/constant';
import { login, profile } from '../services/api';
import * as authentication_service from '../services/authentication';

export const authenticationCheck = createAsyncThunk(
  "authentication/check",
  async (thunkAPI) => {
    try {
      if (authentication_service.isAuthenticated()) {
        const token = authentication_service.getToken()
        const response = await profile()
        let data = await response.data
        if (response.status === 200) {
          return { token, data }
        } else {
          return thunkAPI.rejectWithValue(data)
        }
      }
      return {
        token: null,
        user: {}
      }
    } catch (error) {
      console.log('error', error.response.data)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

export const logoutUser = createAsyncThunk('authentication/logout', authentication_service.logout);

export const loginUser = createAsyncThunk(
  "authentication/login",
  async ({email, password, rememberMe}, thunkAPI) => {
    try {
      const response = await login({ email, password })
      let data = await response.data;
      if (response.status === 200) {
        rememberMe ?
          localStorage.setItem('token', data.body.token) :
          sessionStorage.setItem('token', data.body.token)
        return {...data}
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    }
    catch (error) {
      console.log('error', error.response.data)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const initialState = {
  status: PENDING,
  error: null,
  isAuthenticated: false,
  token: null
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: { },
  extraReducers: {
    [authenticationCheck.pending]: (state) => {
      Object.assign(state, {
        status: PENDING,
        error: null
      })
    },
    [authenticationCheck.fulfilled]: (state, { payload }) => {
      const { token, data } = payload
      Object.assign(state, {
        status: SUCCESSFUL,
        isAuthenticated: !!token,
        token
      })
    },
    [authenticationCheck.rejected]: (state, action) => {
      Object.assign(state, {
        status: ERROR,
        error: action.error
      })
    },
    [loginUser.pending]: (state) => {
      Object.assign(state, {
        status: PENDING,
        error: null
      })
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { token } = payload.body
      
      Object.assign(state, {
        status: SUCCESSFUL,
        isAuthenticated: true,
        token
      })
    },
    [loginUser.rejected]: (state, action) => {
      Object.assign(state, {
        status: ERROR,
        error: action.error
      })
    },
    [logoutUser.pending]: (state) => {
      Object.assign(state, {
        status: PENDING,
        error: null
      })
    },
    [logoutUser.fulfilled]: (state) => 
      Object.assign(state, {
        ...initialState,
        status: SUCCESSFUL,
        loading: false,
      }),
    [logoutUser.rejected]: (state, action) => {
      Object.assign(state, {
        status: ERROR,
        error: action.error
      })
    }
  }
})



export const selectAuth = (state) => state.authentication

export const authenticationReducer = authenticationSlice.reducer


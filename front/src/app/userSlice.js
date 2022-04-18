import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ERROR, PENDING, SUCCESSFUL } from '../config/constant';
import { updateProfile } from '../services/api';
import { authenticationCheck, logoutUser } from './authSlice';

export const updateUser = createAsyncThunk(
  'user/upateUser',
  async ({ firstName, lastName }, thunkAPI) => {
    try {
      const response = await updateProfile({ firstName, lastName })
      const data = await response.data
      if (response.status === 200) {
        return {...data}
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (error) {
      console.log('error', error.response.data)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const initialState = {
  status: PENDING,
  currentUser: {},
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { },
  extraReducers: {
    [authenticationCheck.fulfilled]: (state, { payload }) => {
      Object.assign(state, {
        currentUser: payload?.data?.body || []
      })
    },
    [logoutUser.fulfilled]: (state) => {
      Object.assign(state, {
        ...initialState,
        status: SUCCESSFUL
      })
    },
    [updateUser.pending]: (state) => {
      Object.assign(state, {
        status: PENDING,
        error: null
      })
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { firstName, lastName } = payload.body
      Object.assign(state, {
        status: SUCCESSFUL,
        currentUser: {
          ...state.currentUser,
          firstName,
          lastName
        },
        loading: false,
      })
    },
    [updateUser.rejected]: (state, action) => {
      Object.assign(state, {
        status: ERROR,
        error: action.error
      })
    },
  }
})

export const selectUser = (state) => state.user
export const { setCurrentUser } = userSlice.actions
export const userReducer = userSlice.reducer

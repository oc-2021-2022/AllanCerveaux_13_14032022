import React, { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticationCheck, selectAuth } from '../app/authSlice'

export const AuthenticationContext = createContext()

export function AuthenticationProvider({ children }) {
  const { loggedInUser, isAuthenticated } = useSelector(selectAuth)
  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  
  useEffect(() => {
    dispatch(authenticationCheck())
  }, [dispatch, isAuthenticated])

  useEffect(() => {
    setUser(loggedInUser)
  }, [loggedInUser])
  
  return (
    <AuthenticationContext.Provider value={[user, setUser]}>
      {children}
    </AuthenticationContext.Provider>
  )
}

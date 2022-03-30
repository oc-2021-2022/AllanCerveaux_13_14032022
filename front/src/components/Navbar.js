import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { authenticationCheck, selectAuth } from '../app/authSlice'
import Logo from '../assets/images/argentBankLogo.png'
import { logout } from '../services/authentication'

export default function Navbar() {
  const [user, setUser] = useState(false)
  const { loggedInUser } = useSelector(selectAuth)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(authenticationCheck())
  }, [dispatch])

  useEffect(() => {
    setUser(loggedInUser)
  }, [loggedInUser])
  
  const logOut = () => dispatch(logout())

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {
          !!user ? (
            <>
              <Link className="main-nav-item" to="/login">
                <i className="fa fa-user-circle"></i>
                { user?.firstName }
              </Link>
              <a className="main-nav-item" href='#' onClick={logOut}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </a>
            </>
          ): (
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )
        }
      </div>
    </nav>
  )
}

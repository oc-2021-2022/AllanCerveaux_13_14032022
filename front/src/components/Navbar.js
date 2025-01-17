import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logoutUser } from '../app/authSlice'
import { selectUser } from '../app/userSlice'
import Logo from '../assets/images/argentBankLogo.png'

export default function Navbar() {
  const { currentUser } = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { from = { pathname: '/' } } = location
  
  const logOut = async () => {
    await dispatch(logoutUser())
    navigate(from.pathname, { state: {from}, replace: true })
  }

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
          Object.entries(currentUser).length ? (
            <>
              <Link className="main-nav-item" to="/profile">
                <i className="fa fa-user-circle"></i>
                { currentUser?.firstName }
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

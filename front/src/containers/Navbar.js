import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAuth } from '../app/authSlice'
import Logo from '../assets/images/argentBankLogo.png'
export function Navbar() {
  return (
    <nav class="main-nav">
      <Link class="main-nav-logo" to="/">
        <img
          class="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" to="/login">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  )
}

function AuthenticatedLink() {
  const {isAutenticated, loggedInUser} = useSelector(selectAuth)
  if (isAutenticated) {
    return (
      <Link class="main-nav-item" to="/login">
        <i class="fa fa-user-circle"></i>
        {loggedInUser}
      </Link>
    )
  }
}

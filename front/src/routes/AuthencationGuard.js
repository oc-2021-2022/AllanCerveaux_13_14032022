import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { authenticationCheck, logout, selectAuth } from '../app/authSlice';
import { PENDING } from '../config/constant';

export default function AuthenticationGuard() {
  const { status, error } = useSelector(selectAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticationCheck())
  }, [dispatch])

  return status === PENDING ?
    (
      <p>loading...</p>
    ) : (
      <>
        { error }
        <RoutedComponent />
      </>
    )
}

function RoutedComponent() {
  const { isAuthenticated } = useSelector(selectAuth)
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isLoginPagePathname = location.pathname.includes('login')
  if (isAuthenticated) {
    if (isLoginPagePathname) {
      const { from = { pathname: '/profile' } } = location;
      return <Navigate to={from.pathname} state={{ from }} replace />;
    }
    return (
      <>
        <Outlet />
        <button
          onClick={async () => {
            await dispatch(logout());
            navigate('/');
          }}
        >
          logout
        </button>
      </>
    ) 
  } else {
    if (isLoginPagePathname) {
      return <Outlet />;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}

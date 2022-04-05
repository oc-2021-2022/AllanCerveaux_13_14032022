import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { authenticationCheck, selectAuth } from '../app/authSlice';
import Errror from '../components/Error';
import { PENDING } from '../config/constant';
import Dashboard from '../containers/Dashboard';
import Home from '../containers/Home';
import Login from '../containers/Login';

export default function MainRoutes() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route element={<AuthenticationMiddleware />} >
        <Route path='/profile' element={<Dashboard />} />
      </Route>
      <Route path='*' element={<Errror />} />
    </Routes>
  )
}


function AuthenticationMiddleware() {
  const dispatch = useDispatch()
  const { status, isAuthenticated } = useSelector(selectAuth)
  
  useEffect(() => {
    dispatch(authenticationCheck())
  }, [dispatch])
  if(status === PENDING) return <p>loading...</p>
  return isAuthenticated ? <Outlet/> : <Navigate to='/login' replace />

}

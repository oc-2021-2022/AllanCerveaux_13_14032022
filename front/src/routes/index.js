import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { selectAuth } from '../app/authSlice';
import Errror from '../components/Error';
import Dashboard from '../containers/Dashboard';
import Home from '../containers/Home';
import Login from '../containers/Login';

export default function MainRoutes() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<AuthenticationMiddleware />} >
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Dashboard />} />
      </Route>
      <Route path='*' element={<Errror />} />
    </Routes>
  )
}


function AuthenticationMiddleware() {
  const location = useLocation()
  const { isAuthenticated } = useSelector(selectAuth)
  if (isAuthenticated) {
    if (location.pathname.includes('login')) {
      return <Navigate to='/profile' replace/>
    }
    return <Outlet />
  }
  else {
    if (location.pathname.includes('login')) {
      return <Outlet />;
    }

    return <Navigate to="/login" replace />;
  }
}


import { Route, Routes } from 'react-router-dom';
import Errror from '../components/Error';
import Dashboard from '../containers/Dashboard';
import Home from '../containers/Home';
import Login from '../containers/Login';
import AuthenticationGuard from './AuthencationGuard';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Errror />} />
      <Route element={<AuthenticationGuard/>}>
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

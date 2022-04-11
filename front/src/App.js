import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { authenticationCheck, selectAuth } from './app/authSlice';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainRoutes from './routes';
import './sass/App.scss';

function App() {
  const { isAuthenticated } = useSelector(selectAuth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authenticationCheck())
  }, [dispatch, isAuthenticated])

  return (
    <BrowserRouter>
      <Navbar />
      <MainRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AuthenticationProvider } from './providers/Authentication';
import MainRoutes from './routes';
import './sass/App.scss';

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Navbar />
        <MainRoutes />
      </AuthenticationProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

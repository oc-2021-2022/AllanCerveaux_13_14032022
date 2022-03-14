import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import './sass/App.scss';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;

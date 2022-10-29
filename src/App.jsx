import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import './index.css';
import RegistrationForm from './components/Registration';
import EmailComform from './components/EmailConform';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/emailvalidation" element={<EmailComform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

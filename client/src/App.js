import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import RegisterPage from './Register/RegisterPage';
import MultiStepForm from './Register/ClientRegister/MultiStepForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/client-multi" element={<MultiStepForm/>} />
      </Routes>
    </Router>
  );
}

export default App;

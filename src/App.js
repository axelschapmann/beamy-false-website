import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import LocalViewPage from './pages/LocalViewPage'; // Import the new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/localview" element={<LocalViewPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

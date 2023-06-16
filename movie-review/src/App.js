import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import Navigation from './components/Navigation';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

        <div className="app-content">
          <Routes>
            <Route path="/" element={<LoginForm handleLogin={handleLogin} />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
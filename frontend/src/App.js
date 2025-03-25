import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { AuthContext } from './context/AuthContext';
import { FaSignOutAlt } from 'react-icons/fa';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="app">
        <header className="header">
          <h1 className="logo">YADRO</h1>
          {user ? (
            <div className="user-info">
              <span className="username">{user.firstName}</span>
              <FaSignOutAlt className="logout-icon" onClick={handleLogout} />
            </div>
          ) : (
            <button 
              onClick={() => window.location.href = '/register'}
              className="register-btn"
            >
              Зарегистрироваться
            </button>
          )}
        </header>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
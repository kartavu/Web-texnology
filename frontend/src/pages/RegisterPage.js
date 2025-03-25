import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './RegisterPage.css';

const RegisterPage = () => {
  const { setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов');
      return;
    }
    
    // Сохраняем пользователя в контекст
    setUser({
      firstName: formData.firstName,
      email: formData.email
    });
    
    navigate('/');
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
        {error && <p className="error-message">{error}</p>}
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="Email" 
          required 
        />
        <input 
          type="text" 
          name="firstName"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          placeholder="Имя" 
          required 
        />
        <input 
          type="text" 
          name="lastName"
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          placeholder="Фамилия" 
          required 
        />
        <input 
          type="password" 
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          placeholder="Пароль (мин. 6 символов)" 
          required 
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export { RegisterPage };
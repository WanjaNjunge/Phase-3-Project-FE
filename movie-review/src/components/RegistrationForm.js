import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./RegistrationForm.css"

const RegistrationForm = ({ loadLoginForm }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9292/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        // Registration successful, perform any necessary actions
        console.log('Registration successful');
        navigate('/'); // Redirect to the login page
      } else {
        // Registration failed, handle error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="registration-form">
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Username:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
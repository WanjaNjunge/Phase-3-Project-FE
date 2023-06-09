import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Send a POST request to the login endpoint with user credentials
      const response = await fetch('http://localhost:9292/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login response data:', data); // Log the response data

      if (response.ok) {
        // Login successful, perform necessary actions (e.g., store authentication token)
        console.log('Login successful');
        setMessage('Login successful');
      } else {
        // Login failed, display error message
        console.log('Login failed:', data.message);
        setMessage('Login failed');
      }
    } catch (error) {
      console.log('Error:', error.message);
      setMessage('An error occurred');
    }
  };

  const handleRegister = async () => {
    try {
      // Send a POST request to the register endpoint with user credentials
      const response = await fetch('http://localhost:9292/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Register response data:', data); // Log the response data

      if (response.ok) {
        // Registration successful, perform necessary actions
        console.log('Registration successful');
        setMessage('Registration successful');
      } else {
        // Registration failed, display error message
        console.log('Registration failed:', data.message);
        setMessage('Registration failed');
      }
    } catch (error) {
      console.log('Error:', error.message);
      setMessage('An error occurred');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
    </div>
  );
};

export default LoginForm;
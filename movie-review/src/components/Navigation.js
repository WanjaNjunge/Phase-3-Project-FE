import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav>
      <ul>
        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : null}
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navigation;
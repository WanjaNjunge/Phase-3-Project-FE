import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import MovieList from "./components/MovieList";
import ReviewForm from "./components/ReviewForm";
import { login, getMovies, createReview } from "./api";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      // Fetch movies when the user is logged in
      getMovies()
        .then((data) => setMovies(data))
        .catch((error) => console.log(error));
    } else {
      // Clear movies when the user logs out
      setMovies([]);
    }
  }, [loggedIn]);

  const handleLogin = (credentials) => {
    login(credentials)
      .then(() => setLoggedIn(true))
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleCreateReview = (reviewData) => {
    createReview(reviewData)
      .then((data) => {
        // Add the created review to the list
        setMovies([...movies, data]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {!loggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <h2>Movie List</h2>
          <MovieList movies={movies} />
          <ReviewForm onCreateReview={handleCreateReview} />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default App;
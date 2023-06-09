import React, { useState, useEffect } from 'react';
import './MovieApp.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const API_URL = 'http://localhost:9292/movies';  

const MovieApp = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`} className="movie-item-link">
            <div className="movie-item">
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.movie_image}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieApp;
import React, { useState, useEffect } from 'react';
import './Home.css';
import ReviewForm from './ReviewForm';

const API_URL = 'http://localhost:9292/movies'; // Replace with your API endpoint

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:9292/movies');
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleReviewAdded = (movieId, reviewText) => {
    const newReview = {
      id: reviews.length + 1, // Assuming you don't receive the ID from the backend
      movieId,
      reviewText,
    };
    setReviews([...reviews, newReview]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={`${BASE_URL}${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <ReviewForm movieId={movie.id} onReviewAdded={handleReviewAdded} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
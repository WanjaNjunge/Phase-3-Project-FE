import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import './App.css';

const API_KEY = '79b6e476480f1e9ea75e81bc7be0cdf6';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchQuery.trim() !== '') {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      )
        .then((response) => response.json())
        .then((data) => setSearchResults(data.results))
        .catch((error) => console.log(error));
    } else {
      setSearchResults([]);
    }
  };

  return (
    <BrowserRouter>
      <div className="container" > 
        <h1 className="h1">FLIX Movies</h1>

        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search for a movie..."
          />
          <button type="submit">Search</button>
        </form>

        <Routes>
          <Route path="/" element={<Home movies={movies} searchResults={searchResults} />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home({ movies, searchResults }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const displayedMovies = searchResults.length > 0 ? searchResults : movies;

  return (
    <div className="popular-movies">
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        {displayedMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <h2>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </h2>
            {movie.poster_path && (
              <img src={`${BASE_URL}${movie.poster_path}`} alt={movie.title} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

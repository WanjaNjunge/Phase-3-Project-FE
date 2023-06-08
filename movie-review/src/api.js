const API_BASE_URL = "http://localhost:9292";

export function login(credentials) {
  return fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json());
}

export function getMovies() {
  return fetch(`${API_BASE_URL}/movies`)
    .then((response) => response.json());
}

export function createMovie(movieData) {
  return fetch(`${API_BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieData),
  })
    .then((response) => response.json());
}

export function signUp(credentials) {
  return fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json());
}

// Add additional API functions for updating and deleting movies, as needed

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

export function createReview(reviewData) {
  return fetch(`${API_BASE_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
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

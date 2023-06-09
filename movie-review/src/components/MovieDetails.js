import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = '79b6e476480f1e9ea75e81bc7be0cdf6';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.log(error));
  }, [movieId]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setReviews(data.results))
      .catch((error) => console.log(error));
  }, [movieId]);

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    if (reviewText.trim() !== '') {
      // Make a request to submit the review
      console.log('Submitting review:', reviewText);

      // Clear the review text
      setReviewText('');
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>

      <h3>Reviews</h3>
      {reviews.length === 0 && <p>No reviews available.</p>}
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.content}</p>
        </div>
      ))}

      <h3>Add a Review</h3>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          value={reviewText}
          onChange={(event) => setReviewText(event.target.value)}
          placeholder="Write your review..."
          rows="4"
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default MovieDetails;

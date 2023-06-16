import React from 'react';

const API_URL = 'http://localhost:9292/reviews'; // Replace with your API endpoint

const ReviewForm = ({ movieId, onReviewAdded }) => {
  const handleReviewClick = async () => {
    const reviewText = prompt('Enter your review:');
    if (reviewText) {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ movieId, reviewText }),
        });

        if (response.ok) {
          // Review added successfully
          onReviewAdded(movieId, reviewText);
        } else {
          // Review addition failed, handle error
          console.error('Failed to add review');
        }
      } catch (error) {
        console.error('Error adding review:', error);
      }
    }
  };

  return (
    <div>
      <button onClick={handleReviewClick}>Add Review</button>
    </div>
  );
};

export default ReviewForm;
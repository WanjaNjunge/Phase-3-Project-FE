import React, { useState } from "react";
import { createReview } from "../api";

const ReviewForm = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new review
    createReview({ comment })
      .then(() => {
        // Clear the form inputs
        setComment("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;

import React, { useState } from "react";
import { createMovie } from "../api";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new movie
    createMovie({ title, description })
      .then(() => {
        // Clear the form inputs
        setTitle("");
        setDescription("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Add a Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;

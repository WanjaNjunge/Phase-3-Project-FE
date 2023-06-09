
In this Project, we have three models: User, Movie, and Review. Our model for the file is as follows:


Movies to Reviews: Many reviews can be written for a single movie, and a review can be associated with multiple movies. This relationship represents the reviews given by users for different movies. (many-to-many relationship).

A review is associated with a user, and a user can have multiple reviews (one-to-many relationship)

A movie can be associated with multiple users and a user can have multiple movies.(Many to Many Relationship)

Features

Real-time search results The web app uses JavaScript to display search results. The search results are fetched from our ruby back-end and displayed in a grid layout.

Filter movies by genre and release year The web app allows users to filter movies by genre and release year using dropdown menus. 

Our Ruby back-end fetches the movie data from the TMDb API.

Display search results on the page The web app uses JavaScript to display search results on the page. The search results are displayed in a grid layout using HTML and CSS. Each search result displays the movie poster, title, release date, and overview.


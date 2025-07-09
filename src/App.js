import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const initialMovies = [
  {
    title: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology.",
    posterURL: "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_.jpg",
    rating: 5,
  },
  {
    title: "The Dark Knight",
    description: "Batman battles the Joker in Gotham City.",
    posterURL: "https://m.media-amazon.com/images/I/51k0qaipm1L._AC_.jpg",
    rating: 4,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filter movies based on title and rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );

  return (
    <div className="App" style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterRate={filterRate}
        setFilterRate={setFilterRate}
      />
      <MovieList movies={filteredMovies} addMovie={addMovie} />
    </div>
  );
}

export default App;

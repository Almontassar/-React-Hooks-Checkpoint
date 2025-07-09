import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, addMovie }) {
  // Local state for new movie form
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: name === "rating" ? Number(value) : value });
  };

  const handleAdd = () => {
    if (!newMovie.title.trim()) {
      alert("Title is required");
      return;
    }
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 1 });
  };

  return (
    <div>
      <h2>Movies</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 15,
          marginBottom: 30,
        }}
      >
        {movies.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} />
        ))}
      </div>

      <h3>Add New Movie</h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleChange}
        style={{ marginRight: 10, padding: 5 }}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
        style={{ marginRight: 10, padding: 5, width: 300 }}
      />
      <input
        type="text"
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleChange}
        style={{ marginRight: 10, padding: 5, width: 300 }}
      />
      <select
        name="rating"
        value={newMovie.rating}
        onChange={handleChange}
        style={{ marginRight: 10, padding: 5 }}
      >
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <button onClick={handleAdd} style={{ padding: "5px 15px" }}>
        Add Movie
      </button>
    </div>
  );
}

export default MovieList;

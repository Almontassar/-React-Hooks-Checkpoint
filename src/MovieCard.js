import React from "react";

function MovieCard({ movie }) {
  const { title, description, posterURL, rating } = movie;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        width: 200,
        padding: 10,
        borderRadius: 6,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={posterURL || "https://via.placeholder.com/200x300?text=No+Image"}
        alt={title}
        style={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 4 }}
      />
      <h3>{title}</h3>
      <p style={{ fontSize: 14 }}>{description}</p>
      <p>⭐ {rating}/5</p>
    </div>
  );
}

export default MovieCard;

import { useNavigate } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets...',
    posterURL: 'https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_.jpg',
    rating: 5,
    trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0',
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div
          key={movie.id}
          onClick={() => navigate(`/movie/${movie.id}`)}
          style={{ cursor: 'pointer', border: '1px solid black', margin: '10px', padding: '10px' }}
        >
          <img src={movie.posterURL} alt={movie.title} width={100} />
          <h3>{movie.title}</h3>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;

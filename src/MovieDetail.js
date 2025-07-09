import { useParams, useNavigate } from 'react-router-dom';

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

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      />
      <br />
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default MovieDetail;

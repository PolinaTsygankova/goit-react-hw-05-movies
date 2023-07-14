import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieListForHomepage } from 'servise/fetchMovieListForHomepage';

const Home = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetchMovieListForHomepage()
      .then(response => setFilms(response))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {films &&
          films.results.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title || name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;

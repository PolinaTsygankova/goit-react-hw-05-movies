import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies, page }) => {
  const location = useLocation();

  return (
    <ul>
      {movies && movies?.results.length === 0 ? (
        <h2>Sorry, no films were found</h2>
      ) : (
        movies?.results.map(({ id, title, name }) => (
          <li key={id}>
            <Link
              to={page === 'home' ? `movies/${id}` : `${id}`}
              state={{ from: location }}
            >
              {title || name}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.object,
};

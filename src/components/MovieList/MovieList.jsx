import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies?.results.length === 0 ? (
        <h2>Sorry, no films were found</h2>
      ) : (
        movies?.results.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
};

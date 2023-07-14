import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { GoBackBtn } from './MovieDetails.styled';
import { fetchMovieWithId } from '../../servise/fetchMovieWithId';
const defaultPoster =
  'https://img.freepik.com/free-vector/cinema-film-production-realistic-transparent-composition-with-isolated-image-clapper-with-empty-fields-vector-illustration_1284-66163.jpg?w=996&t=st=1689375638~exp=1689376238~hmac=627e1995e0ae8a8e9628774d0b83ac2bd965687c8df0c7d601ba84feed25341c';

const MovieDetails = () => {
  const [filmInfo, setFilmInfo] = useState(null);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMovieWithId(params.movieId)
      .then(response => setFilmInfo(response))
      .catch(err => console.error(err));
  }, [params.movieId]);

  if (!filmInfo || filmInfo === null) {
    return;
  }

  const { title, name, vote_average, poster_path, overview, genres } = filmInfo;

  function getGenres() {
    if (genres) {
      return Object.values(genres)
        .map(genr => genr.name)
        .join(', ');
    }
  }

  return (
    <>
      {filmInfo ? (
        <div>
          <GoBackBtn to={location.state?.from ?? '/'}> ⬅ Go back</GoBackBtn>
          <h1>{title || name} </h1>
          <p>User Score: {vote_average && Math.round(vote_average)} </p>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : defaultPoster
            }
            alt={title || name}
          />
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{getGenres()}</p>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      ) : (
        <p>Sorry, we couldn`t find information</p>
      )}
    </>
  );
};

export default MovieDetails;

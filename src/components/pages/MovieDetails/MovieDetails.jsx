import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { GoBackBtn } from './MovieDetails.styled';

const MovieDetails = () => {
  const [filmInfo, setFilmInfo] = useState(null);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjY5MWY1OTNlYjc0MjU5MmFkMDFlNmZiNjBhMDE5YiIsInN1YiI6IjY0YTY4YTUxNzI0ZGUxMDBjNWU5ODNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqT4KdHOxcFDAo6pMr4lLuCDSt37dEUmae-2jFbOSdU',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`,
      options
    )
      .then(response => response.json())
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
      {filmInfo && (
        <div>
          <GoBackBtn to={location.state?.from ?? '/'}> ⬅ Go back</GoBackBtn>
          <h1>{title || name} </h1>
          <p>User Score: {vote_average && Math.round(vote_average)} </p>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
      )}
    </>
  );
};

export default MovieDetails;

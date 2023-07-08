import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const params = useParams();

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
      `https://api.themoviedb.org/3/movie/${params.movieId}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => setCast(response))
      .catch(err => console.error(err));
  }, [params.movieId]);

  return (
    <ul>
      {cast &&
        cast.cast.map(({ id, name, profile_path }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={name}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const [movieInfo, setMovieInfo] = useState(null);

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
      `https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => setMovieInfo(response))
      .catch(err => console.error(err));
  }, [movies]);

  console.log(movieInfo);

  return (
    <ul>
      {movieInfo &&
        movieInfo.results.map(item => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default MovieList;

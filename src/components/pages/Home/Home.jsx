import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState(null);

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
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => setFilms(response))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {films &&
          films.results.map(film => (
            <li key={film.id}>
              <Link to={`movies/${film.id}`}>{film.title || film.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;

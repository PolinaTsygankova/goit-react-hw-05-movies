import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Form from '../../components/Form/Form';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMoviesFromSearch } from 'servise/fetchMoviesFromSearch';

const Movies = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieFromURL = searchParams.get('movie') ?? '';

  const updateQueryString = movie => {
    const nextParams = movie !== '' ? { movie } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!movieFromURL) {
      return;
    }

    fetchMoviesFromSearch(movieFromURL)
      .then(response => setMovieInfo(response))
      .catch(console.error);
  }, [movieFromURL]);

  return (
    <>
      <Form onChange={updateQueryString} />
      <MovieList movies={movieInfo} />
    </>
  );
};

export default Movies;

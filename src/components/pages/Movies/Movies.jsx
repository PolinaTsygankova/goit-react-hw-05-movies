import { useSearchParams } from 'react-router-dom';
import React from 'react';
import Form from './../../Form/Form';
import MovieList from './../../MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieFromURL = searchParams.get('movie') ?? '';

  const updateQueryString = movie => {
    const nextParams = movie !== '' ? { movie } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <Form movie={movieFromURL} onChange={updateQueryString} />
      <MovieList movies={movieFromURL} />
    </>
  );
};

export default Movies;

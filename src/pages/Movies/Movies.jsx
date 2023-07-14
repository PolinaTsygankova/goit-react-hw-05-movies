import React, { useState, useEffect } from 'react';
import Form from '../../components/Form/Form';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMoviesFromSearch } from 'servise/fetchMoviesFromSearch';

const Movies = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleFormSubmit = movie => {
    setSearchText(movie);
  };

  useEffect(() => {
    if (searchText) {
      fetchMoviesFromSearch(searchText)
        .then(response => setMovieInfo(response))
        .catch(err => console.error(err));
    }
  }, [searchText]);

  return (
    <>
      <Form onChange={handleFormSubmit} />
      <MovieList movies={movieInfo} />
    </>
  );
};

export default Movies;

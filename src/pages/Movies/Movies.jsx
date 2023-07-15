import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Form from '../../components/Form/Form';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMoviesFromSearch } from 'servise/fetchMoviesFromSearch';

const Movies = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieFromURL = searchParams.get('movie') || '';
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleFormSubmit = useCallback(movie => {
    setSearchText(movie);
    setSubmitClicked(true);
  }, []);

  const updateQueryString = useCallback(
    movie => {
      const nextParams = movie !== '' ? { movie } : {};
      setSearchParams(nextParams);
    },
    [setSearchParams]
  );

  useEffect(() => {
    if (movieFromURL && submitClicked) {
      fetchMoviesFromSearch(movieFromURL)
        .then(response => setMovieInfo(response))
        .catch(console.error)
        .finally(() => setSubmitClicked(false));
    }
  }, [movieFromURL, submitClicked]);

  useEffect(() => {
    if (searchText && submitClicked) {
      fetchMoviesFromSearch(searchText)
        .then(response => {
          setMovieInfo(response);
          setSubmitClicked(false);
          updateQueryString(searchText);
        })
        .catch(console.error);
    }
  }, [searchText, submitClicked, updateQueryString]);

  return (
    <>
      <Form onSubmit={handleFormSubmit} updateQueryString={updateQueryString} />
      <MovieList movies={movieInfo} />
    </>
  );
};

export default Movies;

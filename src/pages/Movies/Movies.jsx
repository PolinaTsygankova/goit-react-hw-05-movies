import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Form from '../../components/Form/Form';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMoviesFromSearch } from 'servise/fetchMoviesFromSearch';

const Movies = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieFromURL = searchParams.get('movie') ?? '';
  const [submitClicked, setSubmitClicked] = useState(false);
  const [previousMovie, setPreviousMovie] = useState('');
  const [previousMovieInfo, setPreviousMovieInfo] = useState(null);

  const handleFormSubmit = movie => {
    setSearchText(movie);
    setSubmitClicked(true);
  };

  const updateQueryString = movie => {
    const nextParams = movie !== '' ? { movie } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieFromURL && submitClicked) {
      setMovieInfo(previousMovieInfo);
      setPreviousMovie(movieFromURL);
      setSubmitClicked(false);
    }
  }, [movieFromURL, submitClicked, previousMovieInfo]);

  useEffect(() => {
    if (searchText && submitClicked) {
      fetchMoviesFromSearch(searchText)
        .then(response => {
          setMovieInfo(response);
          setPreviousMovie(searchText);
          setPreviousMovieInfo(response);
        })
        .catch(err => console.error(err));
      setSubmitClicked(false);
      updateQueryString(searchText);
    }
  }, [searchText, submitClicked, updateQueryString]);

  useEffect(() => {
    if (!movieFromURL && previousMovie && previousMovieInfo) {
      setMovieInfo(previousMovieInfo);
      setSearchText(previousMovie);
    }
  }, [movieFromURL, previousMovie, previousMovieInfo]);

  return (
    <>
      <Form onSubmit={handleFormSubmit} />
      <MovieList movies={movieInfo} />
    </>
  );
};

export default Movies;

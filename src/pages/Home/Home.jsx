import { useState, useEffect } from 'react';
import { fetchMovieListForHomepage } from 'servise/fetchMovieListForHomepage';
import MovieList from './../../components/MovieList/MovieList';

const Home = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetchMovieListForHomepage()
      .then(response => setFilms(response))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Home</h1>
      <MovieList movies={films} page={'home'} />
    </>
  );
};

export default Home;

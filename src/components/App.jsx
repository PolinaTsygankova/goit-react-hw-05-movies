import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Layout from './Layout/Layout';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

// fb691f593eb742592ad01e6fb60a019b
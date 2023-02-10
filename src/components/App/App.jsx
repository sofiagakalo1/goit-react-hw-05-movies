import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Home from '../../pages/Home/Home';
import Cast from '../../pages/Cast/Cast';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import Movies from '../../pages/Movies/Movies';
import Reviews from '../../pages/Reviews/Reviews';

export const App = () => {
  return (
    <BrowserRouter>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

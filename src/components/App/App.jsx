import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import HomePage from '../../pages/Home/HomePage';
import CastPage from '../../pages/Cast/CastPage';
import MovieDetailsPage from '../../pages/MovieDetails/MovieDetailsPage';
import MoviesPage from '../../pages/Movies/MoviesPage';
import ReviewsPage from '../../pages/Reviews/ReviewsPage';

export const App = () => {
  return (
    <BrowserRouter>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

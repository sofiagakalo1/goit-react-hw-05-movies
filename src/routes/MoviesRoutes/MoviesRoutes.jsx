import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CastPage = lazy(() => import('../../pages/CastPage/CastPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const ReviewsPage = lazy(() => import('../../pages/ReviewsPage/ReviewsPage'));

const MoviesRotes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace="*"/>} />
      </Routes>
    </Suspense>
  );
};

export default MoviesRotes;

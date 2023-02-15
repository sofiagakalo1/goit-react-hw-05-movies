import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../utils/API/movies-api';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';
// import css from './HomePage.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await getTrendingMovies();
        // console.log(response); //response and data are objects // results is array of objects// response-data-results
        const { results } = response.data;
        setTrendingMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
      {error && <h1>error...</h1>}
      {loading && <Loader />}
      {/* <h1>HomePage</h1> */}
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default HomePage;

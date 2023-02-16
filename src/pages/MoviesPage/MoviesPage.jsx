import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesBySearch } from '../../utils/API/movies-api';
import Loader from '../../components/Loader/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';
import SearchBar from '../../components/SearchBar/SearchBar';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false);
  //   const [search, setSearch] = useState('');
  //щоб людина могла побачити що вона знайшла, ми маємо зберігати її запит в стоці адреси, а не в локальному стейті.
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const onSubmit = searchQuery => {
    // console.log(searchQuery);
    if (search === searchQuery) {
      return;
    }
    setSearchParams({ search: searchQuery });
    setSearchedMovies([]);
  };
  //   console.log(search);

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchMovies = async () => {
      console.log(search);
      try {
        const response = await getMoviesBySearch(search);
        const { results } = response.data;
        console.log(results);
        setSearchedMovies([...results]);
        setIsFetched(true);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [search]);

  const noResult = searchedMovies.length < 1 && isFetched;

  return (
    <>
      {/* <h1>Movies</h1> */}
      {error && <h1>error...</h1>}
      <SearchBar onSubmit={onSubmit} />
      {loading && <Loader />}
      {searchedMovies.length > 0 && <MoviesList movies={searchedMovies} />}
      {noResult && <p>We don't have such movie...</p>}
    </>
  );
};

export default Movies;

import { useState, useEffect } from 'react';
import { getMovieDetailsById } from '../../utils/API/movies-api';
import OneMovieDetails from '../../components/OneMovieDetails/OneMovieDetails';
import Loader from '../../components/Loader/Loader';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  //   console.log(movieId);
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId) {
      const fetchMovieDetails = async () => {
        try {
          setLoading(true);
          const response = await getMovieDetailsById(movieId);
          // console.log(response); //response and data are objects // results is array of objects// response-data-results
          const { data } = response;
          setMovieDetails(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchMovieDetails();
    }
  }, [movieId]);
  // console.log(movieDetails);
  return (
    <>
      {/* <h1>MovieDetails</h1> */}
      {error && <h1>error...</h1>}
      {loading && <Loader />}
      <OneMovieDetails movieDetails={movieDetails} />
    </>
  );
};

export default MovieDetailsPage;

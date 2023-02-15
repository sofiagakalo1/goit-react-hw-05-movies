import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from '../../utils/API/movies-api';
import Loader from '../../components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const response = await getMovieCast(movieId);
        console.log(response);
        const { cast } = response.data;
        setCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  const elements = cast.map(({ id, name, character }) => {
    return (
      <li key={id}>
        <p>{name}</p>
      </li>
    );
  });

  return (
    <>
      {/* <h1>Cast</h1> */}
      {error && <h1>error...</h1>}
      {loading && <Loader />}
      <ol>{elements}</ol>
    </>
  );
};

export default Cast;

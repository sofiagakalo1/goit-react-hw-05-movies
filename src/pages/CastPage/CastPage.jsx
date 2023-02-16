import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from '../../utils/API/movies-api';
import Loader from '../../components/Loader/Loader';
import { noCastMessage } from '../../components/messages/messages';

import css from './CastPage.module.css';

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

  const elements = cast.map(({ id, name }) => {
    return (
      <li key={id} className={css.li}>
        <p>{name}</p>
      </li>
    );
  });

  return (
    <>
      {/* <h1>Cast</h1> */}
      {error && <h1>Something went wrong...</h1>}
      {loading && <Loader />}
      {Boolean(cast.length) ? (
        <ul className={css.ul}>{elements}</ul>
      ) : (
        noCastMessage()
      )}
    </>
  );
};

export default Cast;

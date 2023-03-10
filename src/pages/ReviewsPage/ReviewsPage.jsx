import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../utils/API/movies-api';
import Loader from '../../components/Loader/Loader';
import { noReviewsMessage } from '../../components/messages/messages';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await getMovieReviews(movieId);
        const { results } = response.data;
        setReviews(results);
      } catch (error) {
        setError(error.messsage);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  const elements = reviews.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <p>Author: {author}</p>
        {<p>Review: {content}</p>}
      </li>
    );
  });

  return (
    <>
      {/* <h1>Reviews</h1> */}
      {error && <h1>Something went wrong...</h1>}
      {loading && <Loader />}
      {Boolean(reviews.length) ? (
        <ul>{elements}</ul>
      ) : (
        noReviewsMessage()
      )}
    </>
  );
};

export default Reviews;

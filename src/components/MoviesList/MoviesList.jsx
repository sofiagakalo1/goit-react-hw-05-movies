import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import NoPosterImg from '../../images/comingSoon.jpeg';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const elements = movies.map(({ id, title, poster_path }) => {
    if (poster_path) {
      return (
        <li key={id} className={css.li}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
            className={css.link}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={title}
              className={css.img}
            />
            <p className={css.title}>{title}</p>
          </Link>
        </li>
      );
    } else {
      return (
        <li key={id} className={css.li}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
            className={css.link}
          >
            <img src={NoPosterImg} alt={title} className={css.img} />
            <p className={css.title}>{title}</p>
          </Link>
        </li>
      );
    }
  });

  return (
    <div className={css.div}>
      <ul className={css.ul}>{elements}</ul>
    </div>
  );
};
export default MoviesList;

// MoviesList.defaultProps = {
//   movies: [],
// };

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

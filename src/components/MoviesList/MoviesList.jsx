import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const elements = movies.map(({ id, title, poster_path }) => {
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
  });
  return (
    <div className={css.div}>
      <ul className={css.ul}>{elements}</ul>
    </div>
  );
};
export default MoviesList;
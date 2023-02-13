import { Link } from 'react-router-dom';

const MoviesList = ({ trendingMovies }) => {
  const elements = trendingMovies.map(({ id, title }) => {
    console.log(id);
    return (
      <Link key={id} to={`/movies/${id}`}>
        <li>{title}</li>
      </Link>
    );
  });
  return <ul>{elements}</ul>;
};
export default MoviesList;

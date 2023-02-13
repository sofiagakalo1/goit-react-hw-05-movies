import css from './OneMovieDetails.module.css';
const OneMovieDetails = ({ movieDetails }) => {
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movieDetails;
  const movieGenres = genres
    ?.map(genre => {
      return genre.name;
    })
    .join(', ');
  // console.log(genres)
  const date = release_date?.slice(0, 4);
  // console.log(release_date)
  const votes = (vote_average*10).toFixed(0);
  return (
    <>
      {/* <h1>OneMovieDetails</h1> */}
      <div className={css.item}>
        <div className={css.imgBlock}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={title}
            className={css.img}
          />
        </div>
        <div className={css.infoBlock}>
          <h1 className={css.h1}>
            {title} ({date})
          </h1>
          <p className={css.score}>User score: {votes}%</p>
          <h2 className={css.h2}>Overwiev</h2>
          <p className={css.overview}>{overview}</p>
          <h3 className={css.h3}>Genres</h3>
          <p className={css.genres}>{movieGenres}</p>
        </div>
      </div>
    </>
  );
};

export default OneMovieDetails;

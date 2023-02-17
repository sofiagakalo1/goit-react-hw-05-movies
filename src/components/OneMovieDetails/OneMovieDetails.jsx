import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './OneMovieDetails.module.css';

const OneMovieDetails = ({ movieDetails, from }) => {
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
  const votes = (vote_average * 10).toFixed(0);

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
          <div className={css.additional_block}>
            <ul className={css.additional_ul}>
              <li className={css.additional_li}>
                <Link
                  to="cast"
                  state={{ from }}
                  className={css.additional_link}
                >
                  <button type="button" className={css.additional_button}>
                    Cast
                  </button>
                </Link>
              </li>
              <li className={css.additional_li}>
                <Link
                  to="reviews"
                  state={{ from }}
                  className={css.additional_link}
                >
                  <button type="button" className={css.additional_button}>
                    Rewiews
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<p>...loading</p>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default OneMovieDetails;

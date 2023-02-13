const OneMovieDetails = ({ movieDetails }) => {
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movieDetails;
  const movieGenres = genres?.map(genre=> {return (genre.name)}).join(', ');
  // console.log(genres)
  const date = release_date?.slice(0, 4);
  // console.log(release_date)
  return (
    <>
      {/* <h1>OneMovieDetails</h1> */}
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
      <h2>
        {title} ({date})
      </h2>
      <p>User score: {vote_average}</p>
      <h3>Overwiev:</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{movieGenres}</p>
    </>
  );
};

export default OneMovieDetails;

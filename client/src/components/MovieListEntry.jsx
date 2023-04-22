import React from 'react';

const MovieListEntry = ({ movie, handleChange }) => {
  return (
    <>
      <span onClick={(e) => {
        let isHidden = document.querySelector(`.movie-info[data-title='${movie.title}']`).hidden;
        document.querySelector(`.movie-info[data-title='${movie.title}']`).hidden = !isHidden;
      }}>{movie.title}</span>
      <div className="movie-info" data-title={movie.title} hidden>
        <div>Rating: {movie.rating}</div>
        <div>Year: {movie.release_year}</div>
        <div>Runtime: {movie.runtime} min</div>
        <img src={movie.image} />
        <button type="button" name="watched" value={movie.watched} onClick={(e) => {
          let isWatched = !movie.watched;
          handleChange(movie.title, isWatched);
          let movieListEntry = document.querySelector(`.movie-list-entry[data-title='${movie.title}']`);
          movieListEntry.style.color = isWatched ? 'green' : 'black';
        }}>{movie.watched ? "Watched" : "Not Watch"}</button>
      </div>
    </>
  );
};

export default MovieListEntry;
import React from 'react';

const MovieListEntry = ({ movie, handleChange }) => {
  return (
    <>
      <span onClick={(e) => {
        let isHidden = document.querySelector(`.movie-info[data-title='${movie.title}']`).hidden;
        document.querySelector(`.movie-info[data-title='${movie.title}']`).hidden = !isHidden;
      }}>{movie.title}</span>
      <div className="movie-info" data-title={movie.title} hidden>
        <div>Year: </div>
        <div>Runtime:</div>
        <div>MetaScore:</div>
        <div>imdbRating</div>
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
import React from 'react';

const MovieListEntry = ({ movie, handleChange }) => {
  return (
    <>
      <>{movie.title}</>
      <label>
        <input type="checkbox" className="watched-checkbox" value={movie.title} checked={movie.watched}onChange={(e) => {
          let movieTitle = e.target.value;
          let isWatched = e.target.checked;
          handleChange(movieTitle, isWatched);
        }}/>
        Watched
      </label>
    </>
  );
};

export default MovieListEntry;
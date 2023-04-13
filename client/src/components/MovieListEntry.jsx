import React from 'react';

const MovieListEntry = ({ movie, handleChange }) => {
  return (
    <>
      <>{movie.title}</>
      <label>
        <input type="checkbox" className="watched-checkbox" value={movie.title} checked={movie.watched}onChange={(e) => {
          let colorMap = {true: 'green', false: 'black'};
          let movieTitle = e.target.value;
          let isWatched = e.target.checked;
          handleChange(movieTitle, isWatched);
          let movieListEntry = document.querySelector(`[data-title='${movie.title}']`);
          movieListEntry.style.color = colorMap[isWatched];
        }}/>
        Watched
      </label>
    </>
  );
};

export default MovieListEntry;
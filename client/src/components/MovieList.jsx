import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({ movies, handleChange }) => {
  let colorMap = {true: 'green', false: 'black'};

  return (
    <div className="movie-list">
      {movies.map((movie) => <div className="movie-list-entry" style={{color: colorMap[movie.watched]}} key={movie.title} data-title={movie.title}><MovieListEntry movie={movie} handleChange={handleChange}/></div>)}
    </div>
  );
};


export default MovieList;
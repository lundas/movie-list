import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({ movies, handleChange }) => {
  let colorMap = {true: 'green', false: 'black'};

  return (
    <ul className="movie-list">
      {movies.map((movie) => <li className="movie-list-entry" style={{color: colorMap[movie.watched]}} key={movie.title} data-title={movie.title}><MovieListEntry movie={movie} handleChange={handleChange}/></li>)}
    </ul>
  );
};


export default MovieList;
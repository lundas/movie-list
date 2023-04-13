import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({ movies, handleChange }) => {

  return (
    <ul>
      {movies.map((movie) => <li key={movie.title}><MovieListEntry movie={movie} handleChange={handleChange}/></li>)}
    </ul>
  );
};


export default MovieList;
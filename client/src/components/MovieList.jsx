import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({movies}) => {

  return (
    <ul>
      {movies.map((movie) => <li key={movie.title}><MovieListEntry movie={movie}/></li>)}
    </ul>
  );
};


export default MovieList;
import React, { useState } from 'react';
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (props) => {
  // state variables here
  const [movieList, setMovieList] = useState(movies);

  const updateMovieList = (query) => {
    // TODOD: calling movies here. may cause issues later
    let filteredMovies = movies.filter((movie) => {
      //TODO: handle case-sensitivity
      return movie.title.includes(query);
    });

    if (filteredMovies.length === 0) {
      setMovieList([{title: 'No Movies Found'}]);
    } else {
      setMovieList(filteredMovies);
    }
  };

  return (
  <section className="movie-list-section">
    <h1>Movie List</h1>
    <div className='search-bar'><SearchBar handleChange={updateMovieList}/></div>
    <div className="movie-list"><MovieList movies={movieList} /></div>
  </section>
  )
};

export default App;
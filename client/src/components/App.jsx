import React, { useState } from 'react';
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'
import AddMovieBar from './AddMovieBar.jsx'

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

const App = (props) => {
  // state variables here
  const [movies, setMovies] = useState([]);
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

  const addMoviesToList = (movieTitle) => {
    let newMovies = movies.concat([{title: movieTitle}]);
    setMovies(newMovies);
    return newMovies;
  };

  return (
  <section className="movie-list-section">
    <h1>Movie List</h1>
    <div className='add-bar'><AddMovieBar handleClick={addMoviesToList} setMovieList={setMovieList}/></div>
    <div className='search-bar'><SearchBar handleChange={updateMovieList}/></div>
    <div className="movie-list"><MovieList movies={movieList} /></div>
  </section>
  )
};

export default App;
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

  const updateMovieList = (query, isWatched = false) => {
    // TODO: calling movies here. may cause issues later
    let filteredMovies = movies.filter((movie) => {
      //TODO: handle case-sensitivity
      return movie.title.includes(query) && movie.watched === isWatched;
    });
    setMovieList(filteredMovies);
  };

  const addMoviesToList = (movieTitle) => {
    let newMovies = movies.concat([{title: movieTitle, watched: false}]);
    setMovies(newMovies);
    return newMovies;
  };

  const updateWatchedProperty = (movieTitle, isWatched) => {
    let newMovies = movies.map((movie) => {
      return movie.title === movieTitle ? {title: movieTitle, watched: isWatched} : movie;
    });
    let newMovieList = movieList.map((movie) => {
      return movie.title === movieTitle ? {title: movieTitle, watched: isWatched} : movie;
    });
    setMovies(newMovies);
    setMovieList(newMovieList);
  }

  return (
  <section className="movie-list-section">
    <h1>Movie List</h1>
    <div className='add-bar'><AddMovieBar handleClick={addMoviesToList} setMovieList={setMovieList}/></div>
    <div className='search-bar'><SearchBar handleChange={updateMovieList}/></div>
    <span id="watched-filter-buttons">
      <button type="button" id="watched-button" value="watched" onClick={(e) => {
        let isWatched = true;
        let query = document.querySelector('#search-text-input').value;
        updateMovieList(query, isWatched);
        }}>Watched</button>
      <button type="button" id="to-watch-button" value="to-watch" onClick={(e) => {
        let isWatched = false;
        let query = document.querySelector('#search-text-input').value;
        updateMovieList(query, isWatched);
      }}>To Watch</button>
    </span>
    <div className="movie-list"><MovieList movies={movieList} handleChange={updateWatchedProperty} /></div>
  </section>
  )
};

export default App;
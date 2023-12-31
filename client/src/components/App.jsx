import React, { useState, useEffect } from 'react';
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'
import AddMovieBar from './AddMovieBar.jsx'
import getMovieData from '../lib/getMovieData.js'


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

  useEffect(() => {
    getMovieData((response) => {
      setMovies(response.data);
      setMovieList(response.data);
    });
  }, []);


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
  <div className="movie-list-div">
    <h1>Movie List</h1>
    <div className='text-bar'><AddMovieBar handleClick={addMoviesToList} setMovieList={setMovieList}/></div>
    <div className='text-bar'><SearchBar handleChange={updateMovieList}/></div>
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
  </div>
  )
};

export default App;
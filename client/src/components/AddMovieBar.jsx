import React, { useState } from 'react';

const AddMovieBar = ({ handleClick, setMovieList }) => {
  return (
    <form className="add-movie">
      <input id="add-movie-text" type="text" placeholder="Add Movie" />
      <input type="submit" value="Add" onClick={ (e) => {
        e.preventDefault();
        let formText = document.querySelector('#add-movie-text').value;
        let newMovies = handleClick(formText);
        setMovieList(newMovies);
      }}/>
    </form>
  );
};

export default AddMovieBar;
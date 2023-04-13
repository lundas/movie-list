import React, { useState } from 'react';

const SearchBar = ({handleChange}) => {
  //state varibles here

  return (
    <form className="search" method="get" action="">
      <input type="search" id="search-text-input" placeholder="Search" onChange={(e)=>{
        handleChange(e.target.value);
      }}/>
    </form>
  );
};

export default SearchBar;
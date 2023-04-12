import React, { useState } from 'react';

const SearchBar = ({handleChange}) => {
  //state varibles here
  const [query, setQuery] = useState('');

  return (
    <form className="search" method="get" action="">
      <input type="search" placeholder="Search" value={query} onChange={(e)=>{
        setQuery(e.target.value);
        handleChange(query);
      }}/>
      <input type="button" value="Go" />
    </form>
  );
};

export default SearchBar;
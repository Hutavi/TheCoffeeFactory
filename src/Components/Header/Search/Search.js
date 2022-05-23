import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import "./Search.css";


const Search = () => {
  return (
    <div className='search'>
      <input className='input-search' type="text" placeholder='Search'/>
    </div>
  );
};


Search.propTypes = {

};


export default Search;

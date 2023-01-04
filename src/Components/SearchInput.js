import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Assets/Search.png';

const SearchInput = ({ search, handleChange }) => (
  <div className="search_input">
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={handleChange}
      icon="search"
    />
    <img src={Search} alt="search" />
  </div>
);

SearchInput.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchInput;

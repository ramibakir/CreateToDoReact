import React from 'react';

const Search = ({ search, handleSearch }) => {
  const handleChange = (event) => {
    handleSearch(event);
  };

  return (
    <section>
      <form id="search">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          placeholder="Title"
          onChange={handleChange}
          value={search}
        />
      </form>
    </section>
  );
};

export default Search;

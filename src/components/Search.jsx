import React from 'react';

const Search = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleChange = (event) => {
    handleSearch(event);
  };

  return (
    <section id="search">
      <form id="search">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="searchBox"
          placeholder="Title"
          onChange={handleChange}
          value={search}
        />
      </form>
    </section>
  );
};

export default Search;

import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="">Search </label>
      <input
        type="text"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
};

export default SearchItem;

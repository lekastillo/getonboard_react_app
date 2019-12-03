import React from "react";

const SearchBar = ( { handleChange }) => {
  return (
    <section className="text-center search">
      <div className="bg-gray-200 shadow p-4 flex">
        <span className="w-auto flex justify-end items-center text-grey p-2">
          <i className="material-icons text-3xl">search</i>
        </span>
        <input className="w-full bg-gray-200 rounded p-2 " type="text" placeholder="Try 'React + Rails'" onChange={ handleChange } />
        </div>
    </section>
    );
  };

  export default SearchBar;

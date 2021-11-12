import React from "react";
import "../styles/Search.styl";
const Searcher = () => {
  return (
    <form className="Search">
      <input
        type="search"
        placeholder="Encuentra lo mejor para tu mascota"
        aria-label="Encuentra lo mejor para tu mascota"
      />
      <button className="" type="button">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Searcher;

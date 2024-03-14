// components/SearchBar.js
import React from "react";
import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import "../../css/SearchBar.css";

function SearchBar({ searchIn }) {
  const { searchTerm, setSearchTerm } = useContext(NotesContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={"Search in " + searchIn + "....."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;

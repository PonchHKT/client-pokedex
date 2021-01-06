import React from "react";

const SearchBar = ({ onSearch }) => (
        <div className="searchbar">
            <input id="search" type="text" className="validate" onChange={(e) => onSearch(e.target.value)} />
        </div>
)

export default SearchBar;

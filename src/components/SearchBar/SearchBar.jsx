import React from "react";

const SearchBar = (props) => {
    return (
        <input type="text" 
        className="search-bar" 
        placeholder={props.placeholder} 
        onChange={props.handleChange} />
    )
}

export default SearchBar;
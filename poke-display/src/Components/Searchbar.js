import React from "react";
import "./Searchbar.css";

function SearchBar({ handleChange, value, chosenPoke }) {
  return (
    <div>
      <img
        id="pokemonlogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
      />
      <br />
      <input
        id="input"
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Search-a-poke"
      ></input>
      <button id="searchbutton" onClick={chosenPoke}></button>
    </div>
  );
}
export default SearchBar;

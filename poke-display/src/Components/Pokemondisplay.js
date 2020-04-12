import React from "react";
import "./Pokemondisplay.css";

function PokemonDisplay({ results }) {
  return (
    <ul>
      <img id="PDImg" src={results.img_url} alt="pokemon" />
      <div id="contentdiv">
        <p>ID: {results.id}</p>
        <p id="name">Name: {results.name}</p>
        <p>Description:{results.description}</p>
      </div>
    </ul>
  );
}
export default PokemonDisplay;

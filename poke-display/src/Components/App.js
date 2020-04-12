import React, { useState } from "react";
import SearchBar from "./Searchbar";
import PokemonDisplay from "./Pokemondisplay";
import Autocomplete from "./Autocomplete";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState("");

  function chosenPoke() {
    fetch(`http://localhost:5000/pokemon?search=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        console.log(results);
        setResults(data[0]);
      });
  }

  function handleChange(event) {
    console.log("i'm clicked");
    setSearchTerm(event.target.value);
    setResults("");
  }
  function handleSelect(option) {
    setSearchTerm(option);
  }

  return (
    <div className="App">
      <SearchBar
        handleChange={handleChange}
        value={searchTerm}
        chosenPoke={chosenPoke}
        searchTerm={searchTerm}
      />

      {results ? (
        <PokemonDisplay results={results} />
      ) : (
        <Autocomplete searchTerm={searchTerm} handleSelect={handleSelect} />
      )}
    </div>
  );
}
export default App;

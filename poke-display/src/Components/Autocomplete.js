import React, { useEffect, useState } from "react";
import "./Autocomplete.css";
function Autocomplete({ searchTerm, handleSelect }) {
  const [options, setOptions] = useState([""]);
  useEffect(
    function() {
      fetch(`http://localhost:5000/pokemon?search=${searchTerm}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setOptions(data);
        });
    },
    [searchTerm]
  );
  return (
    <ul>
      {options.map(item => (
        <li onClick={() => handleSelect(item.name)}>
          <img src={item.img_url} alt="pokemon" />
          <div>
            {/* <p>ID: {item.id}</p> */}
            <p>Name: {item.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Autocomplete;

import React, { useState } from "react";
import "./buttons.css";
// import blowUpBen from "../App/Index";
const topics = [
  { text: "babel", used: false },
  { text: "css", used: false },
  { text: "codeWars", used: false },
  { text: "express", used: false },
  { text: "git", used: false },
  { text: "heroku", used: false },
  { text: "html", used: false },
  { text: "jest", used: false },
  { text: "js", used: false },
  { text: "netlify", used: false },
  { text: "node", used: false },
  { text: "pg", used: false },
  { text: "postman", used: false },
  { text: "react", used: false },
  { text: "vsCode", used: false }
];

function Buttons({ blowUpBen }) {
  const [options, setOptions] = useState(topics);
  return (
    <div id="buttonDiv">
      {options.map(
        (topic, index) =>
          !topic.used && (
            <button
              onClick={() => {
                setOptions([
                  ...options.slice(0, index),
                  { ...topic, used: true },
                  ...options.slice(index + 1)
                ]);
                blowUpBen();
              }}
              id={topic.text}
              alt={topic.text}
            ></button>
          )
      )}
    </div>
  );
}

export default Buttons;

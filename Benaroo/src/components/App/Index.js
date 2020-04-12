import React, { useState, useEffect } from "react";
import "./App.css";
import benHead from "../../benFixed.png";
import mrBenBod from "../../benBody.png";
import Buttons from "../Buttons/buttons";
import benaroo from "../Buttons/benarooTitle.png";
import docs from "../Speech/bubbles/chris docs.JPG";
import errors from "../Speech/bubbles/chris errors.JPG";
import google from "../Speech/bubbles/chris google.JPG";
import hive from "../Speech/bubbles/chris hive.JPG";
import idiot from "../Speech/bubbles/chris idiot.JPG";
import know from "../Speech/bubbles/chris know.JPG";
import minutes from "../Speech/bubbles/chris minutes.JPG";
import nearly from "../Speech/bubbles/chris nearly.JPG";
import nice from "../Speech/bubbles/chris nice.JPG";
import plan from "../Speech/bubbles/chris plan.JPG";
import boom from "../Buttons/boom.png";

function App() {
  //
  const [size, setSize] = useState(50);
  const [benLimit, setBenLimit] = useState(51);
  const [gameOver, setGameOver] = useState("");
  const [head, setHead] = useState("");
  const [quote, setQuote] = useState("");
  const [isPlayer1, setIsPlayer1] = useState(true);
  const [winner, setWinner] = useState("");

  const bubbles = [
    docs,
    errors,
    google,
    hive,
    idiot,
    know,
    minutes,
    nearly,
    nice,
    plan
  ];

  // ADDS QUOTES FROM CHRIS.
  useEffect(() => {
    if (size > 170 && size < 220) {
      setQuote(bubbles[Math.floor(Math.random() * 10)]);
      console.log("over 70");
    }
  }, [size]);

  //GENERATES LIMIT AND DIFFERENT BUTTON NUMBERS.
  useEffect(() => {
    setBenLimit(Math.floor(Math.random() * (220 - 180 + 1) + 180));
  }, []);

  function blowUpBen() {
    setSize(size + Math.floor(Math.random() * (30 - -2) + -2));
    setIsPlayer1(!isPlayer1);
  }

  console.log("size=  " + size);
  console.log("I can see  " + benLimit);

  //RENDERS GAME OVER AND BOOM PICTURE.
  useEffect(() => {
    if (size > benLimit) {
      console.log("Game Over");
      setGameOver("GAME OVER!");
      setHead(boom);
      setWinner(isPlayer1 ? "Player 1 Wins!" : "Player 2 Wins");
    }
  }, [size]);

  return (
    <div className="App">
      <img id="benarooTitle" src={benaroo} alt="Benaroo" />
      <h1>Click on a button below and see how Ben reacts!</h1>
      <h2>
        When Chris starts giving advice, you know Ben is nearly at breaking
        point!
      </h2>
      <h4>
        If you're the one who makes his head explode, hang your head in shame!
      </h4>
      <img
        className="benHead"
        src={benHead}
        alt="ben"
        style={{ width: size }}
      />
      <img className="benBod" src={mrBenBod} alt="benbod" />
      <Buttons blowUpBen={blowUpBen} />
      <p>{gameOver}</p>
      <p id="winner">{winner}</p>

      <img id="quote" className="roll-in-blurred-left" src={quote} alt="" />
      <img id="boom" src={head} alt="" />
      <p id="player">{isPlayer1 ? "Player 1" : "Player 2"}</p>
    </div>
  );
}
export default App;
